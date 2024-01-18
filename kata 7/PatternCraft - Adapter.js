/* The Adapter Design Pattern can be used, for example in the StarCraft game, to insert an external character in the game.

The pattern consists in having a wrapper class that will adapt the code from the external source.

Your Task
The adapter receives an instance of the object that it is going to adapt and handles it in a way that works with our application. */
class MarioAdapter {
  constructor(mario) {
    this.mario = mario;
  }

  attack(target) {
    target.health -= this.mario.jumpAttack();
  }
}
