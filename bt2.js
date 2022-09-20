let n = +prompt('nhap n phan tu cua mang');

let numArr = [];
let max = 0;
let num = 0;

function isNotExist(number, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (number === arr[i]){
            return false;
        }
    }
    return true;
}

do {
    num = +prompt('Nhap 1 so nguyen bat ky khong trung voi so da nhap');

    if (numArr.length === 0 || isNotExist(num, numArr)) {
        numArr.push(num);
    } else if (numArr.length > 0 && !isNotExist(num, numArr)) {
        alert('nhap trung! hay nhay nhap lai!');
    }
} while (numArr.length < n);

console.log(numArr);
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n + 1; j++) {
        if (numArr[i] > numArr[j]) {
            max = numArr[i];
        } else if (numArr[i] < numArr[j]) {
            max = numArr[j];
        }
    }
}
document.write("so lon nhat la: " + max);