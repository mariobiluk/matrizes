let mat = []

for (let i=0;i<5;i++){
    mat[i]=[]
    for(let j = 0;j<5;j++){
        if(j%2===1){
            mat[i][j]=3
        }else{
            mat[i][j]=5
        }
    }
}

function somaMatriz(){
    let somaMatrizes = 0
    for (i=0;i<5;i++){
        for(j=0;j<5;j++){
            somaMatrizes+=mat[i][j]

        }
    }
    return somaMatrizes
}

let somaMatrizes = somaMatriz()

console.table(mat)
console.log('----------------------')
console.log('Soma da matriz:', somaMatrizes)
console.log('----------------------')