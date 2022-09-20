// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử.
// Chương trình sắp xếp mảng theo thứ tự giảm dần và hiển thị ra mảng đã được sắp xếp.
let integerArr = [];
for (let i = 1; i <= 10; i++) {
    integerArr.push(parseInt(prompt("nhập số nguyên thứ " + i + " /10")));
}


function descending(a, b) {
    return b - a;
}
document.write(integerArr.sort(descending));
