# Typescript

## Core Types (Primitives are ALWAYS lowercase!)

### number

- _ALL_ numbers, no difference between integers or floats
- 1, 2, 3

### string

- All text values
- "Hello", "w", "1"

### boolean

- Just T/F, no "truthy" or "falsy" values
- true, false

## object

- Any <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" alt="drawing" width="15px"/> JavaScript object
- {age:30}

## Best Practices

### Declaring Types

- Type Declaration example:
  - No Type Delcaration (Initialized):
    > const num1 = 1; </br>
  - Type Declaration (Not Initialized):
    > const num1: number;
- **ONLY** declare type when a variable is **not** imediately intialized
- Non-initialized variables have type "_any_" by default
  > const num1: any; === const num1;
- Initialized variable have _inferred_ type by default, which is why type _does not_ have to be declared when variables are initialized immediately
  > const num1: number = 1; === const num1 = 1;
