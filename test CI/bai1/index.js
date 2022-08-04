
let n = Number(prompt("nhập vào số nguyên dương từ 4 đến 20"));
let inputNumber = Number(prompt("kiểm tra số n"));

function findOppostieNumber(n, inputNumber){
    if( 4 <= n && n <= 20 && n%2 == 0){
        let outputNumber;
        if (inputNumber < n/2){
            outputNumber = n/2 +inputNumber;
            console.log(outputNumber);
        }else{
        outputNumber = inputNumber - n/2;
            console.log(outputNumber);
        }
    }else{
        alert(`nhap lai n`);
    }
}
findOppostieNumber(n, inputNumber);