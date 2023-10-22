//ejercicios de la clase anterior


document.write("ejercicio 1<br><br>");
let numero1 = 15;
let numero2 = 12;
let suma = numero1+numero2;
let resta = numero1-numero2;
let producto = numero1*numero2;
let division = numero1/numero2;
let resto = numero1%numero2;


document.write("suma, resta, producto, division, resto<br>");
document.write(suma);
document.write("<br>"+resta);
document.write("<br>"+producto);
document.write("<br>"+division);
document.write("<br>"+resto);



document.write("<br><br>ejercicio 2<br><br>");

let nombre="sergio";
let apellido = "ruiz";
let nombreCompleto= nombre+" "+apellido;
document.write(nombreCompleto);

document.write("<br><br>ejercicio 3<br><br>");

gradosCelsius =234;


document.write(gradosCelsius+"<br><br>");

gradosFahrenheit = (gradosCelsius * (9/5)) +32;

document.write(gradosFahrenheit);





//ejercicio 1
/*
document.write("**ejercicio 1");

alert("un mensaje");

//ejercicio 2

document.write("<br><br>**ejercicio 2<br>");

document.write("Hello world");

//ejercicio 3

document.write("<br><br>**ejercicio 3<br>");

document.write("<br>3+5="+(3+5));

//ejercicio 4

document.write("<br><br>**ejercicio 4<br>");

let nombre = prompt("ejercicio 4/ingrese su nombre");
document.write("<br>hola "+nombre);

//ejercicio 5


document.write("<br><br>**ejercicio 5<br>");

let num1 =  parseInt(prompt("ejercicio 5/ingrese numero"));
let num2 =  parseInt(prompt("ejercicio 5/ingrese otro numero"));
document.write("<br>resultado: "+(num1+num2));

//ejercicio 6

document.write("<br><br>**ejercicio 6<br>");

let num3 =  parseInt(prompt("ejercicio 6/ingrese numero"));
let num4 =  parseInt(prompt("ejercicio 6/ingrese otro numero"));

if(num3>num4){
    document.write("<br>el mayor es: "+(num3));
}else{
    document.write("<br>el mayor es: "+(num4));
}

//ejercicio 7

document.write("<br><br>**ejercicio 7<br>");

let num5 =  parseInt(prompt("ejercicio 7/ingrese numero"));
let num6 =  parseInt(prompt("ejercicio 7/ingrese otro numero"));
let num7 =  parseInt(prompt("ejercicio 7/ingrese otro numero"));

if(num5>=num6 && num5>=num7){
    document.write("<br>el mayor es: "+(num5));
}

if(num6>=num5 && num6>=num7){
    document.write("<br>el mayor es: "+(num6));
}

if(num7>=num5 && num7>=num6){
    document.write("<br>el mayor es: "+(num7));
}

//ejercicio 8

document.write("<br><br>**ejercicio 8<br>");

let num8 = parseInt(prompt("ingresa un numero:"));

if(num8%2===0){
    document.write("<br>"+num8+" es divisible por 2");
}else{
    document.write("<br>"+num8+" no es divisible por 2");
}

//ejercicio 9

document.write("<br><br>**ejercicio 9<br>");

let cadena = prompt("ejercicio 9/Escribir texto");

let cantCaracteres = parseInt(cadena.length);
let cont = 0;

document.write("<br>Vocales del texto ingresado: <br>");
while(cont<cantCaracteres){
    if(cadena.charAt(cont)=="a" ||
    cadena.charAt(cont)=="e" ||
    cadena.charAt(cont)=="i" || 
    cadena.charAt(cont)=="o" || 
    cadena.charAt(cont)=="u"){
        document.write(cadena.charAt(cont));
    }
    cont++
}

//ejercicio 10

document.write("<br><br>**ejercicio 10<br>");

let number = parseInt(prompt("ejercicio 10/Ingrese un numero"));
let array = [2,3,5,7];
let indice =0;
while (indice<array.length){
    if(number%parseInt(array[indice])===0){
        document.write("<br>"+number + " es divisible en "+array[indice]);
        break;
    }
    indice++;
}

//ejercicio 11

document.write("<br><br>**ejercicio 11<br>");

let number = parseInt(prompt("ejercicio 11/Ingrese un numero"));
let array = [2,3,5,7];
let indice =0;
while (indice<array.length){
    if(number%parseInt(array[indice])===0){
        document.write("<br>"+number + " es divisible en "+array[indice]);
    }
    indice++;
}*/