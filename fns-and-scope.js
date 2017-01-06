//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

var isTyler = function(name){
  var lcname = name.toLowerCase();
  if(lcname == "tyler"){
    return true;
  } else{
    return false;
  }
};



//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = function(){
  var name = prompt("Please enter your name.", "name");
  return name;
}



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

var welcome = function(){
  return "Welcome " + getName();
}



//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?



//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


null
NaN
undefined
0
false
""




//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
var myName = functon(name){
  return name;
}


//Now save the function definition of myName into a new variable called newMyName


  var newMyName = myName("Ryan");

//Now alert the result of invoking newMyName

return newMyName;


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  var outerHn = function(){
    return var anonymous = runction(){
      return "Ryan"
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  var innerFn = outerFn();

//Now invoke innerFn.
return innerFn
