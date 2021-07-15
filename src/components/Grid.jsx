import React, { useState, useEffect } from 'react';
import GridElement from './GridElement';

import '../styles/grid.scss';

export default React.forwardRef(({cells}, ref) => {
    const [grid, setGrid] = useState({ 0: false, 1: false, 2: false, 3: false });

    useEffect(() => console.log(grid), [grid]);

    useEffect(() => {
        let newGrid = {};
        for(let i = 0; i < cells; i++) {
            newGrid[i] = false;
        }

        setGrid(newGrid);
    }, [cells]);

    const updateGrid = (index) => { console.log('onclick called'); setGrid({ ...grid, [index]: !grid[index] }); } 

    return (
      <div id="grid" ref={ref}>
          {[...Array(cells)].map( (cell, i) => <GridElement index={i} selected={grid[i]} onClick={updateGrid} key={i}/>)}
      </div>
    );
});