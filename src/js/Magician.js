import Character from './Character.js';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
  }

  attack = 10;

  defence = 40;
}
