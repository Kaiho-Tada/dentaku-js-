var result = "";
var calc = false;
window.onload = function() {
    result = document.getElementById("result");
};
function C_edit() {
    result.value = "0";
    calc = false;
}
function num_edit(elem) {
    if(calc) result.value = "0";
    calc = false;
    
    if(result.value == "0" && elem.value == "0"){
        result.value = "0";
    }else if(result.value == "0" && elem.value == "00"){
        result.value = "0";
    }else if(result.value == "0" && elem.value == "."){
        result.value = "0.";
    }else if(result.value == "0"){
        result.value = elem.value;
    }else{
        result.value += elem.value;
    }
}

function ope_edit(elem) {
    if(calc) calc = false;
    if(ope_last()){
        result.value = result.value.slice(0,-1) + elem.value;
    }else {
        result.value += elem.value;
    };
}
function equal_calc(){
  if(ope_last())  result.value = result.value.slice(0, -1);
    result.value  = new Function("return " + result.value.replaceAll("×", "*").replaceAll("÷", "/"))();
    calc = true;
}

function ope_last(){
  return ["+","-","×","÷"].includes(result.value.toString().slice(-1));
}
