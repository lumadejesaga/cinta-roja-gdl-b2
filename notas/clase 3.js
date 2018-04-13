/*Datos primitivos
Tipos de datos que representan un unico valor
Boolean, string, number, symbol (ES6)
Precedencia y asociatividad
Operator precedencia: que funciòn se llama primero
Asociatividad: el orden que se ejecutan las funciones
= se ejecuta de derecha a izquierda
Coercion, capacidad de convertir valor a otro tipo
let a = "1"+2 daria 12
Ejemplos
Number("12")
12
Number(false)
0
Number(true)
1
0==false
true
Number(undefined)
NaN
Otro ejemplo de presedencia
console.log(3<2<1) imprime true pues se ejecuta de izq a derecha
3<2=false false<1=true
ver presedencia en:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
Para evitar esto usar Strict Equality(comparaciòn estricta)===
!==0 diferente seguro
estos operadores hacen que js evite la coerción
-----------------------------------------------------------------
Orientado a objetos
Paradigma=forma en la que un lenguaje resuelve los problemas
JS no fue diseñado para usar objetos, sino prototipos
Un objeto es una colecciòn de prpiedades y mètodo
Constructor=cual es el estado inicial del objeto(pero siempre se inicializa con 4patas, 2 hojos 1 cola etc. pero sin definirle el color o la raza)
clases la manera en la que defines instancias de objetos
Estructura de un objeto literal
var nombreObjeto = {
    identificador:valor,
    identificador1:valor1
}
En JS casi todo es un objeto
Con ES6 ya se puede utilizar la palabra class
constructor es un método*/
class Persona{
    //constructor donde definimos las propiedades
    constructor(name,edad,telefono,email){
        this.nombre = name
        this.edad = edad
        this.telefono = telefono
        this.email = email
}
//funcion que no necesita la palabra funcion en los objetos
//funcion que define el saluo de los objetos
presentarse(){
    return "Hola me llamo" +" "+ this.nombre +" "+ "y tengo" +" "+ this.edad +" "+ "años"
}
correr(){
    return "estoy corriendo"

}
}
class Desarrollador extends Persona{
    constructor(name,edad,telefono,email,lenguaje){
        super(name,edad,telefono,email)
        this.lenguaje = lenguaje
    }
    programar(){
        return "El desarrollador" + " " + this.nombre + " " + "está programando en" + " " + this.lenguaje
    }

}
//sintaxis para crear objetos
var Luis = new Persona("Luis",34,3317392625,"luismanuel_music@hotmail.com")
console.log(Luis.presentarse())
//se puede copar y pegar para utilizarlos y crear mas objetos
//Ejercicio crear objeto tipo triangulo con atributos base y altura
//tener metodo area y perimetro
let Manuel = new Desarrollador("Manuel",24,15082706,"luismanuel.lmdjsg@gmailcom", "Javascript")
console.log(Manuel.presentarse())
console.log(Manuel.programar())
class Calculos{
constructor(base,altura){
    this.base = base
    this.altura = altura
}
perimetro(){
    return this.base*3
}
area(){
    return (this.base*this.altura)/2
}
}
var triangulo = new Calculos(4,2);
console.log(triangulo.perimetro())
console.log(triangulo.area())
/*
PROPIEDADES GENERALES DE ANIMALES
Ojos
numPatas
tamaño
peso
tipo
COMPORTAMIENTO
comer
reproducción
dormir
respirar
VOLADORES
P
alturaVol
TamAlas
C
volar()
ACUATICOS*/
//hacer objeto animal, al que extiendan voladores, acuaticos y terrestres con comportamientos y propiedades especificas