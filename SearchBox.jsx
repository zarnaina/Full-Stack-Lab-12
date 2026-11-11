export default function SearchBox({ value, onChange, inputRef }) {
  return (
    <input
      ref={inputRef}
      className="search"
      placeholder="Search by name..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
