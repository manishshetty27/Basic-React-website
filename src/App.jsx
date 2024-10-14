import { useState } from 'react';
import './index.css';  // Import the normal CSS

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="fixed-buttons">
        <div className="button-wrapper">
          <button onClick={() => setColor('red')} className="button red">Red</button>
          <button onClick={() => setColor('green')} className="button green">Green</button>
          <button onClick={() => setColor('yellow')} className="button yellow">Yellow</button>
          <button onClick={() => setColor('pink')} className="button pink">Pink</button>
          <button onClick={() => setColor('blue')} className="button blue">Blue</button>
          <button onClick={() => setColor('orange')} className="button orange">Orange</button>
          <button onClick={() => setColor('brown')} className="button brown">Brown</button>
          <button onClick={() => setColor('black')} className="button black">Black</button>
          <button onClick={() => setColor('gray')} className="button gray">Gray</button>
          <button onClick={() => setColor('purple')} className="button purple">Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
