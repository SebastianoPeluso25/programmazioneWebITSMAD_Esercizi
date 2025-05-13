

function oneToMany(noun, number) {

    if (noun === 'sheep' || noun === 'geese') {
    return `${number} ${noun}`;
  }
  
  if (number === 1) {
    return `${number} ${noun}`;
  } else {
    if (noun.endsWith('y')) {
      return `${number} ${noun.slice(0, -1)}ies`;
    }
    return `${number} ${noun}s`;
  }
}

console.log(oneToMany('cat', 5));    
console.log(oneToMany('dog', 1));    
console.log(oneToMany('sheep', 3));
