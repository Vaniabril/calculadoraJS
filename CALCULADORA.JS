let numero1 = parseInt(prompt("ingrese primer digito"))
let numero2 = parseInt(prompt("ingrese segundo digito"))

let operacion = prompt("ingrese la operacion a realizar +;-;*;/")
let resultado 

switch (operacion) {
    case "+": 
        resultado = (numero1 + numero2)
        alert ("resultado = " + resultado)
        break
    case "-": 
        resultado = (numero1 - numero2)
        alert ("resultado = " + resultado)
       break
    case "*": 
       resultado = (numero1 * numero2)
       alert ("resultado = " + resultado)
       break
    case "/": 
       if(numero2 !=0){
       resultado = (numero1 / numero2)
        alert ("resultado = " + resultado)
       }else{
        alert ("sintax eRRor")
       }
       default: alert("invalido")
    }
        
       
     
    
    






    




