import {Board} from "./Board"
import {Color, PieceType} from "../enums";

export abstract class Piece {
    protected constructor(public readonly color: Color, public readonly type: PieceType) {
    }

    abstract canMove(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean;

    isPathClearDiagonal?(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const stepX = toX > fromX ? 1 : -1;
        const stepY = toY > fromY ? 1 : -1;
        let currentX = fromX + stepX;
        let currentY = fromY + stepY;

        while (currentX !== toX && currentY !== toY) {
            if (board.squares[currentY][currentX] !== null) {
                return false;
            }
            currentX += stepX;
            currentY += stepY;
        }

        return true;
    };

    isPathClearStraight?(fromX: number, fromY: number, toX: number, toY: number, board: Board): boolean {
        const stepX = fromX === toX ? 0 : toX > fromX ? 1 : -1;
        const stepY = fromY === toY ? 0 : toY > fromY ? 1 : -1;
        let currentX = fromX + stepX;
        let currentY = fromY + stepY;

        while (currentX !== toX || currentY !== toY) {
            if (board.squares[currentY][currentX] !== null) {
                return false;
            }
            currentX += stepX;
            currentY += stepY;
        }

        return true;
    };
}