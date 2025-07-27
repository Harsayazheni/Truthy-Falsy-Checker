# Truthy-Falsy-Checker
## Problem Statement
To check whether the entered value is truthy or falsy.
## First Version
### index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Truthy Falsy Checker</title>
</head>
<body>
    <h1>Truthy Falsy Checker</h1>
    <p id="output"></p>
    <script src="script.js"></script>
</body>
</html>
```
### script.js
```
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
```
### Output
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/f0c6e808-cea9-4022-a215-ce983dfb9798" />
<img width="1919" height="1079" alt="image" src="https://github.com/user-attachments/assets/43da5ae2-5f6a-456a-8021-f9aaffa483c2" />


### Possible Extensions
1.Used prompt to get the user input.I should've tried to get it in the forms.

2.Only 1 falsy value I have mentioned , I should mention and check for the other remaining falsy values as well.

3.Add basic styles and css.
