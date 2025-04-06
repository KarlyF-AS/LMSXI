# 🚀 Guía JavaScript para Principiantes — Nivel 1

¡Bienvenida a tu primera aventura en el mundo de JavaScript! Esta guía te enseña paso a paso lo más básico de JS con explicaciones simples, ejemplos claros y buen humor.

---

## 🧠 ¿Qué es JavaScript?

JavaScript es un lenguaje de programación que se usa en páginas web para hacerlas **interactivas y dinámicas**. Permite:

- Mostrar mensajes.
- Cambiar textos.
- Responder a botones.
- Validar formularios.
- ¡Y mucho más!

---

## 🗯️ 1. `alert()`

### ¿Qué hace?

Muestra una **ventanita de alerta** con un mensaje y un botón de "Aceptar".

```javascript
alert("¡Hola mundo!");
```

---

## 📝 2. `prompt()`

### ¿Qué hace?

Muestra una **pregunta** con una caja de texto. Lo que el usuario escribe se guarda en una variable.

```javascript
let nombre = prompt("¿Cómo te llamas?");
alert("Hola " + nombre);
```

- `prompt(...)`: hace la pregunta.
- `let nombre = ...`: guarda la respuesta.
- `alert(...)`: muestra el resultado.

---

## ❓ 3. `confirm()`

### ¿Qué hace?

La función `confirm()` muestra una **ventana emergente con una pregunta** y dos botones:

- ✅ "Aceptar" (devuelve `true`)
- ❌ "Cancelar" (devuelve `false`)

### 🧪 Ejemplo básico:

```javascript
let quierePizza = confirm("¿Quieres pizza?");
```

### 🧠 Uso común con condicionales:

```javascript
let quierePizza = confirm("¿Quieres pizza?");
if (quierePizza) {
  alert("¡Pizza en camino! 🍕");
} else {
  alert("Más pizza para mí 😋");
}
```

---

## 📦 4. Variables

### ¿Qué son?

Las variables **guardan información**. Se declaran con `let` o `const`.

```javascript
let edad = 25;
const nombre = "Luna";
```

- `let`: se puede cambiar después.
- `const`: no se puede cambiar.

---

## 🔤 5. Tipos de datos

```javascript
let texto = "Hola";       // string (texto)
let numero = 42;          // number
let booleano = true;      // boolean (true o false)
let nada = null;          // intencionalmente vacío
let indefinido;           // aún sin valor
```

---

## 🧠 6. Condicionales (`if`, `else`)

Sirven para **tomar decisiones**.

```javascript
if (edad >= 18) {
  console.log("Mayor de edad");
} else {
  console.log("Menor de edad");
}
```

---

## ➕ 7. Operadores

```javascript
// Aritméticos
+ - * / %

// Comparación
==   // igual en valor
===  // igual en valor y tipo
!=   // diferente en valor
!==  // diferente en valor o tipo
> < >= <=

// Lógicos
&& // y
|| // o
!  // no
```

---

## 🔁 8. Funciones

### ¿Qué es?

Un bloque de código que **se puede reutilizar**.

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}

saludar("Luna"); // Hola Luna
```

---

## 📚 9. Arrays (listas)

Guarda varios datos en una sola variable.

```javascript
let frutas = ["manzana", "banana", "uva"];
console.log(frutas[1]); // banana
```

---

## 🧱 10. Objetos

Guarda pares clave:valor.

```javascript
let persona = {
  nombre: "Luna",
  edad: 23,
  esEstudiante: true
};

console.log(persona.nombre); // Luna
```

---

## 🔂 11. Bucles

### Bucle `for`

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Número: " + i);
}
```

- `i = 0`: punto de inicio.
- `i < 5`: condición para repetir.
- `i++`: aumenta 1 cada vez.

### Bucle `while`

```javascript
let contador = 0;

while (contador < 5) {
  console.log("El contador vale: " + contador);
  contador++; // ¡No olvides esto o se repite para siempre!
}
```
- `i = 0`: punto de inicio.
- `i < 5`: condición para repetir.
- `i++`: aumenta 1 cada vez.

---