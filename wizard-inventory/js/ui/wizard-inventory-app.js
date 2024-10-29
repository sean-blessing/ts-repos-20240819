"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const item_class_1 = require("../model/item.class");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const console_io_class_1 = require("../util/console-io.class");
const prompt = (0, prompt_sync_1.default)();
let items = [];
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
    }
    else {
        for (let item of items) {
            console.log(`${item.id} - ${item.name}`);
        }
    }
}
function getNextItemId() {
    let nextId = 0;
    for (let item of items) {
        nextId = Math.max(nextId, item.id);
    }
    nextId++;
    return nextId;
}
function findItem(id) {
    let item;
    for (let item of items) {
        if (item.id == id) {
            return item;
        }
    }
}
function addItem() {
    if (items.length == 4) {
        console.log("Maximum items (4) reached. Please drop an item first.");
    }
    else {
        // prompt for item name
        let itemName = prompt("New Item Name: ");
        // get next item id
        let id = getNextItemId();
        // create item
        let item = new item_class_1.Item(id, itemName);
        // add to list
        items.push(item);
        // confirm msg
        console.log(`Item added: ${item.id} - ${item.name}`);
    }
}
function editItem() {
    // prompt for item id
    let id = consoleIO.getWholeNumber("Enter ID: ");
    // find item in list
    let item = findItem(id);
    // display current name
    if (typeof item === "undefined") {
        console.log(`No item found for id: ${id}.`);
    }
    else {
        console.log(`Item found: ${item.id} - ${item.name}`);
        // update item name
        let newItemName = prompt("Updated Name: ");
        item.name = newItemName;
        // confirm msg
        console.log(`Item ${id} updated.`);
    }
}
function dropItem() {
    // prompt for item id
    let id = consoleIO.getWholeNumber("Enter ID: ");
    // find item in list
    let item = findItem(id);
    if (typeof item === "undefined") {
        console.log(`No item found for id: ${id}.`);
    }
    else {
        // remove item
        let idx = items.indexOf(item);
        let removedItem = items.splice(idx, 1);
        // confirm msg
        console.log(`Removed Item: ${removedItem[0].name}.`);
    }
}
console.log("Welcome to the Wizard Inventory game!");
let consoleIO = new console_io_class_1.ConsoleIO();
let command = "";
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
