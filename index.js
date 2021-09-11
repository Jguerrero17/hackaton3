//Ejercicio #0
//Filtrar miembros únicos del arreglo
//Sea arr una matriz.
//Cree una función única (arr) que debería devolver una matriz con elementos únicos de arr.
//Por ejemplo:
//function unique(arr) { /* your code */}
//let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
//alert( unique(values) ); // Hare, Krishna, :-O
//PD Aquí se utilizan cadenas, pero pueden ser valores de cualquier tipo.
//P.P.S. Utilice Establecer para almacenar valores únicos.

Me piden que use Set:

function unique(arr) {
    return Array.from(new Set(arr));
  }
  


//Ejercicio # 1
//Filtrar anagramas
//Los anagramas son palabras que tienen el mismo número de letras iguales, pero en diferente orden.
//Por ejemplo:
//nap - panear - are - eracheaters - hectares - teachers
//Escriba una función aclean (arr) que devuelva una matriz limpia de anagramas.
//Por ejemplo:
//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"
//De cada grupo de anagramas debe quedar sólo una palabra, sin importar cuál.


const aclean = (arr) => {
    let map = new Map();
  
    for (let word of arr){

      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
console.log(aclean(arr));



//Ejercicio #2
//Claves iterables
//Nos gustaría obtener un arreglo de map.keys () en una variable y luego aplicarle métodos específicos
//de la matriz, p. Ej. .push(). Pero eso no funciona:
//let map = new Map();map.set("name", "John")let keys = map.keys();// Error: keys.push is not a
//functionkeys.push("more");
//¿Por qué? ¿Cómo podemos arreglar el código para que funcione keys.push?

Porque map.keys() no devuelve una matriz sino un itinerable, por eso que los métodos de una matriz no funcionan ya que 
no es una matriz

Si usamos Array.from sí lo transformamos en matriz
En vez de usar 
let keys = map.keys(); 
usamos 
let keys = Array.from(map.keys());





//Ejercicio #3
//Valor del último bucle
//Cuál es el último valor alertado por este código? ¿Por qué?
//let i = 3;
//while (i) { alert( i-- );}

let i = 3;

while (i) {
  alert(i--);
}

El último valor es 1 porque el while(i) detiene el bucle cuando i=0 y cuando i=0 ya 
no continúa al proceso del alert




//Ejercicio #4
//¿Qué valores muestra el ciclo while?
//Para cada iteración del ciclo, escriba qué valor genera y luego compárelo con la solución. Ambos
//bucles alert sobre los mismos valores, ¿o no?

//La forma de prefijo ++ i:
//let i = 0;while (++i < 5) alert( i );

1 a 4 


//La forma sufijo i ++
//let i = 0;while (i++ < 5) alert( i );

1 a 5


Los valores son distintos porque en el primer caso ++i primero incrementa el valor y luego lo devuelve, en caso
de llegar a i=4, primero lo incrementa a 5, ya no se cumpliría con la condición y no llegaría al alert pero en el 
segundo caso donde es i++ primero devuelve el valor de i=4 y sí se cumpliría con la condición del while, luego 
recién aumenta pero como ya cumplió con la condición pasaría al alert y aquí ya el i está incrementado arrojando
el valor de 5.

//Ejercicio #5
//Reescribir con funciones de flecha
//Reemplace las expresiones de función con funciones de flecha en el siguiente código:
//function ask(question, yes, no) {
// if (confirm(question)) yes();
//  else no();
//} 

//ask(
 //"Do you agree?",
 //function() {
//alert("You agreed."); },
 //function() {
//alert("You canceled the execution."); }
//);


ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
);


//Ejercicio #6
//Establecer y disminuir para contador
//Modifique el código de makeCounter () para que el contador también pueda disminuir y establecer
//el número:
//• counter () debe devolver el siguiente número (como antes).
//• counter.set (value) debe establecer el contador en valor.
//• counter.decrease () debería disminuir el contador en 1.
//Consulte el código de la zona de pruebas para ver el ejemplo de uso completo.
//PD Puede utilizar una propiedad de cierre o de función para mantener el recuento actual. O escribe
//ambas variantes.

//function makeCounter() { 
    // instead of: 
    // let count = 0 
    //function counter() { 
        //return counter.count++;
    //}; 
    
    //counter.count = 0; 
    //return counter; } 
    //let counter = makeCounter();

    function makeCounter() {
        let count = 0;
      
        function counter() {
          return count++;
        }
      
        counter.set = value => count = value;
      
        counter.decrease = () => count--;
      
        return counter;
      }



//Ejercicio #7
//Repita hasta que la entrada sea correcta
//Escriba un bucle que solicite un número mayor que 100.
//Si el visitante ingresa otro número, pídale que ingrese nuevamente.
//El bucle debe solicitar un número hasta que el visitante ingrese un número mayor que 100 o cancele
//la entrada / ingrese una línea vacía.
//Aquí podemos asumir que el visitante solo ingresa números.
//No es necesario implementar un manejo especial para una entrada no numérica en esta tarea.

let val;

do {
  val = prompt("Escriba un número mayor a 100");
} while (val <= 100 && val);


//Ejercicio #8
//Salida de una lista de un solo enlace
//Supongamos que tenemos una lista con un solo enlace (como se describe en el capítulo Recurrencia
//y pila):
//let list = {
    //value: 1,
    //next: {
        //value: 2,
        //next: {
            //value: 3,
            //next: {
                //value: 4,
                //next: null
            //}
        //}
    //}
//};
//Escriba una función printList (lista) que genere los elementos de la lista uno por uno.
//Haz dos variantes de la solución: usando un bucle y usando la recursividad.
//¿Qué es mejor: con recursividad o sin ella?

Con Bucle:
function printList(list) {
    let i = list;
  
    while (i) {
      alert(i.value);
      i = i.next;
    }
  
  }

  printList(list);

  Con recursividad:

  function printList(list) {

    alert(list.value); 
  
    if (list.next) {
      printList(list.next);
    }
  
  }
  
  printList(list);


Creo que va a depender del uso de la persona para considerar cúal es mejor, si nos vamos por un tema 
de código, la recursividad es más rápido de codear pero llama a una función nuevamente a diferencia
del bucle que no consume nuevamente una función.


