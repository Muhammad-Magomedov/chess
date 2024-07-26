import {Piece} from "./Piece";
import {Color} from "../enums";
import {Bishop} from "./Pieces/Bishop";
import {Rook} from "./Pieces/Rook";
import {Knight} from "./Pieces/Knight";
import {Queen} from "./Pieces/Queen";
import {King} from "./Pieces/King";
import {Pawn} from "./Pieces/Pawn";

export class Board {
    squares: (Piece | null)[][];

    constructor() {
        this.squares = Array(8).fill(null).map(() => Array(8).fill(null))
        this.setupBoard();
    }

    setupBoard() {
        this.squares[0][0] = new Bishop(Color.BLACK);
        this.squares[0][1] = new Knight(Color.BLACK);
        this.squares[0][2] = new Rook(Color.BLACK);
        this.squares[0][3] = new Queen(Color.BLACK);
        this.squares[0][4] = new King(Color.BLACK);
        this.squares[0][5] = new Rook(Color.BLACK);
        this.squares[0][6] = new Knight(Color.BLACK);
        this.squares[0][7] = new Bishop(Color.BLACK);
        for (let i = 0; i < 8; i++) {
            this.squares[1][i] = new Pawn(Color.BLACK);
        }

        this.squares[7][0] = new Bishop(Color.WHITE);
        this.squares[7][1] = new Knight(Color.WHITE);
        this.squares[7][2] = new Rook(Color.WHITE);
        this.squares[7][3] = new Queen(Color.WHITE);
        this.squares[7][4] = new King(Color.WHITE);
        this.squares[7][5] = new Rook(Color.WHITE);
        this.squares[7][6] = new Knight(Color.WHITE);
        this.squares[7][7] = new Bishop(Color.WHITE);
        for (let i = 0; i < 8; i++) {
            this.squares[6][i] = new Pawn(Color.WHITE);
        }
    }

    movePiece(fromX: number, fromY: number, toX: number, toY: number): boolean {
        const piece = this.squares[fromY][fromX];
        if (piece && piece.canMove(fromX, fromY, toX, toY, this)) {
            this.squares[toY][toX] = piece;
            this.squares[fromY][fromX] = null;
            return true;
        }
        return false;
    }
}