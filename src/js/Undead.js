import Character from './Character.js';

export default class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
  }

  attack = 25;

  defence = 25;
}
