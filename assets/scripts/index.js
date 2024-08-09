// let nameOfStudent = "sarah";
// console.log(`${nameOfStudent} of summer green tigers`);


// function greet (ido){
//     return ido;
// }

// console.log(greet("123"));
// function add(a, b){
//     console.log((a, + b) *a);
// }


// // invoking the function

// add(2, 5);


// A better way to do it

function add(a, b){
    return((a + b) * a )
}
const res = add(5, 6);
console.log(res);


// 1_Defining the function

function decodeColor( code ) {
    if ( code === 1 ) {
        console.log( 'Red' );
    } else if ( code === 2 ) {
        console.log( 'Yellow' );
    } else if ( code === 3 ) {
        console.log( 'Green' );
    } else {
        console.log( 'Unknown code' );
    }
}

// 2_Calling the function

// decodeColor(1) // prints Red

// decodeColor(2) // prints Yellow

// decodeColor(3) // prints Green

decodeColor('blah') // prints Unknown code






// 1_Defining the function

function decodeColor( code ) {
    switch( code) {
	case 1:
		console.log( 'Red' );
		break;
	case 2:
		console.log( 'Yellow' );
		break;
	case "x":
		console.log( 'Green' );
		break;
	default:
		console.log( 'Unknown code' );
	}
}
                
// 2_Calling the function

decodeColor(1) // prints Red

// decodeColor(2) // prints Yellow

// decodeColor("x") // prints Green

// decodeColor(3) // prints Unknown code





// 1_Defining the function

function decodeColor( code ) {
    switch( code) {
	case 1:
		return 'Red';
	case 2:
		return 'Yellow';
	case "x":
		return 'Green';
	default:
		return 'Unknown code';
	}
}
// 2_Calling the function

console.log(decodeColor(2)) // prints Yellow
/*
PS: we now have to explicitly console.log the returned value of 
our function to “see” it. 
Merely executing the function won’t print anything on the 
console (although everything is working fine and as it should) 
*/


// TWO WAYS OF SCCESSING OBJECT PROPERTIES

//  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};
// Retrieving the value of the weapon property using the dot notation
console.log(gimli.weapon); // prints “axe”
// Retrieving the value of the weapon property using the bracket notation
console.log(gimli["weapon"]); // prints “axe”



// Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Calling an object method using the dot notation
console.log(gimli.greet()); 
// prints "Hi, my name is Gimli!"





//  Initializing a gimli object
var gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Adding a new age property to gimli using the dot notation
gimli.age = 139;

// Adding new age property to gimli using the dot notation
gimli["age"] = 139;
// Adding a new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}

console.log(gimli)
// prints {name: "Gimli", race: "dwarf", weapon: "axe", age: 139, greet: ƒ, fight: ƒ}

// Calling the newly created method fight
console.log(gimli.fight());
// prints "Gimli attacks with an axe."



// REMOVING A PROPERTY FROM AN OBJECT WITH THE DELETE KEYWORD

//  Initializing a gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

// Removing weapon from gimli
delete gimli.weapon; // Output: true
// We can test the output of gimli to see if it succeeded.
console.log(gimli);
// prints {name: "Gimli", race: "dwarf", greet: ƒ }



const ageOfMotun = 60;

const checkEvenNumber = function(num){
    if (num % 2 === 0){
        return `${num} is an even number`

    }else if (typeof num !== "number"){
        return `${num} is not a number`
    }else{
        return `${num} is an odd number`
    }
}

console.log(checkEvenNumber(59))