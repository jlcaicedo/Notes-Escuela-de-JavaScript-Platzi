
# Introduccion 
JavaScript es un lenguaje de programación o de secuencias de comandos que te permite implementar funciones complejas en páginas web, cada vez que una página web hace algo más que sentarse allí y mostrar información estática para que la veas, muestra oportunas actualizaciones de contenido, mapas interactivos, animación de Gráficos 2D/3D, desplazamiento de máquinas reproductoras de vídeo, etc., puedes apostar que probablemente JavaScript está involucrado. Es la tercera capa del pastel de las tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de aprendizaje.



## ¿Cómo nace Javascript? 
Nace con la necesidad de generar dinamismo en las páginas web y que a su vez los usuarios y las empresas pudieran interactuar unos con otros.  

## ¿Qué es Javascript?
Es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.  

## Débilmente tipado
Se pueden hacer operaciones entre tipos distintos de datos (enteros con strings, booleanos con enteros, etc). Ejemplo:
```
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false - 3; // -3
```
## Dinámico
Corre directamente en la etapa de Runetime sin una etapa de compilación previa. Esto permite probar nuestro código inmediatamente; pero también es lo que hace que los errores se muestren hasta que se ejecuta el programa.  

## ¿Realmente es Javascript un lenguaje interpretado?
Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador  

## Javascript es Basckwards Compatible
Todas las funciones nuevas que salen de Javascript no dañarán el trabajo ya hecho, pero no se podrá utilizar en nuestro entorno de trabajo inmediatamente. Para solucionar esto está  **Babel**  que permite utilizar las nuevas características del lenguaje pero lo transforma a una versión que el navegador pueda entender.


# ¿Por qué JavaScript? 

1. JavaScript tiene una  **comunidad enorme**  de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

2. Si solo estuvieras interesado en trabajar  **aplicaciones web**  tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)
    
3. Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder  **construir aplicaciones nativas**  como Android y IOS.
    
4. Puedes construir  **aplicaciones de escritorio**  con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.
    
5. También puedes trabajar en la parte del  **Back-end**  o **IOT** (Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.


# Funciones
Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

## Funciones Declarativas
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:
```
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

## Funciones Expresivas
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará un función anónima.
```
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```
En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

Diferencias:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

# Scope


# Hoisting


# Coerción
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.