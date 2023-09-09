const { Character } = require('./character');
const { getItemByName, moveItem } = require('../_shared_methods')

const { Enemy } = require('./enemy');
const { Room } = require('./room');
const { Food } = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0; i < this.items.length; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }


  takeItem(itemName) {

    // Fill this in
    let currentRoomItems = this.currentRoom.items;
    moveItem(itemName, currentRoomItems, this.items);
  }

  dropItem(itemName) {
    moveItem(itemName, this.items, this.currentRoom.items)
  }

  eatItem(itemName) {
    let item = getItemByName(this.items, itemName);
    if (item instanceof Food) {
      moveItem(itemName, this.items, []);
    }
  }

  getItemByName(name) {
    return getItemByName(this.items, name)
  }

  hit(name) {

    // Fill this in
    let enemyinRoom = this.currentRoom.getEnemyByName(name)
    enemyinRoom.attackTarget = this;
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

let food = new Food("sandwich", "a delicious sandwich");
let room = new Room("Test Room", "A test room");
let player = new Player("player", room);

player.items.push(food);
console.log(player.items)

module.exports = {
  Player,
};
