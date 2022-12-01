/* eslint-disable */
function anagram(str1, str2) {
  const first = str1.toLowerCase().replace(/\s+/g, '').split('').sort();
  const second = str2.toLowerCase().replace(/\s+/g, '').split('').sort();

  return first;
}

console.log(anagram('Dave de', 'DEDE'));
