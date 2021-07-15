import React, { useState, useEffect, useRef } from 'react';
import Grid from '../components/Grid';

export default function PathfindingMainPage() {
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
        <div id="pathfinding-main-page">
            <h1>{rows * cols} cells</h1>
            <Grid rows={rows} cols={cols} ref={gridDiv} />
        </div>
    );

}