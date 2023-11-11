interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  cancelText: string;
  confirmText: string;
  title: string;
  content: string;
}

const Modal = ({
  isOpen,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  title,
  content,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{content}</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-3 pb-6 flex justify-end sm:px-6">
              {cancelText && (
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  onClick={onCancel}
                >
                  {cancelText}
                </button>
              )}

              {confirmText && (
                <button
                  type="button"
                  className="mt-3 ml-4 inline-flex w-full justify-center rounded-md bg-purple-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-purple-800 sm:mt-0 sm:w-auto"
                  onClick={onConfirm}
                >
                  {confirmText}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
