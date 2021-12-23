const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
	    new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
	    new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

/*


3. Runtimes Table
==================================================================
Array		||Insert Result		||Append Result
==================================================================
tinyArray	||28.208 μs		||87.875 μs
smallArray	||34.375 μs		||76.25 μs
mediumArray	||192.375 μs		||127.667 μs
largeArray	||9.192583 ms		||648.75 μs
extraLargeArray	||5.106292167 s		||2.515667 ms

4. The .push method scales much better because as the array passed in
	grows larger, the runtime does not become significantly slower
	whereas the .unshift method does.  Initially, the tinyArray has
	a better runtime, but when the extraLargeArray is passed in the 
	runtime becomes very slow (over 5 seconds in my result).

5. The .push method adds an element in a new index at the end of an
	array, whereas the .unshift method adds an element in an index
	at the beginning of an array.  This makes a big difference 
	in runtime because .push has a linear runtime since it only needs
	to go to the end of the array.  However, the .unshift method
	needs to add something to the beginning of the array and the
	first index already has something in it.  Because of this, it has
	to shift all of the elements over one (so if an element is at 
	index 1, it is now at index 2) first, then add the new element
	in the newly freed memory at index 0.

*/








