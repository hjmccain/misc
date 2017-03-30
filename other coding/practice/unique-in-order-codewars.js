function uniqueInOrder(iterable) {
  const newAry = [];
  iterable.map(function(val, idx) {
    const nextIdx = (idx + 1);
    while (idx < iterable.length) {
      newAry.push(idx[val]);
    }
  });
  console.log(newAry);
}
