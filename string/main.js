function reverse(str) {
  if(!str || str.length < 2 || typeof str !== 'string') {
    return 'invalid string'
  }

  const backwards = [];
  const totalItems = str.length - 1;
  for(let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join('');
}

const reverse2 = str => str.split('').reverse().join('');


console.log(reverse('Hi My name is SiThu'));