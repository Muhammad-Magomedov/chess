import "./Board.css";
import React from "react";
import {useBoard} from "./useBoard";
import Row from "../Row/Row";

export const Board = () => {
    const {board} = useBoard();

    return (
        <>
            <h1>Chess Game</h1>
            <div className="board">
                {board.squares.map((row, y) =>
                    row.map((piece, x) => <Row piece={piece} y={y} x={x}/>))}
            </div>
        </>
    )
}