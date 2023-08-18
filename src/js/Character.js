export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Parameter "Name" is invalid!');
    }
    this.name = value;
  }

  get type() {
    return this.type;
  }

  set type(value) {
    const Characters = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!Characters.includes(value)) {
      throw new Error('Parameter "Type" is invalid!');
    }
    this.type = value;
  }

  health = 100;

  level = 1;

  attack;

  defence;
}
