import {Piece} from "../Piece";
import {Board} from "../Board";
import {PieceType, Color} from "../../enums";

export class Knight extends Piece {
    constructor(color: Color) {
        super(color, PieceType.KNIGHT);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const dx = Math.abs(toX - fromX);
        const dy = Math.abs(toY - fromY);

        // Check if the move is valid for a knight
        if ((dx === 2 && dy === 1) || (dx === 1 && dy === 2)) {
            // Check if the destination cell contains a piece of the same color
            const destinationPiece = board.squares[toY][toX];
            if (destinationPiece && destinationPiece.color === this.color) {
                return false;
            }
            return true;
        }

        return false;
    }
}