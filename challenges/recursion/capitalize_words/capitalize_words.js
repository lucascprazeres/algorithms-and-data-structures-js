function capitalizeWords(words) {
  if (words.length === 0) return [];

  let uppercaseWords = [];

  uppercaseWords.push(words[0].toUpperCase());
  uppercaseWords = uppercaseWords.concat(capitalizeWords(words.slice(1)));

  return uppercaseWords;
}
console.log(capitalizeWords(['batata', 'pneu', 'tijolo']));