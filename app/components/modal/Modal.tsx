import React from "react";

const Modal = ({
  modalId,
  modalHeading,
  modalSize,
  children,
}: {
  modalId: string;
  modalHeading: string;
  modalSize?: string;
  children: React.ReactNode;
}) => {
  let modalWidth = "w-11/12";
  switch (modalSize) {
    case "small":
      modalWidth = "w-4/12";
      break;
    case "medium":
      modalWidth = "w-7/12";
      break;
    case "large":
      modalWidth = "w-9/12";
      break;
    default:
      break;
  }
  return (
    <dialog id={modalId} className="modal">
      <div
        className={`modal-box ${modalWidth} max-w-5xl rounded-none flex flex-col pr-0`}
      >
        <div className="sticky top-0 bg-white z-10 h-1/6">
          {" "}
          {/* Added z-10 */}
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              x
            </button>
          </form>
          <h2 className="text-2xl font-semibold mb-4">{modalHeading}</h2>
        </div>
        <div className="overflow-y-auto max-h-[calc(100vh-150px)] w-full h-5/6">
          {" "}
          {/* Added this wrapper for content */}
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
