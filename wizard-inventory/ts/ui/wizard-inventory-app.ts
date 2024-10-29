import { Item } from "../model/item.class";
import promptSync from "prompt-sync";
import { ConsoleIO } from "../util/console-io.class";

const prompt = promptSync();
let items: Item[] = [];

function displayMenu() {
  console.log("COMMAND MENU:");
  console.log("=====================");
  console.log("show - Show all items");
  console.log("grab - Grab an item");
  console.log("edit - Edit an item");
  console.log("drop - Drop an item");
  console.log("exit - Exit program");
  console.log();
}

function displayItems() {
  if (items.length == 0) {
    console.log("No items. Add some!");
  } else {
    for (let item of items) {
      console.log(`${item.id} - ${item.name}`);
    }
  }
}

function getNextItemId(): number {
  let nextId: number = 0;
  for (let item of items) {
    nextId = Math.max(nextId, item.id);
  }
  nextId++;
  return nextId;
}

function findItem(id: number): Item | undefined {
  let item: Item;
  for (let item of items) {
    if (item.id == id) {
      return item;
    }
  }
}

function addItem() {
  if (items.length == 4) {
    console.log("Maximum items (4) reached. Please drop an item first.");
  } else {
    // prompt for item name
    let itemName = prompt("New Item Name: ");
    // get next item id
    let id: number = getNextItemId();
    // create item
    let item: Item = new Item(id, itemName);
    // add to list
    items.push(item);
    // confirm msg
    console.log(`Item added: ${item.id} - ${item.name}`);
  }
}

function editItem() {
  // prompt for item id
  let id: number = consoleIO.getWholeNumber("Enter ID: ");
  // find item in list
  let item = findItem(id);
  // display current name
  if (typeof item === "undefined") {
    console.log(`No item found for id: ${id}.`);
  } else {
    console.log(`Item found: ${item.id} - ${item.name}`);
    // update item name
    let newItemName: string = prompt("Updated Name: ");
    item.name = newItemName;
    // confirm msg
    console.log(`Item ${id} updated.`);
  }
}

function dropItem() {
  // prompt for item id
  let id: number = consoleIO.getWholeNumber("Enter ID: ");
  // find item in list
  let item = findItem(id);
  if (typeof item === "undefined") {
    console.log(`No item found for id: ${id}.`);
  } else {
    // remove item
    let idx: number = items.indexOf(item);
    let removedItem: Item[] = items.splice(idx, 1);
    // confirm msg
    console.log(`Removed Item: ${removedItem[0].name}.`);
  }
}

console.log("Welcome to the Wizard Inventory game!");
let consoleIO: ConsoleIO = new ConsoleIO();
let command: string = "";
let validCommands = ["show", "grab", "edit", "drop", "exit"];

while (command != "exit") {
  displayMenu();
  command = consoleIO.getString("Command: ", validCommands);
  switch (command) {
    case "show":
      consoleIO.printHeader("All Items:");
      displayItems();
      break;
    case "grab":
      consoleIO.printHeader("Grab (Add) an Item:");
      addItem();
      break;
    case "edit":
      consoleIO.printHeader("Edit an Item:");
      editItem();
      break;
    case "drop":
      consoleIO.printHeader("Drop an Item:");
      dropItem();
      break;
    case "exit":
      break;
  }
}

console.log("Bye");
