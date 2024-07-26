import React from 'react';
import {ICell} from "../../interfaces";
import {getImage} from "../../utils";
import {Piece} from "../../models/Piece";

interface ICellWithFigure extends ICell {
    piece: Piece;
};

const CellWithFigure = ({squareColor, possibleMoveClass, onClick, piece}: ICellWithFigure) => {
    return (
        <div className={`square ${squareColor} ${possibleMoveClass}`} onClick={onClick}>
            <img width={40} height={40} src={getImage(piece)} alt=""/>
        </div>
    );
};

export default CellWithFigure;