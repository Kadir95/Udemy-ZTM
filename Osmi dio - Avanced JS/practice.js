// 1. na dati array dobiti [[1,1,1,1],[2,2],4,5[20,20],391,392,591]
const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const sortedArray = (arr) => {
    return arr.sort((a, b) => {
        return a - b;
        // ako je rezultat oduzimanja <0 onda A ide prvi
        // ako je rezultat oduzimanja >0 onda B ide prvi
        // ako je rezultat oduzimanja 0 onda se nista ne mijenja
    });
}
sortedArray(arr);

if (arr[0] == arr[1]) {

}
