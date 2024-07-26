import React from "react";
import {Board as ChessBoard} from "../../models/Board";
import {calculatePossibleMoves} from "../../utils";

export const useBoard = () => {
    const [board, setBoard] = React.useState<ChessBoard>(() => new ChessBoard());
    const [selectedPiece, setSelectedPiece] = React.useState<{ x: number, y: number } | null>(null);
    const [possibleMoves, setPossibleMoves] = React.useState<{ x: number, y: number }[]>([]);

    const handleSquareClick = (x: number, y: number) => {
        if (selectedPiece) {
            if (board.movePiece(selectedPiece.x, selectedPiece.y, x, y)) {
                setBoard(board);
                setSelectedPiece(null);
                setPossibleMoves([]);
            } else {
                setSelectedPiece({x, y});
                setPossibleMoves(calculatePossibleMoves({x, y, board}));
            }
        } else {
            setSelectedPiece({x, y});
            setPossibleMoves(calculatePossibleMoves({x, y, board}))
        }
    }

    return {board, setBoard, selectedPiece, setSelectedPiece, handleSquareClick, possibleMoves};
}