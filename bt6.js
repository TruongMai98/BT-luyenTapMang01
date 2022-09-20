// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình tìm xem V có nằm trong mảng số nguyên không?
// Nếu V thuộc mảng số nguyên thì in ra "V is in the array" còn lại in ra "V is not in the array".
let n = +prompt("Nhập số lượng n phần tử mảng ");
let integerArr = [];

let count = 0;
for (let i = 1; i <= n; i++) {
    integerArr.push(parseInt(prompt("nhập số nguyên thứ " + i)));
}
let v = parseInt(prompt("nhap so nguyen V"));
for (let i = 0; i < n; i++) {
    if (v === integerArr[i]) {
        count += 1;
    }
}
if (count != 0) {
    document.write("V is in the array");
} else {
    document.write("V is not in the array");

}