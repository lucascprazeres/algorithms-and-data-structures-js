function naiveStringSearch(long, short) {
  let matches = 0;
  for (let i=0; i < long.length; i++) {
    for (let j=0; j < short.length; j++) {
      if (long[i+j] !== short[j]) break;
      else if (j === short.length-1) matches++;
    }
  }
  return matches;
}

console.log(naiveStringSearch("wowomgwomg", "omg"))