import { useState } from 'react';
import './App.scss';
import Home from './pages/Home';
import RoulettePage from './pages/RoulettePage'

function App() {

  const[page, setPage] = useState(0);
  const[elements, setElements] = useState([]);

  function handlePage(p){setPage(p)}
  function handleElements(e){setElements(e)}

  return (
    <div className="App">
      {page === 0 && <Home handlePage={handlePage} handleElements={handleElements} />}
      {page === 1 && <RoulettePage handlePage={handlePage} elements={elements} />}
    </div>
  );
}

export default App;
