let input=prompt("Enter a value to check truthy or falsy");
function checker(input){
    if(input==0)
    {
        return "Falsy";
    }
    else if(input==1){
        return "Truthy";
    }
}
document.getElementById("output").innerHTML=checker(input);