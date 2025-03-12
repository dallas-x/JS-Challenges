// TODO: THis is currently broken, need to fix it.
// I believe the issue is that I'm not handling nested objects correctly.
// somehow im erasing what is in results slash activeObject but to tired to dive deeper.
// gonna just use the native function JSON.parse for now. lolz

function solution(jsonString, updateValue) {
  let result = {}; // Root object
  let stack = [result]; // Stack to manage nested objects
  let key = ''; // Stores current key being processed
  let i = 0;
  let activeObject = result; // Current active object in the stack

  while (i < jsonString.length) {
    let char = jsonString[i];

    if (char === '{') {
      let newObject = {};
      if (key) {
        activeObject[key] = newObject; // Assign new object to current key
        key = ''; // Reset key after assignment
      }
      stack.push(activeObject);
      activeObject = newObject; // Move into the new object
      i++;
    } else if (char === '}') {
      activeObject = stack.pop();
      i++;
    } else if (char === '"') {
      let endQuote = jsonString.indexOf('"', i + 1);
      let extractedString = jsonString.substring(i + 1, endQuote);
      i = endQuote + 1;

      // If we don't have a key yet, this is a key
      if (!key) {
        key = extractedString;
      } else {
        // Otherwise, it's a value
        activeObject[key] = extractedString;
        key = ''; // Reset key after assignment
      }
    } else if (char === ':') {
      i++; // Skip colon
    } else if (char === ',') {
      i++; // Skip comma
    } else {
      i++; // Skip whitespace and unexpected characters
    }
  }
  return activeObject;
}

const jsonString =
  '{"key1": "value1", "key2": {"key3": "value3", "key4": "value4"}, "key5": "value5"}';

const parsedObject = solution(jsonString, 'newValue');
console.log(parsedObject);
