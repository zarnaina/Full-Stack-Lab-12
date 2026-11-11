import { useState, useEffect, useMemo, useRef } from 'react';
import Card from './components/Card.jsx';
import Counter from './components/Counter.jsx';
import UserCard from './components/UserCard.jsx';
import Status from './components/Status.jsx';
import Button from './components/Button.jsx';
import SearchBox from './components/SearchBox.jsx';
import { fetchUsers } from './api/users.js';
 
export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favs, setFavs] = useState([]);
  const [reloadKey, setReloadKey] = useState(0);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
 
  useEffect(() => {
    let ignore = false;
    setLoading(true);
    setError(null);
    fetchUsers()
      .then((data) => { if (!ignore) { setUsers(data); setLoading(false); } })
      .catch((e) => { if (!ignore) { setError(e.message); setLoading(false); } });
    return () => { ignore = true; };
  }, [reloadKey]);
 
  const visible = useMemo(
    () => users.filter((u) => u.name.toLowerCase().includes(query.toLowerCase())),
    [users, query]
  );
  function toggleFav(id) {
    setFavs(favs.includes(id) ? favs.filter((f) => f !== id) : [...favs, id]);
  }
 
  return (
    <div className="app">
      <h1>User Directory <span className="badge">{favs.length} fav</span></h1>
      <p className="sub">Lab 12 - Final: state, props, API, hooks</p>
 
      <Card title="Counter"><Counter /></Card>
 
      <Card title={'Users (' + visible.length + ' of ' + users.length + ')'}>
        <SearchBox value={query} onChange={setQuery} inputRef={inputRef} />
        {/* useRef: jump the cursor into the search box without re-rendering */}
        <Button label="Focus search" onClick={() => inputRef.current.focus()} />
                    <Button label="Reload" color="ghost" onClick={() => setReloadKey(reloadKey + 1)} />
        <Status loading={loading} error={error} />
        <div className="grid">
          {visible.map((u) => (
            <UserCard
              key={u.id}
              user={u}
              isFav={favs.includes(u.id)}
              onToggleFav={toggleFav}
            />
          ))}
        </div>
      </Card>
    </div>
  );
}
