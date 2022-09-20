// Viết chương trình khởi tạo/nhập vào 2 mảng số nguyên gồm 10 phần tử, gọi là mảng a và b.
// Mảng c là một mảng được khai báo gồm 20 phần tử số nguyên.
// Chương trình sẽ lưu các phần tử được nối từ hai mảng b và a vào mảng c.
// Hiển thị mảng c.
let integerA = [];
for (let i = 1; i <= 10; i++) {
    integerA.push(parseInt(prompt("Mảng a: Nhập số nguyên thứ " + i + " /10")));
}
let integerB = [];
for (let i = 1; i <= 10; i++) {
    integerB.push(parseInt(prompt("Mảng b: Nhập số nguyên thứ " + i + " /10")));
}
let integerC = integerB.concat(integerA);
document.write(integerC);
