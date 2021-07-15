import './styles/App.scss';
// import Grid from './components/Grid.old';
import Grid from './components/Grid';
import React, { useEffect, useState, useRef } from 'react';

function App() {
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const gridDiv = useRef(undefined);
  
  const updateGrid = () => {
    if(gridDiv) {
      setRows(Math.floor(gridDiv.current.offsetHeight / 25));
      setCols(Math.floor(gridDiv.current.offsetWidth / 25));
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateGrid);
    updateGrid();

    return () => window.removeEventListener('resize', updateGrid);
  }, []);


  return (
    <div className="App">
      <h1>{rows * cols} cells</h1>
      <Grid cells={rows * cols} ref={gridDiv} />
    </div>
  );
}

export default App;
