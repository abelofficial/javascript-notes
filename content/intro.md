[&leftarrow; Home](../README.md)

# Javascript

JavaScript is a scripting language that is one of the three core languages used to develop websites. Whereas HTML and CSS give a website structure and style, JavaScript lets you add functionality and behaviors to your website, allowing your website’s visitors to interact with content in many imaginative ways.

## History timeline

1995 &rightarrow; Netscape introduces “LiveScript” / “JavaScript”.

1996 &rightarrow; Microsoft releases its own version for IE.

Late 1996 &rightarrow; JavaScript submitted to ECMA International to start standardization.

1997-2005 &rightarrow; Standardization efforts, Microsoft didn’t really join and support the standardized JS version though.

2006-2011 &rightarrow; Huge progress in JavaScript ecosystem, Microsoft eventually joined forces.

[read more about javascript history here](https://medium.com/@_benaston/lesson-1a-the-history-of-javascript-8c1ce3bffb17)

## JavaScript Fundamentals

JavaScript is a dynamic and weakly (_loosely_) typed programming language which is compiled at runtime. It can be executed as part of a webpage in a browser or directly on any machine.

- A weakly typed programming language means variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:.

Example 1

```javascript
{
  let a = 10;
  let b = "Text";
  a = b;
  console.log(a) -> Text
}
```

- Dynamic, interpreted Programming Language means that javascript is not pre-compiled, instead it is parsed and compiled “on the fly”.

### Variable & Constants

Variables and constants define areas in memory in which values (data) are stored. **Variable** hold values that can be modified when a program is executed. **Constants**, on the other hand, hold values that remain unchanged when a program is executed.

- Declaration — means creating space in memory for a variable or a constant.
- Assignment — means setting the contents of the memory space to a value.

```javascript
{
  let a = 10; // Declaring Variable
  const b = "Text"; // Declaring Constants
  a = b; // Allowed (Assigning new value to a variable)
  b = a; // Not Allowed
}
```

- Declaration best practices

|              Allowed | Not Allowed / Not Recommended  |
| -------------------: | :----------------------------: |
|       `let userName` | `let user_name` (bad practice) |
|      `let ageGroup5` |        `let 21Players`         |
| `let $kindOfSpecial` |          `let user-b`          |
| `let _internalValue` |           `let let`            |

## Data Types In Javascript

Data is stored in two ways in javascript on the heap memory or on the stack memory. A stack is a region in memory, which operates in First-In-Last-Out mode and stores that data in an ordered fashion. The stack is usually used for low-cost data, like numbers, booleans, and strings. Heap on the other hand, is a large region in memory, which can be used to store arbitrary data in an unordered fashion. this makes it much slower. In order to quickly find heap-data when doing operations, a pointer to it is stored on the stack. Because of this there are two types of data types in javascript, primitive data type (immutable) and reference types (mutable).

### Primitive Data Types

The value for a primitive data type is stored in on the stack memory and the variable may be reassigned a new value, but the existing value can not be changed. There are 6 primitive data types: string, number, bigint, boolean, undefined, and symbol. There also is null, which is seemingly primitive.

- **Boolean type** &rightarrow; represents a logical entity and can have two values: `true` and `false`. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- **Null** type &rightarrow; has exactly one value: `null` which represents the intentional absence of any object value. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null)

- **Undefined type** &rightarrow; A variable that has not been assigned a value has the value undefined `undefined`. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

- **Number type** &rightarrow; two built-in numeric types: **_Number_** and **_BigInt_**

  - **Number** &rightarrow; represents numbers between -(2<sup>53</sup> − 1) and 2<sup>53</sup> − 1. In addition to representing floating-point numbers, the number type has three symbolic values: `+Infinity`, `-Infinity`, and `NaN` ("Not a Number").

  - **BigInt type** &rightarrow; can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

```javascript
{
    // Operations on Number types
  const a = 10
  const b = 4
  console.log(a + b) -> 14
  console.log(a - b) -> 6
  console.log(a * b) -> 40
  console.log(a / b) -> 2.5
  console.log(a % b) -> 2 // Divide two numbers, yield remainder
  console.log(a ** b) -> 10000 // Exponentiation
}
```

- **String type** type &rightarrow; is used to represent textual data. Each element in the String occupies a position in the String. The first element is at index 0, the next at index 1, and so on. The length of a String is the number of elements in it. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Reference Data Types

Reference data types are assigned a non-primitive value and are given a reference to that value. That reference points to the object’s location in memory. The variables don’t actually contain the value. Objects (functions, arrays...) are reference data types.

- **Object type** type &rightarrow; can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Property values can be values of any type, including other objects, which enables building complex data structures. Properties are identified using key values. A key value is either a String or a Symbol value. [read more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

```javascript
{
  // Objects in JS
  const person = new Object();
  person.name = "Joe";
  person.greet = function () {
    console.log("Hello from ", this.name);
  };

  person.greet(); // -> Hello from Joe
}
```

[Functions &rightarrow; ](functions.md)
