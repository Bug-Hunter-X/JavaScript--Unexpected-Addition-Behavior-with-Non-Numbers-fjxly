function foo(a, b) {
  if (a === null || b === null) {
    return null; 
  }
  //Check if inputs are numbers before performing addition
  if (typeof a === 'number' && typeof b === 'number'){
    return a + b; 
  } else {
    console.warn("Invalid input: Both inputs must be numbers.");
    return NaN; // or 0 or throw an error
  }
}
//Alternative solution using Number()
function foo2(a,b){
  a = Number(a);
  b = Number(b);
  if(isNaN(a) || isNaN(b)){
    console.warn('Invalid input');
    return NaN;
  }
  return a + b;
} 