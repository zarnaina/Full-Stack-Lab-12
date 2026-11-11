export default function Button({ label, color = 'primary', onClick }) {
  return (
    <button className={'btn ' + color} onClick={onClick}>
      {label}
    </button>
  );
}
