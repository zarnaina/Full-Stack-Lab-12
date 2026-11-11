import { useState } from 'react';
import Button from './Button.jsx';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p className="count">{count}</p>
      {/* label = text, color = style, onClick = function we pass DOWN */}
      <Button label="+1" color="primary" onClick={() => setCount(count + 1)} />
      <Button label="-1" color="danger" onClick={() => setCount(count - 1)} />
      <Button label="Reset" color="ghost" onClick={() => setCount(0)} />
    </div>
  );
}
