let mat = []

for (let i = 0; i < 5; i++) {
    mat[i] = []
    for (let j = 0; j < 5; j++) {
        if (i % 2 === 0) {
            mat[i][j] = 7
        } else {
            mat[i][j] = 3
        }
    }
}

function somaMatriz() {
    let somaMatrizes = 0
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            somaMatrizes += mat[i][j]
        }
    }
    return somaMatrizes
}

let somaMatrizes = somaMatriz()

console.table(mat)
console.log('----------------------')
console.log('Soma da matriz:', somaMatrizes)
console.log('----------------------')
