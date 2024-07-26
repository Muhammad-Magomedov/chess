import {Piece} from "../Piece";
import {Board} from "../Board";
import {PieceType, Color} from "../../enums";

export class Queen extends Piece {
    constructor(color: Color) {
        super(color, PieceType.QUEEN);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const dx = Math.abs(toX - fromX);
        const dy = Math.abs(toY - fromY);
        const destinationPiece = board.squares[toY][toX];

        // Проверка движения по диагонали или по прямой линии
        if (dx === dy) {
            if (this.isPathClearDiagonal && this.isPathClearDiagonal(fromX, fromY, toX, toY, board)) {
                return !destinationPiece || destinationPiece.color !== this.color;
            }
        } else if (toX === fromX || toY === fromY) {
            if (this.isPathClearStraight && this.isPathClearStraight(fromX, fromY, toX, toY, board)) {
                return !destinationPiece || destinationPiece.color !== this.color;
            }
        }

        return false;
    }
}
