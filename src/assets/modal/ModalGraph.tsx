type ModalProps = {
  closePopup: () => void;
  isOpen: boolean;
  victoryCount: number;
  gameCount: number;
  formattedMinutes: string;
  formattedSeconds: string;
  selectedWord: string;
};

const ModalGraph: React.FC<ModalProps> = ({
  closePopup,
  isOpen,
  victoryCount,
  gameCount,
  formattedMinutes,
  formattedSeconds,
  selectedWord,
}) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-5/12 block py-5 rounded-md border-2 border-gray-500 p-6 bg-gray-card">
            <div className="flex justify-center p-4">
              <p className="font-extrabold text-2xl font-roboto text-regal-blue">
                Estadísticas
              </p>
            </div>
            <div className="grid gap-1 grid-cols-2 p-4 justify-items-center text-center font-extrabold font-roboto">
              <div className="w-96">
                <p className="py-1 text-black text-regal-blue">{gameCount}</p>
                <p className="py-1 text-black text-regal-blue">Jugadas</p>
              </div>
              <div className="w-96">
                <p className="py-1 text-regal-blue">{victoryCount}</p>
                <p className="py-1 text-black text-regal-blue">Victorias</p>
              </div>
            </div>
            <div className="text-center">
              <p className="py-1 text-regal-blue">SIGUIENTE PALABRA</p>
              <p className="py-1 text-black text-regal-blue font-extrabold">
                {formattedMinutes}:{formattedSeconds}
              </p>
              <p className="py-1 text-black text-regal-blue font-extrabold">
                {selectedWord}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="mt-4 bg-green hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-64"
                onClick={closePopup}
              >
                Aceptar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalGraph;
