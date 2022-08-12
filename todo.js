const list = ['nilesh', 'mohan', 'ramesh'];

function command() {
  console.log(`Choose a Command\n`);
  console.log(`Press 1 : for adding an Item`);
  console.log(`Press 2 : for deleting an Item`);
  console.log(`Press 3 : for updating an item`);
  console.log(`Press 0 : for Exit `);
  console.log(`Press 4 : for printing list \n`);
  console.log(`Press 4 : for command \n`);
}

// adding item

function addItem(item) {
  list.push(item);
  console.log(`${item} is added `);
}

function printList() {
  for (let i = 0; i < list.length; i++) {
    console.table(` ${i + 1} ${list[i]}`);
  }
}

// updating item

function updateItem(index, item) {
  list[index - 1] = item;
}

updateItem(2, 'Hello');
printList();

// delete item

function deleteItem(index) {
  list.splice(index - 1, 1);
}
