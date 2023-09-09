const { World } = require('./world');
const { Character } = require('./character');
const { Food } = require('./food');
// const { Player } = require('./player');
const { Room } = require('./room');
const { Item } = require('./item');

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom);
    this.cooldown = 3000;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }


  randomMove() {
    // Fill this in
    this.currentRoom = this.currentRoom.exits["w"];
    this.act();

  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    }.bind(this)
    // const resetCooldown = () => {
    //   this.cooldown = 0;
    //   this.act();
    // };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    // reduce health each time;
    this.attackTarget.health -= 10;
    this.act();
  }

  applyDamage(amount) {
    // Fill this in
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }


  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

// let room = new Room("Test Room", "A test room");
// let item = new Item("rock", "just a simple rock");
// let sandwich = new Food("sandwich", "a delicious looking sandwich");
// let enemy = new Enemy('enemy', 'an ordinary character', room);
// let player = new Player("player", room);

// // console.log(World.enemies, 'ENEEEEEEEEEEEEEE');
// World.enemies.push(enemy);
// World.setPlayer(player);

// enemy.items.push(item);
// room.items.push(sandwich);

// let westRoom = new Room("West Room", "A room to the west of testRoom");
// room.connectRooms('w', westRoom);

// enemy.cooldown = 0;

// console.log(enemy.currentRoom.name, '1111111111111111') //=>room
// enemy.randomMove();
// console.log(enemy.currentRoom, '222222222222222') // => westRoom
// console.log(enemy.currentRoom === westRoom)
// console.log(enemy.cooldown, '33333333333333333333') // =>   >0

// console.log(enemy.attackTarget, "HERE");
// console.log(player.hit('enemy'));
// player.hit('enemy');
// console.log(enemy, "HERE");
// enemy.cooldown = 0;
// console.log(player.health); //=> 100
// enemy.attack();
// console.log(player.health); //=> 90
// console.log(enemy.cooldown); // >0
// console.log(player, 'PLAYER');
// console.log(enemy, 'ENEMY');

module.exports = {
  Enemy,
};
