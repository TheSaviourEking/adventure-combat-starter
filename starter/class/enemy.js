const { Character } = require('./character');
// const { World } = require('./world');
// const { Room } = require('./room');
// const { Item } = require('./item');
// const { Food } = require('./food');
// const { Player } = require('./player');

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
    let index = Math.floor(Math.random() * Object.keys(this.currentRoom.exits).length);
    let exits  = this.currentRoom.getExits();

    this.currentRoom = this.currentRoom.exits[exits[index]];
    
    //  TO CONFIRM
    this.scratchNose();
  }

  takeSandwich() {
    // Fill this in
    let sandwich = this.currentRoom.getItemByName('sandwich');
    let index = this.currentRoom.items.indexOf(sandwich);

    if (index !== -1) {
      this.currentRoom.items.splice(index, 1);
      this.items.push(sandwich);
    }
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    this.cooldown += 3000;
    // Wait until cooldown expires, then act
    const resetCooldown = function () {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown.bind(this), this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget.health -= 10;
    this.scratchNose();
  }

  applyDamage(amount) {
    // Fill this in
    this.attackTarget.health -= amount;
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
      this.die();
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
    this.rest()
  }


}



module.exports = {
  Enemy,
};
