
let numArr=[];
let count=0
for (let i=0; i<10;i++){
    let n=+prompt('')
    numArr.push(n);
}
for (let i=0; i<10;i++){
    if (numArr[i]>=10){
        count+=1;
    }
}
document.write("co "+ count+ " so lon hon hoac bang 10");