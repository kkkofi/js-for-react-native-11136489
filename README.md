# js-for-react-native-11136489

# JavaScript Array Manipulation and User Profiles

This project demonstrates array processing and user profile creation using JavaScript.

## Files

### 1. arrayManipulation.js

Contains:
- processArray(arr): Squares even numbers and triples odd numbers in an array.
- formatArrayStrings(strings, numbers): Modifies strings based on corresponding numbers (uppercase if even, lowercase if odd).

Example usage:
```javascript
const originalStrings = ["Huge”,  “Strong”, “Small”, “weak"];
const numbers = [18, 33, 26, 44];

const processedNumbers = processArray(numbers);
const modifiedStrings = formatArrayStrings(originalStrings, processedNumbers);

export { originalStrings, modifiedStrings };

### 2. userInfo.js
Contains:createUserProfiles(originalNames, modifiedNames): Creates user profiles with auto-incremented IDs.Example usage:import { originalStrings, modifiedStrings } from './arrayManipulation.js';

const userProfiles = createUserProfiles(originalStrings, modifiedStrings);
console.log(userProfiles);