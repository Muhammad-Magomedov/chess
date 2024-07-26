import React from 'react';
import {ICell} from "../../interfaces";

const EmptyCell = ({onClick, squareColor, possibleMoveClass}: ICell) => {
    return (
        <div onClick={onClick} className={`square ${squareColor} ${possibleMoveClass}`}/>
    );
};

export default EmptyCell;