
type ModalProps = {
  closePopup: () => void;
  isOpen: boolean;
};

const Modal: React.FC<ModalProps> = ({ closePopup, isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="w-5/12 block py-5 rounded-md border-2 border-gray-500 p-6 bg-gray-card">
            <div className="flex justify-center p-4">
              <p className="font-extrabold text-2xl font-roboto text-regal-blue">
                ¿Cómo jugar?
              </p>
            </div>
            <div className="grid gap-1 grid-cols-1 p-4 justify-items-center text-justify font-normal text-sm font-roboto">
              <div className="w-96">
                <p className="py-1 text-black text-regal-blue">
                  Adivina la palabra oculta en cinco intentos.
                </p>
                <p className="py-1 text-regal-blue">
                  Cada intento debe ser una palabra válida de 5 letras.
                </p>
                <p className="py-1 break-words text-regal-blue">
                  Después de cada intento el color de las letras cambia para
                  mostrar qué tan cerca estás de acertar la palabra.
                </p>
              </div>
            </div>

            <div className="grid gap-1 grid-cols-1 p-1 justify-items-center text-justify font-normal text-sm font-roboto">
              <div className="w-96">
                <p className="py-1 text-regal-blue">
                  Puede haber letras repetidas. Las pistas son independientes
                  para cada letra.
                </p>
              </div>
            </div>
            <button
              className="mt-4 bg-regal-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
