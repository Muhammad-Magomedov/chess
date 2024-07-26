import {Piece} from "../Piece";
import {Board} from "../Board";
import {PieceType, Color} from "../../enums";

export class King extends Piece {
    constructor(color: Color) {
        super(color, PieceType.KING);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const dx = Math.abs(toX - fromX);
        const dy = Math.abs(toY - fromY);
        return dx <= 1 && dy <= 1;
    }
}