function sumTen(n) {
  let text = n.toString();

  let length = text.length;

  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += parseInt(text[i]);
  }

  if (sum < 10) {
    let newChar = 10 - sum;
    return text.concat(newChar);
  } else {
    return text;
  }
}

console.log(sumTen(36));
