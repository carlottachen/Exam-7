
// 1. Sum Zero
console.log("\n Sum Zero Results \n");
function sumZero(array){
	//if there is only 0 or 1 elements in
	//the array, then we don't have 2 numbers
	//to add
	if(array.length < 2)
		return false;

	//in order to add two numbers to equal 0,
	//we need a positive and negative of the
	//same integer (2 and -2 in the ex. below)
	
	//take absolute value of each number in array
	for(let i = 0; i < array.length; i++){
		array[i] = Math.abs(array[i]);
	}
	//only unique numbers in new array
	const unique = Array.from(new Set(array));
	//if length is same, then no duplicates
	//meaning there was not a positive and
	//negative value that would have added to 0
	if(unique.length === array.length)
		return false;
	else
		return true;
}
console.log(sumZero([]));
console.log(sumZero([1]));
console.log(sumZero([1, 2, 3]));
console.log(sumZero([1, 2, 3, -2]));

// 2. Unique Characters
console.log("\n Unique Characters Results \n");
function uniqueCharacters(string){
	if(string.length < 2)
		return true; //if 0 or 1 char, then it is unique

	const array = string.split('');
	const unique = Array.from(new Set(array));
	//if length is the same in both arrays, then
	//no duplicates existed to be removed using set
	if(unique.length === array.length)
		return true;
	else
		return false;
}
console.log(uniqueCharacters('Monday'));
console.log(uniqueCharacters('Moonday'));

// 3. Pangram Sentence
console.log("\n Pangram Sentence Results \n");
function isPangram(string){
	//if string doesn't have at least 26 characters,
	//then we already know it doesn't contain all of the english
	//letters
	if(string.length < 27)
		return false;

	//make string all lowercase without spaces
	//and remove anything that isn't an English letter
	string = string.toLowerCase().replace(/[^a-z]/g, "");
	const array = string.split('');
	const unique = Array.from(new Set(string));
	//after taking all of the unique characters,
	//it should have exactly 26 elements in the array
	//if the original string contained all 26 characters of the alphabet.
	if(unique.length === 26)
		return true;
	else
		return false;
}
console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
console.log(isPangram("The quick brown fox jumps over the lazy dog kjshdfkhsdf return true!"));
console.log(isPangram("sodijfsodifjsojdfsoijdfosjfisjdfiosjdf return false"));

// 4. Longest Word
console.log("\n Longest Word Results \n");

function longestWord(array){	
	let length = 0;
	for(let i = 0; i < array.length; i++){
		if(array[i].length > length)
			length = array[i].length;
	}
	return length;
}
console.log(longestWord(["hi", "hello"]));
console.log(longestWord(["hi", "longest", "hello"]));
console.log(longestWord(["hello", "hi", "yes"]));
console.log(longestWord(["i"]));
console.log(longestWord(["i", "a"]));
console.log(longestWord([]));



