function list(names) {
  let nameArray = [];
  const last = names.length - 1;
  if (names.length === 1) {
    nameArray.push(names[0].name);
  } else {
    for (x in names) {
      if (names[x] === names[last]) {
        nameArray.push(`& ${names[x].name}`);
      } else if (names[x] === names[last - 1]) {
        nameArray.push(`${names[x].name} `);
      } else {
        nameArray.push(`${names[x].name}, `);
      }
    }
  }
  console.log(nameArray.join(""));
}

list([ {name: 'Bart'});
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Hannah'}, {name: 'Nae'} ]);
