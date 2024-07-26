interface IUseSquare {
    x: number;
    y: number
    isPossibleMove: boolean;
}

export const useSquare = ({x, y, isPossibleMove}: IUseSquare) => {
    const isBlack = (x + y) % 2 === 1;
    const squareColor = isBlack ? "square-black" : "square-white";
    const possibleMoveClass = isPossibleMove ? "possible-move" : "";

    return {squareColor, possibleMoveClass};
};