import '../index.css';
type ToggleProps = {
    isDarkTheme: boolean;
    toggleTheme: () => void;
  };

const Main = ({ isDarkTheme, toggleTheme}: ToggleProps) => {

    const handleClick = () => {
        localStorage.setItem('init', 'true')

        window.location.assign('/')
    }
  return (
    <div className='grid gap-1 grid-cols-1 py-11 justify-items-center'>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onChange={toggleTheme} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <div className={`w-full sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 block py-5 rounded-md border-2 border-gray-500 ${
          isDarkTheme ? "dark text-white" : "bg-gray-card"
        }`}
      >
                    <div className='flex justify-center p-4'>
                <p className='font-extrabold text-3xl font-roboto'>¿Cómo jugar?</p>
            </div>
            <div className='grid gap-1 grid-cols-1 p-4 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className='w-96 '>
                    <p className='py-1'>
                        Adivina la palabra oculta en cinco intentos.
                    </p>
                    <p className='py-1'>
                        Cada intento debe ser una palabra válida de 5 letras.
                    </p>
                    <p className='py-1 break-words'>
                        Después de cada intento el color de las letras cambia 
                        para mostrar qué tan cerca estás de acertar la palabra.
                    </p>
                    <p className='py-1 font-extrabold text-sm font-roboto'>Ejemplos</p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-5 divide-x-5 px-16 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className={`w-16 bg-green border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? 'text-white' : 'text-black'}`}>
                    <p className='font-extrabold text-2xl'>G</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>A</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>T</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>O</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>S</p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-4 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className='w-96'>
                    <p className='py-1'>
                    La letra G está en la palabra y en la posición correcta..
                    </p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-5 divide-x-5 px-16 justify-items-center text-justify font-normal text-sm font-roboto'>
            <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? 'text-white dark' : 'text-black'}`}>
                    <p className='font-extrabold text-2xl'>V</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>O</p>
                </div>
                <div className={`w-16 bg-yellow border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white' : 'text-black'}`}>
                    <p className='font-extrabold text-2xl'>C</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>A</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>L</p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-4 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className='w-96'>
                    <p className='py-1'>
                    La letra C está en la palabra pero en la posición incorrecta.
                    </p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-5 divide-x-5 px-16 justify-items-center text-justify font-normal text-sm font-roboto'>
            <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? 'text-white dark' : 'text-black'}`}>
                    <p className='font-extrabold text-2xl'>C</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>A</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>N</p>
                </div>
                <div className={`w-16 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white dark' : 'text-black light'}`}>
                    <p className='font-extrabold text-2xl'>T</p>
                </div>
                <div className={`w-16 bg-gray-400 border-2 flex justify-center p-2 rounded-md ${isDarkTheme ? ' text-white' : 'text-black'}`}>
                    <p className='font-extrabold text-2xl'>O</p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-4 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className='w-96'>
                    <p className='py-1'>
                    La letra O no está en la palabra.
                    </p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-1 justify-items-center text-justify font-normal text-sm font-roboto'>
                <div className='w-96'>
                    <p className='py-1'>
                    Puede haber letras repetidas. Las pistas son independientes para cada letra.
                    </p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-1 justify-items-center text-center font-normal text-sm font-roboto'>
                <div className='w-96'>
                    <p className='py-1'>
                    ¡Una palabra nueva cada 5 minutos!
                    </p>
                </div>
            </div>
            <div className='grid gap-1 grid-cols-1 p-9 justify-items-center text-center font-bold text-sm font-roboto'>
                <div className='w-96'>
                    <button className='bg-green text-white px-12 py-2' onClick={handleClick}>
                        ¡JUGAR!
                    </button>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Main
