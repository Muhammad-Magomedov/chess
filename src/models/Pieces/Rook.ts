import {Piece} from "../Piece";
import {Board} from "../Board";
import {Color, PieceType} from "../../enums";

export class Rook extends Piece {
    constructor(color: Color) {
        super(color, PieceType.ROOK);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const dx = Math.abs(toX - fromX);
        const dy = Math.abs(toY - fromY);
        const destinationPiece = board.squares[toY][toX];

        if (dx === dy) {
            if (this.isPathClearDiagonal && this.isPathClearDiagonal(fromX, fromY, toX, toY, board)) {
                return !destinationPiece || destinationPiece.color !== this.color;
            }
        }

        return false;
    }
}
