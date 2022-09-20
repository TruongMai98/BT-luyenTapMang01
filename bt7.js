// Viết chương trình khởi tạo/nhập vào một mảng số nguyên gồm 10 phần tử, nhập/tạo phần tử số nguyên V.
// Chương trình kiểm tra xem V có thuộc mảng đã cho không,  nếu V thuộc mảng đã cho xoá V khỏi mảng
// Bản chất việc xoá ở đây tức là dịch phần tử ở bên phải V sang vị trí của V, và gán 0 cho phần tử cuối cùng của mảng)

let integerArr = [];
for (let i = 1; i <= 10; i++) {
    integerArr.push(parseInt(prompt("nhập số nguyên thứ " + i + " /10")));
}
let v = parseInt(prompt("nhap so nguyen V"));

if (integerArr.includes(v)){
    integerArr.splice(integerArr.indexOf(v),1);
    integerArr.push("0");
}
document.write(integerArr);
