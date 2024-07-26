import {Piece} from "../Piece";
import {Board} from "../Board";
import {PieceType, Color} from "../../enums";

export class Pawn extends Piece {
    constructor(color: Color) {
        super(color, PieceType.PAWN);
    }

    canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const direction = this.color === Color.WHITE ? -1 : 1;
        const startRow = this.color === Color.WHITE ? 6 : 1;

        // Переход на одну клетку вперед
        if (fromX === toX && fromY + direction === toY && !board.squares[toY][toX]) {
            return true;
        }

        // Переход на две клетки вперед
        if (fromX === toX && fromY + 2 * direction === toY && fromY === startRow && !board.squares[toY][toX] && !board.squares[fromY + direction][toX]) {
            return true;
        }

        // Захват короля
        if (Math.abs(fromX - toX) === 1 && fromY + direction === toY && board.squares[toY][toX]?.color !== this.color && board.squares[toY][toX]?.type === PieceType.KING) {
            return false;
        }

        // Захват фигуры
        if (Math.abs(fromX - toX) === 1 && fromY + direction === toY && board.squares[toY][toX]?.color !== this.color && board.squares[toY][toX]) {
            return true;
        }

        return false;
    }
}