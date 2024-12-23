# JavaScript Bug: Unexpected Addition Behavior with Non-Numbers

This repository demonstrates a common JavaScript bug related to the implicit type coercion during addition. The `foo` function adds two input values, but it doesn't explicitly handle the case where the inputs are not numbers, leading to potential unexpected behavior or runtime errors.

## Bug Description

The primary issue is that JavaScript performs type coercion implicitly in addition operations. If either 'a' or 'b' is a string, JavaScript attempts to convert them to numbers before performing the addition. However, if this conversion fails (e.g., the string is not a valid number), it can cause unexpected results or throw an error. 

## How to Reproduce

1. Clone this repository
2. Open `bug.js` and run the function `foo` with various inputs, including non-numeric values:
   - `foo(10, 20)` (correct behavior)
   - `foo(10, '20')` (type coercion, works)
   - `foo('abc', 10)` (type coercion fails, NaN)
   - `foo(null, 10)` (handles null case)
   - `foo(10, null)` (handles null case)

## Solution

The `bugSolution.js` file demonstrates how to improve the function by adding explicit type checking and handling non-numeric inputs. By using `typeof` operator and Number() conversion, we can ensure that only valid numbers are used in the addition, resulting in more robust and predictable behavior.