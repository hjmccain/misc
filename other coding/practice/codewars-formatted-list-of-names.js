list = (names) => {

  const nameArray = [], length = names.length, last = length - 1;
  let formattedName, nameString;

  if (length === 1) {
    nameArray.push(names[0].name);

  } else {
    for (x in names) {
      if (names[x] === names[last]) {
        formattedName = (`& ${names[x].name}`);
      } else if (names[x] === names[last - 1]) {
        formattedName = (`${names[x].name} `);
      } else {
        formattedName = (`${names[x].name}, `);
      }
      nameArray.push(formattedName);
    }
  }

  nameString = nameArray.join("");
  console.log(nameString);
  return nameString;

}

list([ {name: 'Bart'});
list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]);

// function list(names) {
//   const nameArray = [];
//   const last = names.length - 1
//   if (names.length === 1) {
//     nameArray.push(names[0].name);
//   } else {
//     for (x in names) {
//       if (names[x] === names[last]) {
//         nameArray.push(`& ${names[x].name}`);
//       } else if (names[x] === names[last - 1]) {
//         nameArray.push(`${names[x].name} `);
//       } else {
//         nameArray.push(`${names[x].name}, `);
//       }
//     }
//   }
//   return nameArray.join("");
// }
