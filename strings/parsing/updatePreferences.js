function updatePreference(inputString, userIndex, prefKey, newValue) {
  // TODO: Your solution
  console.log(JSON.parse(inputString));
  return {};
}

// Example usage
let input =
  'User1:Age1=21;Location1=USA;Preferences1={Food1=Italian;Sport1=Fencing};User2:Age2=30;Location2=Canada;Preferences2={Music2=Jazz;Color2=Blue}';
let userIndex = 1;
let prefKey = 'Sport1';
let newValue = 'Hockey';

let updatedPreferences = updatePreference(input, userIndex, prefKey, newValue);
console.log(updatedPreferences);
