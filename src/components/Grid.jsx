import React, { useState, useEffect } from 'react';
import GridElement from './GridElement';
import StyledButton from './StyledButton';

import '../styles/components/Grid.scss';

export default React.forwardRef(({rows, cols}, ref) => {
    const [grid, setGrid] = useState({ });

    const [startPoint, setStartPoint] = useState({ });
    const [finishPoint, setFinishPoint] = useState({ });

    const [placingStart, setPlacingStart] = useState(false);
    const [placingFinish, setPlacingFinish] = useState(false);

    useEffect(() => console.log(grid), [grid]);

    useEffect(() => {
        let newGrid = {};
        for(let i = 0; i < rows; i++) {
            newGrid[i] = {};
            for(let j = 0; j < cols; j++) {
                newGrid[i][j] = {
                    start: false,
                    finish: false,
                    visited: false,
                    wall: false
                };
            }
        }

        setGrid(newGrid);

    }, [rows, cols]);

    useEffect(() => console.log(rows, cols), [rows, cols]);

    const updateGrid = (row, col) => { 
        const value = {
            start: placingStart ? true : false,
            finish: placingFinish ? true : false,
            visited: false,
            wall: !placingStart && !placingFinish ? !grid[row][col].wall : false
        }

        if(placingStart) {
            setStartPoint({ row: row, col: col });
            setPlacingStart(false);
        }
        else if(placingFinish) {
             setFinishPoint({ row: row, col: col });
             setPlacingFinish(false);
        }

        setGrid({ ...grid, [row]: { ...grid[row], [col]: value } }); 
    } 

    const setPlacement = position => {
        if(position === 'start') {
            if(placingFinish) setPlacingFinish(false);
            setPlacingStart(!placingStart);             
        } else if(position === 'finish') {
            if(placingStart) setPlacingStart(false);
            setPlacingFinish(!placingFinish);
        }
    }

    return (
      <>
      <StyledButton text={placingStart ? "Cancel" : "Place Start Point"} onClick={() => setPlacement('start')} icon="flag" color="success" />
      <StyledButton text={placingFinish ? "Cancel" : "Place Finish Point"} onClick={() => setPlacement('finish')} icon="sports_score" color="primary" />

      <div id="grid" ref={ref}>
          {[...Array(rows)].map( (row, i) => {
              return [...Array(cols)].map( (cols, j) => {
                return <GridElement 
                            row={i} 
                            col={j} 
                            selected={grid[0] ? grid[i][j].wall : false} 
                            startPoint={startPoint.row === i && startPoint.col === j} 
                            finishPoint={finishPoint.row === i && finishPoint.col === j}
                            onClick={updateGrid} 
                            key={`${i}-${j}`} 
                        />;
              })
          })}
      </div>
      </>
    );
});