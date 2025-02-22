console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let foodsArray = ['Sushi','Tacos','Couscous','Soup'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite foods are:', foodsArray);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Number of foods are:', foodsArray.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('The second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('The last animal on the list is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Another way to find the last animal is to use the length of the array minus 1. Like so,', animalArray[animalArray.length - 1]);
console.log('Another way to find the last animal is to use the .indexOf() the animal. Like so,', animalArray[animalArray.indexOf('dog')]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
foodsArray.push('Sambusa');
console.log('Added Sambusa to my list of favorite foods', foodsArray);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = foodsArray.pop();
console.log('Removed the last item from my list of favorite foods:', removedFood);
console.log('The foods are now', foodsArray);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foodsArray.unshift('Takis');
console.log(`Added an item to beginning of my list: ${foodsArray}`);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = foodsArray.shift();
console.log('Removed the first item', removedFood);
console.log('The items are now', foodsArray);


// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
foodsArray[1] = 'Burrito';
console.log(`Changed my second favorite food to ${foodsArray[1]}. The list is now`, foodsArray);
// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

let ogFoodsArray = foodsArray.slice(0,foodsArray.length);

console.log("JavaScript can help us manipulate arrays with the .sort() and .reverse() methods! Let's try it on my favorite foods list", foodsArray);
let sortFoods = foodsArray.sort();
console.log('Using the .sort() method rearanges the items in alphabetical order. Like so,', sortFoods);
let reverseFoods = foodsArray.reverse();
console.log('Using the .reverse() method rearanges the items in alphabetical order. Like so,', reverseFoods);
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.
console.log("JavaScript can also convert arrays to strings using the .toString() method. Taking that one step further, we can add words to the string using the .join method.\nLet's with our original array", ogFoodsArray);
console.log("We're going to add the word AND between each item on the list. Like so,", ogFoodsArray.join(" and ") );

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']
console.log("JavaScript can also combine arrays into a new array using the .concat() method. Let's try combining the list of food with the list of animals.");
console.log("Here's our list of animals", animalArray);
console.log("Here's the list of foods ", ogFoodsArray);
let chimeraArray = ogFoodsArray.concat(animalArray);
console.log("Here they are combined,", chimeraArray);






