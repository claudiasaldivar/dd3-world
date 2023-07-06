import{ useState, useRef, useEffect } from "react";
import Help from '../assets/icons/Help';
import Graph from '../assets/icons/Graph'
import Keyboard from './Keyboard'
import ModalHelp from '../assets/modal/ModalHelp'
import ModalGraph from '../assets/modal/ModalGraph'
import data from '../assets/data/words.json'

type ToggleProps = {
  isDarkTheme: boolean
  toggleTheme: () => void
};

type State = {
  selectedWord: string
  timeLeft: number
  isComplete: boolean
  selectedWordDisplay: string
  isOpen: boolean
  win: boolean
  victory: number
  game: number
}

const Worlde = ({ isDarkTheme, toggleTheme }: ToggleProps) => {
  const palabrasCincoLetras = data.palabras.filter((palabra: string) => palabra.length === 5);
  const selectedWordRef = useRef(palabrasCincoLetras[Math.floor(Math.random() * palabrasCincoLetras.length)]);
  const [selectedWord, setSelectedWord] = useState<State["selectedWord"]>(selectedWordRef.current);
  const [timeLeft, setTimeLeft] = useState<State["timeLeft"]>(5 * 60); // In seconds
  const [isGameComplete, setIsGameComplete] = useState<State["isComplete"]>(false);
  const [selectedWordDisplay, setSelectedWordDisplay] = useState<State["selectedWordDisplay"]>("");
  const [inputValues, setInputValues] = useState<Array<{ letter: string; status: string }>>(
    Array(selectedWord.length).fill({ letter: "", status: "" })
  );
  const [isOpen, setIsOpen] = useState<State["isOpen"]>(false);
  const [win, setWin] = useState<State["win"]>(false);
  const [victoryCount, setVictoryCount] = useState<State["victory"]>(0);
  const [gameCount, setGameCount] = useState<State["game"]>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          // Change the selected word when time reaches 0
          const newWordIndex = Math.floor(Math.random() * palabrasCincoLetras.length);
          const newSelectedWord = palabrasCincoLetras[newWordIndex];
          setSelectedWord(newSelectedWord);
          selectedWordRef.current = newSelectedWord;
          setInputValues(Array(newSelectedWord.length).fill({ letter: "", status: "" }));
          return 5 * 60; // Reset the time back to 5 minutes
        }
        return prevTime - 1;
      });
    }, 1000);
  
    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);

  
  // Convert the remaining time to minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  // Format the minutes and seconds with leading zeros if necessary
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const openGraph = () => {
    setWin(true);
  };

  const closeGraph = () => {
    setWin(false);
  };
  
  const handleKeyPress = (key: string) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues];
      const emptyIndex = newValues.findIndex((value) => value.letter === "");
  
      if (emptyIndex !== -1) {
        const correctLetter = selectedWord[emptyIndex];
  
        if (key.toLowerCase() === correctLetter) {
          newValues[emptyIndex] = { letter: key, status: "bg-green" };
        } else {
          const matchingIndices: number[] = [];
  
          selectedWord.split("").forEach((letter: string, index: number) => {
            if (letter.toLowerCase() === key.toLowerCase() && index !== emptyIndex) {
              matchingIndices.push(index);
            }
          });
  
          if (matchingIndices.length > 0) {
            newValues[emptyIndex] = { letter: key, status: "bg-yellow" };
            matchingIndices.forEach((index) => {
              newValues[index] = { ...newValues[index], status: "bg-yellow" };
            });
          } else {
            newValues[emptyIndex] = { letter: key, status: "bg-gray-wrong" };
          }
        } 
      }
      return newValues;
    });
  };
  
  useEffect(() => {
    const enteredWord = inputValues.map((value) => value.letter.toLowerCase()).join("");
    if (enteredWord.length === 5) {
      setGameCount((prevCount) => prevCount + 1);
      if (enteredWord === selectedWord.toLowerCase()) {
        setVictoryCount((prevCount) => prevCount + 1);
      } else {
        setIsGameComplete(true);
      }
      setWin(true);
    }
  }, [inputValues, selectedWord]);

  useEffect(() => {
    if (isGameComplete) {
      setSelectedWordDisplay(selectedWord);
    }
  }, [isGameComplete, selectedWord]);
  
  return (
    <>
      {isOpen && <ModalHelp isOpen={isOpen} closePopup={closePopup} />}
      {win && (
        <ModalGraph
          isOpen={win}
          closePopup={closeGraph}
          victoryCount={victoryCount}
          gameCount={gameCount}
          formattedMinutes={formattedMinutes}
          formattedSeconds={formattedSeconds}
          selectedWord={selectedWordDisplay}
        />
      )}
      <div
        className={`grid gap-1 grid-cols-1 py-11 justify-items-center h-screen ${
          isDarkTheme ? "dark text-white" : "light"
        }`}
      >
        <div
          className={`flex w-6/12 py-4 justify-around items-center ${
            isDarkTheme ? "bg-gray-500 text-white" : "bg-gray-card"
          }`}
        >
          <div className="flex justify-center items-center">
            <button onClick={openPopup}>
              <Help />
            </button>
          </div>
          <div className="flex justify-center">
            <p className="font-semibold text-4xl font-roboto">WORDLE</p>
          </div>
          <div className="flex justify-end items-center">
            <button onClick={openGraph}>
              <Graph isDarkTheme={isDarkTheme} />
            </button>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={toggleTheme}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="grid gap-1 grid-cols-5 divide-x-5 px-16 mt-12 justify-items-center text-justify font-normal text-sm font-roboto">
          {inputValues.map((value, index) => (
            <div
              key={index}
              className={`w-16 h-16 border-2 flex justify-center items-center p-2 rounded-md ${value.status}`}
            >
              <p
                className={`font-extrabold text-2xl ${
                  isDarkTheme ? "text-white" : "text-black"
                }`}
              >
                {value.letter}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Keyboard handleKeyPress={handleKeyPress} isDarkTheme={isDarkTheme} />
        </div>
      </div>
    </>
  );
}

export default Worlde;
