const input = document.querySelector("#inpt");


function revString(str){
return str.split("").reverse().join("");
}


function check(){
    const val = input.value;
    const reverse = revString(val);

if(val === reverse){
    alert("P A L I N D R O M I C");
}else{
    alert("Not A Palindromic");
}

input.value="";

}

