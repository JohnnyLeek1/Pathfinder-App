import React from 'react';
import '../styles/components/StyledButton.scss';

export default function StyledButton({ text, onClick, icon, color }) {

    return (
        <button className={`button ${color}`} onClick={onClick}>
            {icon ? <span className='material-icons'>{icon}</span> : undefined} {text}
        </button>
    )

}