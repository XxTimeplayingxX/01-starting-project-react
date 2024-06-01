import './TapButton.css'

export default function TapButton({ children, handleClick }) {
  return (
    <button onClick={handleClick}>{children}</button>
  );
}
