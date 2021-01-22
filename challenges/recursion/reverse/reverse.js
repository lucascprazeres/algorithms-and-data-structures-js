function reverse(sentence = '') {
  if (sentence.length === 0) return '';
  return sentence.slice(-1) + reverse(sentence.slice(0,-1));
}

console.log(reverse('awesome'));