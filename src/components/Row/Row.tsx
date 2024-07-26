import React from 'react';
import {Square} from "../Square/Square";
import {useBoard} from "../Board/useBoard";
import {Piece} from "../../models/Piece";

interface IRow {
    x: number;
    y: number;
    piece: Piece | null;
}

const Row = ({x, y, piece}: IRow) => {
    const {handleSquareClick, setSelectedPiece, possibleMoves} = useBoard();
    const isPossibleMove = possibleMoves.some(move => move.x === x && move.y === y);
    return (
        <Square x={x} y={y} key={`${x}-${y}`} piece={piece} onClick={() => {
            if (piece) {
                setSelectedPiece({x, y})
            }
            handleSquareClick(x, y)
        }} isPossibleMove={isPossibleMove}/>
    );
};

export default Row;