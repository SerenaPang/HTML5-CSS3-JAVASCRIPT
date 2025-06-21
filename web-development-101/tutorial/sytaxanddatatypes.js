if (Math.random() > 0.5) {
    const y = 5;
  }
  console.log(y); // ReferenceError: y is not defined

  if (true) {
    var x = 5;
  }
  console.log(x); // x 是 5

  