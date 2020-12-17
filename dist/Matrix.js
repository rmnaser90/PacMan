
class Matrix {
    constructor(rows, columns) {
        this.matrix = this._generateMatrix(rows, columns)

    }

    _generateMatrix(rowsNo, columnsNo) {
        const matrix = []

        for (let i = 0; i < rowsNo; i++) {
            const row = []
            for (let j = 0; j < columnsNo; j++) {
                row.push("c")
            }
            matrix.push(row)

        }
        return matrix
    }

    get(row, column) {
        if (this.matrix[row] == undefined) {
            return undefined
        }
        return this.matrix[row][column]
    }

    alter(row, column, newValue) {
        this.matrix[row][column] = newValue
    }
    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            this.printRow(i)
        }

    }

    findCoordinate(value) {

        for (let i = 0; i < this.matrix.length; i++) {
            const row = []
            for (let j = 0; j < this.matrix[0].length; j++) {
                if (this.matrix[i][j] === value) {
                    return `x: ${j}, y: ${i}`
                }
            }
        }

    }

    getMatrix() {
        return this.matrix
    }



}

