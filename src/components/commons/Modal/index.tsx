import Icons from '../Icons';
import { useMemo } from 'react';

export interface ModalProps {
  isOpen?: boolean;
  onCancel?: (() => void) | undefined;
  onConfirm?: (() => void) | undefined;
  cancelText?: string | undefined;
  confirmText?: string | undefined;
  title?: string | undefined;
  content?: string;
  type?: string;
}

const Modal = ({
  isOpen,
  onCancel,
  onConfirm,
  cancelText,
  confirmText,
  title,
  content,
  type,
}: ModalProps) => {
  const contentClasses = type === 'success' && 'font-medium text-center text-black';

  const renderTitle = useMemo(() => {
    switch (type) {
      case 'success':
        return (
          <div className="w-full flex justify-center items-center mb-4">
            <div className="mx-full flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10">
              <Icons.Check />
            </div>
          </div>
        );

      default:
        if (!title) return null;

        return (
          <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">
            {title}
          </h3>
        );
    }
  }, [title, type]);

  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                {renderTitle}

                <div className="mt-2">
                  <p className={`text-sm text-gray-500 ${contentClasses}`}>{content}</p>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex sm:flex-row flex-col sm:pb-6 pb-4 justify-end sm:px-6 sm:gap-6 gap-2">
              {cancelText && (
                <button
                  type="button"
                  className="flex-1 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:w-auto"
                  onClick={onCancel}
                >
                  {cancelText}
                </button>
              )}

              {confirmText && (
                <button
                  type="button"
                  className="flex-1 inline-flex w-full justify-center rounded-md bg-purple-900 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-purple-800 sm:mt-0 sm:w-auto"
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
