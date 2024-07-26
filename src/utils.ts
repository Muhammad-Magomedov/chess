import {Board as ChessBoard} from "./models/Board";
import {Color} from "./enums";
import {Piece} from "./models/Piece";

interface ICalculatePossibleMoves {
    x: number;
    y: number;
    board: ChessBoard;
}

export const calculatePossibleMoves = ({x, y, board}: ICalculatePossibleMoves) => {
    const piece = board.squares[y][x];
    const possibleMove: { x: number, y: number }[] = [];

    if (piece) {
        for (let toY = 0; toY < 8; toY++) {
            for (let toX = 0; toX < 8; toX++) {
                if (piece.canMove(x, y, toX, toY, board)) {
                    possibleMove.push({x: toX, y: toY});
                }
            }
        }
    }

    return possibleMove;
}

export const getImage = (piece: Piece | null) => {
    if (!piece) {
        return "";
    }
    const color = piece.color === Color.WHITE ? "white" : "black";
    const chessType = piece.type.toLowerCase().split('');
    chessType[0] = chessType[0].toUpperCase();
    return `${process.env.PUBLIC_URL}/assets/${color}Chess${chessType.join('')}.svg`;
};