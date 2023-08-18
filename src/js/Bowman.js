import Character from './Character.js';

export default class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }

  attack = 25;

  defence = 25;
}
