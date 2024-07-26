import "./Square.css";
import {Piece} from "../../models/Piece";
import {useSquare} from "./useSquare";
import EmptyCell from "../Cell/EmptyCell";
import CellWithFigure from "../Cell/CellWithFigure";

type Props = {
    piece: Piece | null;
    onClick: () => void;
    x: number;
    y: number;
    isPossibleMove: boolean;
};

export const Square = ({piece, onClick, x, y, isPossibleMove}: Props) => {
    const {squareColor, possibleMoveClass} = useSquare({x, y, isPossibleMove});

    if (piece === null) {
        return <EmptyCell squareColor={squareColor} possibleMoveClass={possibleMoveClass} onClick={onClick}/>
    }

    return (
        <CellWithFigure squareColor={squareColor} possibleMoveClass={possibleMoveClass} onClick={onClick}
                        piece={piece}/>
    );
};