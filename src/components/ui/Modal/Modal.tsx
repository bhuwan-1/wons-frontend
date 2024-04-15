import { title } from "process";

type Props = {
  modalOpen: boolean;
  onClose?: () => void;
  title: string;
  desc: string;
  type: 'success' | 'error';
};

export const Modal: React.FC<Props> = ({
  modalOpen,
  onClose,
  title,
  desc,
  type,
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  const getBackgroundColor = () => {
    switch (type) {
      case "success":
        return "bg-primary"; 
      case "error":
        return "bg-red-500";
      default:
        return ""; 
    }
  };
  return (
    <dialog className="modal" open={modalOpen}>
      <div className={`modal-box ${getBackgroundColor()} text-white`}>
        <form method="dialog">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={handleClose}
          >
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{desc}</p>
      </div>
    </dialog>
  );
};
