function merger(param1, param2) {

  if (typeof param1 === 'number' && typeof param2 === 'number') {

    return param1 + param2;
  }
  else if (typeof param1 === 'string' && typeof param2 === 'string') {

    return param1 + param2;
  }
  else {
    return null;
  }


}

console.log(merger(5, 10));             
console.log(merger("Hello", " World")); 
console.log(merger(5, "Hello"));        
console.log(merger([1, 2], 10));        
