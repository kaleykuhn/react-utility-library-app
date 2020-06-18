export default class utils {
   static standInLine(arr, item) {
      // A1: array
      // A2: item
      // R: item removed
      arr.push(item);
      console.log(arr);
      var removed = arr.shift();
      console.log(removed);
      return removed;
   }

   static unshift(arr, elem) {
      // A1: array
      // A2: element
      // R: an array with element added to the front.

      arr.unshift(elem);
      return arr;
   }

   static shift(array) {
      // A1: array
      // R: an array with first element removed from A1
      array.shift();
      return array;
   }

   static pop(array) {
      // A1: array
      // R: array with last element removed from A1
      array.pop();
      return array;
   }

   static push(array, elem) {
      // A1: array
      // A2: elem
      // R: array with element added to end
      array.push(elem);
      return array;
   }

   static findNthToLast(str, num) {
      // A1: string
      // A2: number
      // R: a character of a string

      var lengthOfString = str.length;
      var nthToLastNum = lengthOfString - num;
      var nthLetter = str[nthToLastNum];
      return nthLetter;
   }

   static lastCharacter(str) {
      // A1: string
      // R: a character of a string
      var lengthOfString = str.length;
      var lastNum = lengthOfString - 1;
      var lastLet = str[lastNum];
      console.log(lastLet);

      //var lastLet = str[str.length - 1];
      return lastLet;
      //return str[str.length - 1];
   }

   static nth(str, num) {
      // A1: string
      // A2: number
      var nthChar = str[num];
      return nthChar;

      //var lengthOfString = str.length;
      //console.log(lengthOfString);
      //var nthNum = lengthOfString -[num];
      //console.log(nthNum);
      //2nd attempt
      //var lengthOfString = str.length;

      //var nthNumber = str[nthNum];
      //return nthChar;
      // A1: string
      // A2: number
      // R: nth character
      //return str + num[2];
   }

   static first(str) {
      // A: string
      // R: first character of the string
      // return (input1 = input2[0]);
      return str[0];
   }

   static length(string) {
      // A1: string
      // R: number of characters in string
      //return (input1 = input2.length);
      return string.length;
   }

   static construct(str, var1) {
      // A1: string
      // A2: variable
      // R: string
      var ourStr = str;
      var ourVar = var1;
      return ourStr + " " + ourVar;
   }

   static concatenat(str1, str2) {
      // A1: string
      // A2: string
      // R:   a new string
      return (str1 += str2);
   }

   static concatenatep(str1, str2) {
      // A1: string
      // A2: string
      // R: a new string
      return str1 + str2;
   }

   static remainder(dec1, dec2) {
      // A1: number
      // A2: number
      // R: remainder number
      return dec1 / dec2;
   }

   static product(dec1, dec2) {
      // A1: decimal number
      // A2: decimal number
      // R: decimal number
      return dec1 * dec2;
   }

   static decrement(num) {
      // A1: number
      // R: number
      num--;
      return num;
   }
   static increment(num) {
      // A1: number
      // R: number
      num++;
      return num;
   }

   static quotient(num1, num2) {
      // A1: number
      // A2: number
      // R: number
      return num1 / num2;
   }

   static multiply(num1, num2) {
      // A1: number
      // A2: number
      // R: number
      return num1 * num2;
   }

   static subtract(num1, num2) {
      // A1: number
      // A2: number
      // R: number
      return num1 - num2;
   }

   static add(num1, num2) {
      // A1: number
      // A2: number
      // R: number
      return num1 + num2;
   }
   // Your functions go here

   static countingCards(card) {
      // A1: card
      // R: Bet and Hold
      var count = 0;
      switch (card) {
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;

         default:
            return;
      }
      if (count > 0) {
         return count + " Bet"; // <---- added space before Bet
      } else {
         return count + " Hold"; // <---- added space before Hold
      }
   }

   //A1: name
   //A2: property
   //R: Name of  property, or No such contact, or No such property
   static lookUpProfile(name, prop) {
      var contacts = [
         {
            firstName: "Akira",
            lastName: "Laine",
            number: "0543236543",
            likes: ["Pizza", "Coding", "Brownie Points"],
         },
         {
            firstName: "Harry",
            lastName: "Potter",
            number: "0994372684",
            likes: ["Hogwarts", "Magic", "Hagrid"],
         },
         {
            firstName: "Sherlock",
            lastName: "Holmes",
            number: "0487345643",
            likes: ["Intriguing Cases", "Violin"],
         },
         {
            firstName: "Kristian",
            lastName: "Vos",
            number: "unknown",
            likes: ["JavaScript", "Gaming", "Foxes"],
         },
      ];

      for (var i = 0; i < contacts.length; i++) {
         var singleContactObj = contacts[i];
         var firstName = singleContactObj.firstName;
         if (firstName === name) {
            if (singleContactObj.hasOwnProperty(prop)) {
               console.log(firstName);
               return singleContactObj[prop];
            } else {
               return "No such property.";
            }
         }
      }
      return "No such contact.";
   }

   static generateRanNumRange(myMax, myMin) {
      //A1: max number
      //A2: min number
      //R: Random number in range

      return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
   }

   static splice(pos1, pos2) {
      var spliceArray = [2, 3, 4, 5, 6, 7, 8];

      let array = spliceArray;
      console.log(spliceArray);
      let newArray = array.splice(pos1, pos2);
      console.log(newArray);
      return newArray;
   }

   static spliceAdd(ind, num, ele) {
      //A1:startindex
      //A2:num to delete
      //A3: element to switch out
      //R: spliced array
      var spliceAddArray = [
         "DarkGoldenRod",
         "WhiteSmoke",
         "LavenderBlush",
         "PaleTurquoise",
         "FireBrick",
      ];
      let array = spliceAddArray;
      console.log(spliceAddArray);
      const newArray = array.splice(ind, num, ele); //changed from var to const
      console.log(newArray);
      return array;
   }

   static checkPresEleIndex(arr, elem) {
      //var indexArray = ["squash", "onions", "shallots"];
      //var indexEle = "mushrooms";

      //target array through index and check if elements exists
      //inequality operator used because index starts at 0 so -1 would be undefined
      return arr.indexOf(elem) !== -1; //changed to double ==
   }
   //A1: var
   //R: type
   static checkTypeOfVar(input1) {
      var type1 = input1;
      console.log(typeof type1);
      return typeof type1;
   }

   // Return part of an Array using Slice

   //A1: array
   //A2: index to start slice
   //A3: index to end slice which is non-inclusive
   //R: new array

   static returnPartArrSlice(beginSlice, endSlice) {
      var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
      let array = inputAnim;
      console.log(array);
      var slicedArr = array.slice(beginSlice, endSlice);
      return slicedArr;
   }

   // Return part of an array using slice method

   //
   //A1: begin splice
   //A2: end splice which is not 0 based
   //R: removed array items
   static removeElemSlice(beginSlice, endSlice) {
      var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
      let array = cities;
      console.log(array);
      var slicedArr = array.slice(beginSlice, endSlice);
      return slicedArr;
   }
   //Combine two arrays using concat method

   //A1: array
   //A2: array
   //R : combined array
   static concatArr(array1, array2) {
      //var first = [1, 2, 3];
      //var second = [4, 5];

      var conArr = array1.concat(array2);
      console.log(conArr);
      return conArr;
   }
   // Add Elements to the End of an Array using concat
   //var first = [1, 2, 3];
   //var second = [4, 5];
   //non mutating
   // A1: array
   // A2: element
   // R: array with element added to end
   static concatToEndArray(arr1, ele) {
      var conArrEnd = arr1.concat(ele);
      console.log(conArrEnd);
      return conArrEnd;
   }
   //Use higher order functions to solve complex problem
   // We want to return a new array that has only positive integers and we want to square those integers in array at end
   // first we use the filter method on the numbers and Number.isInteger to find if that num is an integer and add to new array
   //Then we want only the positive numbers left so we filter out anything that isnt 0 or above.
   // With that new array then we want to multipy the numbers by themselves to get our return.
   // A1: array
   // R: new array

   static useHigherOrderFun(arr) {
      //var squareList = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
      let allInt = arr.filter((num) => {
         if (Number.isInteger(num) === true) {
            return true;
         } else {
            return false;
         }
      });
      console.log(allInt);
      let allIntPos = allInt.filter((num) => {
         if (num >= 0) {
            return true;
         } else {
            return false;
         }
      });
      console.log(allIntPos);
      let squareList = allIntPos.map((num) => {
         return num * num;
      });
      console.log(squareList);
      return squareList;
   }

   // Use reduce Method to analyze Data
   // first we filter out the pos numbers to new arr
   // then we use reduce
   // then we use reduce to output difference between new array num
   // A1: array
   // R : number
   static reduceMethAnaData(arr) {
      let newArr = arr
         .filter((num) => num < 0)
         .reduce((arrSub, num) => arrSub - num);
      return newArr;
   }
   //Sort an Array Alphabetically
   //A: callback function alphabetical Order is used for array sort
   //R: The elements return in alphabetical order

   static sortArrAlpha(array) {
      //var letterArr = ["a", "d", "c", "a", "z", "g"];
      console.log(array);
      return array.sort();
      //return array.sort(function (a, b) {
      //return a === b ? 0 : a < b ? -1 : 1;

      //});
   }
   //Split a string into an Array Using the split Method
   //A1: The string is split and made into seperate strings with the \W character expression to define where to split the string
   //R: Returns an array with string in it with each word seperate
   static spltStrArr(str) {
      return str.split(/\W/);
   }

   //Combine an Array into a string using join method
   //A1: string use the \W to define seperation
   //R: string as a sentence without punctuation
   static sentensify(str) {
      var sepStr = str.split(/\W/).join(" ");
      console.log(sepStr);
      return sepStr;
   }
   //
   static convStrUrlSlug(name) {
      return name.toLowerCase().trim().split(/\s+/).join("-");
   }
   // Use the every() method to check that every element in the array meets a criteria
   //A1: array
   // this functions criteria is for positive numbers in an array
   // can be used many other criteria with this method
   // R: the function returns true or false boolean value
   static everyMethCheckPos(arr) {
      console.log(arr);
      return arr.every((value) => value > 0);
   }
   // Use the some method to check that any element in an array   meet a criteria
   //A1: array scans this to see if it meets criteria

   static someMethCheckNeg(arr) {
      console.log(arr);
      return arr.some((value) => value < 0);
   }

   // Convert Celsius to Fahrenheit using equation
   // A1: celsius
   // R: fahrenheit
   static convertCelsToF(celsius) {
      let fahrenheit = celsius * (9 / 5) + 32;
      return fahrenheit;
   }

   //Reverse a string
   //A1: str
   //R: reverse string
   //var reverseString = (str) => str.split("").reverse().join("");
   static reverseStr(str) {
      //split given string str by char using .splt
      let split = str.split("");
      //use .reverse to reverse split string
      let reverse = split.reverse();
      //join char back together .join
      return reverse.join("");
   }
   //factoralize a number
   //A1: number
   //R: number
   static factorialize(num) {
      for (var product = 1; num > 0; num--) {
         product *= num;
      }
      return product;
   }

   //if (num === 0) {
   //return 1;
   //}
   //return num * factorialize(num - 1);
   //}
   // Find the longest word in a string
   // First you want to split the words in string into array
   // Then assign greatest to 0 to keep track of longest word in array
   // Use map method
   //A1: string
   //R : number of characters in longest word
   static findLongWordStr = (str) => {
      var split = str.split(" ");
      var greatest = 0;
      split.map((words) => {
         if (words.length > greatest) {
            greatest = words.length;
            return true;
         }
         return false;
      });
      return greatest;
   };
   // Return an array of the largest numbers from nested arrays
   //A1: array
   //R: new array
   // Create a variable to store the results of array
   // Create an outer loop to iterate throught the outer array
   // Create second var to hold the largest number and initialise it with the first number.This is outside the inner loop so it wont be reassigned until we find larger number
   // Create inner loop to work with the sub-arrays
   //Check if the element of the sub array is larger than the currently stored largest number.If so , then update the number in variable
   //After the inner loop, save the largest in the corresponding position inside of the results array.
   static largestOfFour(arr) {
      var results = [];
      for (var n = 0; n < arr.length; n++) {
         var largestNumber = arr[n][0];
         for (var sb = 1; sb < arr[n].length; sb++) {
            if (arr[n][sb] > largestNumber) {
               largestNumber = arr[n][sb];
            }
         }

         results[n] = largestNumber;
      }

      return results;
   }

   //Confirm ending
   //Use slice meth to copy string and extract section return new str
   //Only use first param in start slice to copy everything from start of index then the length is sub from target.length to get remaing char equivalent to targets length
   //Compare the results of slice to target to see if have same char
   //A1: string
   //A2: target
   //R: true or false boolean
   static confirmEnding(str, target) {
      return str.slice(str.length - target.length) === target;
   }
   //var =str.length - target.length
   // Repeat A String
   //A1: string
   //A2: number
   //R: repeated string or empty string if not positive number
   static repeatStringNumTimes(str, num) {
      let repeat = ""; //repeated word stored
      while (num > 0) {
         //while loop repeat code according currvalnum
         repeat += str; //add string to repeat var
         num--; //decrease num
      }
      return repeat; // return at end of loop
   }

   // Truncate String
   // Given str (str.length) is greater than num then use slice method
   // 0 is starting point, num is ending point for slice
   // after slicing the str, add on end (...)
   //if statement is false just return the str :str
   //A1: string
   //A2: number
   //R: string
   //function truncateString(str, num) {
   //let a = str.length;
   //let b = str.slice(0, num);
   //return a > num ? b + "..." : str;
   //}
   static truncateString = (str, num) =>
      str.length > num ? `${str.slice(0, num)}...` : str;

   //Finders Keepers
   //A1: array
   //A2: function
   //R: return num if true and if false undefined
   // use loop to look through array
   // set the num variable to each index in array
   // The predefined function checks each number, if true return num
   // If none of the numbers in the array pass the function's test, return undefined
   static findElement = (arr, func) => {
      let num = 0;
      for (var i = 0; i < arr.length; i++) {
         num = arr[i];
         if (func(num)) {
            return num;
         }
      }
      return undefined;
   };
   // Boo Who
   // Check if a value is classified as boolean primitive.
   //Use the operator of typeof to check if the variable is a boolean
   //A1: value of bool
   //R: boolean true or false
   static booWho(bool) {
      return typeof bool === "boolean";
   }
   //var booWho = (bool) => typeof bool === "boolean";
   //if the given bool is boolean, return true//if not, return false

   //Title Case
   static titleCase = (str) =>
      str
         .toLowerCase()
         .split(" ")
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
         .join(" ");
   //map allows you to call a function for every element inside an array //it's like using a for loop
   //only, in this case, use map to cycle through each element of the array

   //frankenarrays([1, 2, 3], [4, 5, 6], 1);
   //Slice and Splice
   // create a copy of the second array using .slice so that the original is not mutated and leave slice () empty so that it will slice out entire array
   //then copy.slice first param is n where to start changing array which is 1 index in this case
   //second param is number of elements to remove which is zero
   // arr ...1 spread operator copies contents of arr1 into the copy of arr1
   static frankensplice = (arr1, arr2, n) => {
      var copy = arr2.slice();
      copy.splice(n, 0, ...arr1);
      return copy;
   };

   //Falsy Bouncer
   //remove all falsy values
   //filter is used to create new array with all elemk that pass the test implemented by the function you put inside arr
   //Boolean will check of the values in array and falsy values filtered out
   //function bouncer(arr) {
   //return arr.filter(Boolean); }
   //A1: Boolean
   static bouncer = (arr) => arr.filter(Boolean);

   //Where do I Belong
   //A1:
   //R:
   static getIndexToIns = (arr, num) => {
      //use push() to add num to existin array
      //push() will add num of last ele of arr
      // ex [40,60,50]
      //sort the array from lowest to highest number with sort
      arr.push(num);
      arr.sort((a, b) => a - b);
      // [40,50,60]
      //return the position or index of num in array using indexOf()function
      return arr.indexOf(num);
   };

   //getIndexToIns([40, 60], 50);
   // Alt functions
   //var getIndexToIns = (arr, num) => {
   //arr.sort((a, b) => a - b);
   //for (var i = 0; i < arr.length; i++) {
   //if (arr[i] >= num) { return i;
   //} }
   //return arr.length; };

   //A1: array
   //R: new array
   static mutation = (arr) => {
      var string1 = arr[0].toLowerCase();
      var string2 = arr[1].toLowerCase();
      for (var i = 0; i < string2.length; i++) {
         if (string1.indexOf(string2[i]) < 0) {
            return false;
         }
      }
      return true;
   };
   //A1: arr
   //A2: size
   //R: new Arr
   static chunkArrayInGroups(arr, size) {
      var newArr = [];

      while (arr.length) {
         newArr.push(arr.splice(0, size));
      }

      return newArr;
   }
}
