export function Modal ({ isOpen, onClose, children }){
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm backdrop-filter">
            <div className="rounded-lg p-6 z-10 w-9/12">
                <button
                    className="mb-4 bg-red-500 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Cancelar registro
                </button>
                {children}
            </div>
      </div>
    );
  };