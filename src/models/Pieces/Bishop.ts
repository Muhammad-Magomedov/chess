import {Piece} from "../Piece";
import {Board} from "../Board";
import {PieceType, Color} from "../../enums";

export class Bishop extends Piece {
    constructor(color: Color) {
        super(color, PieceType.BISHOP);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        if (fromX !== toX && fromY !== toY) {
            return false;
        }

        const stepX = fromX === toX ? 0 : (toX > fromX ? 1 : -1);
        const stepY = fromY === toY ? 0 : (toY > fromY ? 1 : -1);

        let currentX = fromX + stepX;
        let currentY = fromY + stepY;

        while (currentX !== toX || currentY !== toY) {
            if (board.squares[currentY][currentX] !== null) {
                return false;
            }
            currentX += stepX;
            currentY += stepY;
        }

        const destinationPiece = board.squares[toY][toX];
        return !(destinationPiece && destinationPiece.color === this.color);
    }
}