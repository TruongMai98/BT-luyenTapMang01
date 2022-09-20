//Viết chương trình khởi tạo/nhập vào một mảng số nguyên và đảo ngược các phần tử trong mảng đó.
let n = +prompt("Nhập số lượng n phần tử mảng ");
let intergerArr = [];


for (let i = 1; i <= n; i++) {
    intergerArr.push(parseInt(prompt("nhập số nguyên thứ " + i)))
}
intergerArr.reverse()
 document.write(intergerArr);