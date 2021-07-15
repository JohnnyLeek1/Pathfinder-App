import React from 'react';

export default function GridElement({index, selected, onClick}) {

    return (
        <div className={`grid-item ${selected ? 'selected' : ''}`} onClick={() => onClick(index)}></div>
    );

}