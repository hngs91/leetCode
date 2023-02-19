function sumTen(n) {
  if (n > 0) {
    return n.toString().concat((10 - n).toString());
  } else {
    return "Number has to be positive";
  }
}

console.log(sumTen(-5));
