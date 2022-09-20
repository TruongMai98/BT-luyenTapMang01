//Viết chương trình khởi tạo mảng số nguyên. Hiển hiện giá trị lớn nhất trong mảng đó. In ra giá trị trung bình của các phần tử trong mảng.
let intArr = [];
let n = +prompt("Nhập n số phẩn tử của mảng");
let max;
let sum = 0;
let avg;
for (let i = 1; i <= n; i++) {
    intArr.push(parseInt(prompt("Nhập số nguyên thứ " + i)));
}
console.log(intArr);
for (let i = 0; i < n; i++) {
    for (let j = 1; j < n + 1; j++) {
        if (intArr[i] > intArr[j]) {
            max = intArr[i];
        } else if (intArr[i] < intArr[j]) {
            max = intArr[j];
        }
    }
}
alert("Gia tri lon nhat la: " + max);
for (let i = 0; i < n; i++) {
    sum += intArr[i];
}
avg = sum / n;
document.write("Gia tri trung binh la: " + avg);