import React from 'react';

export default function GridElement({row, col, selected, onClick, startPoint, finishPoint}) {

    return (
        <div className={`grid-item${selected ? ' selected' : ''}${startPoint ? ' start': ''}${finishPoint ? ' finish': ''}`} onClick={() => onClick(row, col)}></div>
    );
}