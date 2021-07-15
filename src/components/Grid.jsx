import React, { useState, useEffect } from 'react';
import GridElement from './GridElement';

import '../styles/grid.scss';

export default React.forwardRef(({rows, cols}, ref) => {
    const [grid, setGrid] = useState({ });

    useEffect(() => console.log(grid), [grid]);

    useEffect(() => {
        let newGrid = {};
        for(let i = 0; i < rows; i++) {
            newGrid[i] = {};
            for(let j = 0; j < cols; j++) {
                newGrid[i][j] = false;
            }
        }

        setGrid(newGrid);

    }, [rows, cols]);

    useEffect(() => console.log(rows, cols), [rows, cols]);

    const updateGrid = (row, col) => { setGrid({ ...grid, [row]: { ...grid[row], [col]: !grid[row][col] } }); } 

    return (
      <div id="grid" ref={ref}>
          {[...Array(rows)].map( (row, i) => {
              return [...Array(cols)].map( (cols, j) => {
                return <GridElement row={i} col={j} selected={grid[0] ? grid[i][j] : false} onClick={updateGrid} key={`${i}-${j}`} />;
              })
          })}
      </div>
    );
});