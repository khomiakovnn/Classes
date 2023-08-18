import Character from './Character.js';

export default class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }

  attack = 40;

  defence = 10;
}
