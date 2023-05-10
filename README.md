# Note: hellow vhaiya I will use index.js to run problem-solving, and when my problem was solved then I make a new file with this number of problems and create a file name link Problem(number).

# Question_1: What is TypeScript, and how is it different from JavaScript
### Ans_1: TypeScript is a free and open-source high-level programming language developed by Microsoft that adds static typing with optional type annotations to JavaScript. It is designed for the development of large applications and transpiles to JavaScript. 

### TypeScript can be strongly typed, while JavaScript is dynamically typed only. TypeScript is more readable and maintainable than JavaScript. TypeScript supports abstraction through interfaces, while JavaScript does not. TypeScript allows developers to annotate code with decorators, while JavaScript does not.

# Question_2: Can you explain the difference between "interface" and "type" in TypeScript?

### Ans_2: In TypeScript, interface and type are used to define object shapes and types. The main difference is that an interface is a declaration that creates a new named type, while a type is an alias that represents an existing type.

### Interfaces are typically used for defining contracts and ensuring object shape consistency, whereas types offer more flexibility, allowing union and intersection types, mapped types, and more.

### The choice between interface and type depends on the specific use case and personal preference. In general, if you need to define a contract or extend/ implement something, interface is a good choice. If you need more flexibility or want to create complex types, type is often more suitable.

# Question_4_3: What is the difference between an "unknown" and "any" type in TypeScript?

### Ans_4_3: In TypeScript, the "unknown" type is a safer alternative to the "any" type. When using "unknown", TypeScript requires explicit type checking and narrowing before performing operations on the value. This promotes type safety and helps catch potential errors during development. In contrast, the "any" type allows values to be assigned to variables of any type and permits unrestricted operations without type checking. While "any" provides flexibility, it undermines TypeScript's static type system and can lead to type-related bugs. Therefore, it is generally recommended to use "unknown" over "any" whenever possible to ensure better type-checking and safer code.

# Question_5_4: Can you give an example of how to use enums in TypeScript?

### Ans_5_4: In TypeScript, enums, or enumerated types, are data structures of constant length that hold a set of constant values. Each of these constant values is known as a member of the enum. Enums are useful when setting properties or values that can only be a certain number of possible values. One common example is the suit value of a single card in a deck of playing cards. Every card that is drawn will either be a club, a diamond, a heart, or a spade; there are no possible suit values beyond these four, and these possible values are not likely to change. Because of this, an enum would be an efficient and clear way to describe the possible suits of a card.
### In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values. There are three types of enums:

### 1). Numeric enum
### 2). String enum
### 3). Heterogeneous enum

# Question_6_5: What is the "as" keyword used for in TypeScript?

### Ans_6_5: In TypeScript, the "as" keyword is used for type assertions or type casting. It allows you to explicitly specify the type of a value, overriding TypeScript's default type inference. Type assertions are useful when you have more knowledge about a value's type than TypeScript does, or when you want to convert a value to a compatible type. However, it is important to exercise caution when using "as" since incorrect assertions can lead to runtime errors. It's recommended to perform runtime checks or use type guards to ensure the correctness of type assertions whenever possible.
#   T y p e s c r i p t _ P S _ A S _ O n e  
 "# Typescript_PS_AS_One" 
