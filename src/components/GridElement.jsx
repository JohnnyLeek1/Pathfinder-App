import React from 'react';

export default function GridElement({row, col, selected, onClick}) {

    return (
        <div className={`grid-item ${selected ? 'selected' : ''}`} onClick={() => onClick(row, col)}>{row}</div>
    );
}