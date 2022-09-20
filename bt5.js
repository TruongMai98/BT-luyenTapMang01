//Viết chương trình đếm số nguyên âm trong một chuỗi
let n = +prompt("Nhập số lượng n phần tử mảng ");
let intergerArr = [];
let count = 0;

for (let i = 1; i <= n; i++) {
    intergerArr.push(parseInt(prompt("nhập số nguyên thứ " + i)));
}

function negativeInteger(value) {
    return (Number.isInteger(value) && value < 0);
}

// console.log(negativeInteger(2));

for (let i = 0; i < n; i++) {
    if (negativeInteger(intergerArr[i])) {
        count += 1;
        document.write("so " + intergerArr[i] + " la so nguyen am" + "<br>");
    } else {
        document.write("so " + intergerArr[i] + " khong phai la so nguyen am" + "<br>");

    }
}
document.write("co " + count + "so nguyen am");