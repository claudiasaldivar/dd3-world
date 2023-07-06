import Delete from "../assets/icons/Delete";

type KeyProps = {
  handleKeyPress: (arg1: string) => void;
  isDarkTheme: boolean;
};

const Keyboard: React.FC<KeyProps> = ({ handleKeyPress, isDarkTheme }) => {
  const keyboardLetters = [
    "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
    "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ",
    "ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"
  ];

  return (
    <div className={`flex p-6 justify-center items-center ${isDarkTheme ? 'bg-gray-200 text-white' : 'bg-gray-card'}`}>
      <div className="grid gap-1 grid-cols-10 justify-items-center">
        {keyboardLetters.map((letter, index) => (
          <button
            className={`${letter === 'ENTER' ? 'w-16' : 'w-12'} ${isDarkTheme ? 'bg-dark-key' : 'bg-gray-key'} h-12 rounded-md flex justify-center items-center`}
            key={index}
            onClick={() => handleKeyPress(letter)}
          >
            {letter !== 'DELETE' ? letter : <Delete isDarkTheme={isDarkTheme} />}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
