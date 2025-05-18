const binInput = document.getElementById("bin-input");
const decInput = document.getElementById("dec-input");
const submitButton = document.getElementById("convert");

submitButton.addEventListener("click",submitConvert);

function submitConvert(event){
    event.preventDefault();
    const bin = binInput.value.trim();
    const dec = decInput.value.trim();

    if(dec === "" && bin !== ""){
        // binary to decimal
        const result = bin2dec(bin);
        if (result !== undefined) {
            decInput.value = result;
        }
    }else if(bin === "" && dec !== ""){
        const result = dec2bin(dec);
        if (result !== undefined) {
            binInput.value = result;
        }
    }else{
        // binary to decimal
        const result = bin2dec(bin);
        if (result !== undefined) {
            decInput.value = result;
        }
    }
}

function bin2dec(a){
    if (!/^[01]+$/.test(a)) {
        alert("Please enter a valid binary number");
            return ;
        }
    return  parseInt(a,2);
}

function dec2bin(b){
    const number = Number(b); // ← 转换为数字！

    if (isNaN(number) || number < 0 || !Number.isInteger(number)) {
        alert("Please enter a valid non-negative decimal number!");
        return;
    }

    return number.toString(2);
}


