let input=prompt("Enter a value to check truthy or falsy");
function checker(input){
    if(input==0)
    {
        return "Falsy";
    }
    else if(input=="false"){
        return "Falsy";
    }
    else if(input==-0)
    {
        return "Falsy";
    }
    else if(input=="0n")
    {
        return "Falsy";
    }
    else if(input=='""')
    {
        return "Falsy";
    }
    else if(input=="null")
    {
        return "Falsy";
    }
    else if(input=="undefined")
    {
        return "Falsy"
    }
    else if(input=="NaN")
    {
        return "Falsy";
    }
    else{
        return "Truthy";
    }
}
document.getElementById("output").innerHTML=checker(input);