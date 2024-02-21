/*IMPORTANT NOTES
1- you are using JS Name Casing (CamelCasing)
2- make this code as clean as possible 
3- apply all the concepts you learned during this lab (Naming, comments,  functions)
*/


class Point {
    constructor(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
    }
}

function isVaildLength(length) {
    if (!length || length <= 0) {
        throw Error("invalid Width and Height");
    }
    return true;
};


class Rectangle {

    constructor(startingPoint, width, height) {
        checkHeightAndWidth(width, height);
        setParameters(startingPoint, width, height);
    }

    checkHeightAndWidth(height, width) {
        return isVaildLength(height) && isVaildLength(width);
    }

    setParameters(startingPoint, width, height) {
        this.startingPoint = startingPoint;
        this.Width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * this.width + 2 * this.height;
    }


    updateHeight(height) {
        //TODO: handle case of updating the height of square
        isVaildLength(height);
        this.height = height;
    }

    updateRectangleInfomations({ startingPoint, width, height }) {
        checkHeightAndWidth(width, height);
        setParameters(startingPoint, width, height);
    }

    getHeight() {
        return this.height;
    }

    printEndPoints() {
        const topRight = this.startingPoint.coordX + this.broad;
        const bottomLeft = this.startingPoint.coordY + this.height;

        console.log("End Point X-Axis (Top Right): " + topRight);
        console.log("End Point Y-Axis (Bottom Left): " + bottomLeft);
    }

    getWidth() {
        return this.width;
    }
}

function buildRectangleObject({ width, weight, coordX, coordY }) {
    const startingPoint = new Point(coordX, coordY);
    const rectangle = new Rectangle(startingPoint, width, weight);

    return rectangle;
}


function constructSquare(squareHeight, coordX, coordY) {
    let squareWidth = squareHeight;
    let square = buildRectangleObject(squareWidth, squareHeight, coordX, coordY);
}

function printSquareCalcuations(square) {
    const squareArea = square.calculateArea();
    const squarePerimeter = square.calculatePerimeter();

    console.log("square Area ", squareArea);
    console.log("square Perimeter ", squarePerimeter);
}

const firstRectangle = buildRectangleObject({ width: 2, height: 3, coordX: 5, coordY: 4 });
const sqaure = constructSquare();


printSquareCalcuations(sqaure);
sqaure.printEndPoints();

firstRectangle.updateMyHeight(3);