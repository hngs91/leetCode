function rand7() {
  return Math.round(Math.random() * (7 - 1) + 1);
}

function rand5() {
  let result = rand7();

  if (result > 5) {
    return rand5();
  } else {
    return result;
  }
}

console.log(rand7());
