function capitalizeFirst(words) {
  if (words.length === 0) return [];
  
  let capitalWords = [];
  let capitalWord = words[0][0].toUpperCase() + words[0].slice(1);
  
  capitalWords.push(capitalWord);
  capitalWords = capitalWords.concat(capitalizeFirst(words.slice(1)));

  return capitalWords;
}

console.log(capitalizeFirst(['batata', 'pneu', 'tijolo']));