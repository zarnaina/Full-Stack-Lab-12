export default function Status({ loading, error }) {
  if (loading) return <div className="status loading">Loading users...</div>;
  if (error) return <div className="status error">Error: {error}</div>;
  return null;
}
