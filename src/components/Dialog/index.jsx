// components/InstructionDialog.jsx
import "./Dialog.scss";

export default function Dialog({
  open,
  title = "Instructions",
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="dialog-backdrop">
      <div className="dialog">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h3>{title}</h3>

        <div className="content">{children}</div>
      </div>
    </div>
  );
}
