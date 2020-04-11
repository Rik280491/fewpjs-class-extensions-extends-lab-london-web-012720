// Your code here

class Polygon {
	constructor(array) {
		this.array = array;
	}

	get countSides() {
		return this.array.length;
	}

	get perimeter() {
		return this.array.reduce((a, b) => a + b, 0);
	}
}

class Triangle extends Polygon {
	get isValid() {
		if (this.array.length > 3) return "error, a triangle only has three sides!";
		let side1 = this.array[0];
		let side2 = this.array[1];
		let side3 = this.array[2];
		return (
			(side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)
		);
	}
}

class Square extends Polygon {
	get isValid() {
		if (this.array.length > 4) return "error, a square only has four sides!";
		let side1 = this.array[0];
		let side2 = this.array[1];
		let side3 = this.array[2];
		let side4 = this.array[3];
		return (
            (side1 === side2) && (side1 === side3) && (side1 === side4)
        );
    }

    get area() {
        if (this.array.length > 4) return "error, a square only has four sides!";
        return (
            this.array[0] ** 2
        )
    }


}
