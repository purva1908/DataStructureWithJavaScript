/*
Stack
=====
.] stack is last in first out structure 
.]ex- we can use stack's push and pop for finding palindrome no or string
.]push(adding item into stack) , pop(removing top item from the stack),peek (current top item of stack),
   length(no of items in stack)
.]A Stack is a LIFO (Last In First Out) data structure. ... Popping an element from a stack will take
  O(1) time complexity. Popping the last element in a stack will take O(n).
.]The complexity of an algorithm is a function describing the efficiency of the algorithm in terms of the
 amount of data the algorithm must process. ... Space complexity is a function
 describing the amount of memory (space) an algorithm takes in terms of the amount of input to the algorithm.



*/

/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "racecar"

var rword = "";  //reverse word

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
   letters.push(word[i]);        //letters=[r a c e c a r]
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
   rword += letters.pop();                    //lifo struct then rword=[ r a c e c a r]
}

if (rword === word) {                //if condition is checking type and value of both cz of===
   console.log(word + " is a palindrome.");
}
else {
   console.log(word + " is not a palindrome.");
}

/*
====================================================
*/
// Creates a stack
var Stack = function() {
    this.count = 0;   //counter set to 0
    this.storage = {};   //our stack empty initially
  
    // Adds a value onto the end of the stack
    this.push = function(value) {              //defining push()
        this.storage[this.count] = value;       //this.storage[0]=value which we putted
        this.count++;                           //inc count
    }
    
    // Removes and returns the value at the end of the stack
    this.pop = function() {             
        if (this.count === 0) {           //if stack empty then return undefined
            return undefined;
        }
       
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    
    this.size = function() {
        return this.count;
    }
    
    // Returns the value at the end of the stack
    this.peek = function() {
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
