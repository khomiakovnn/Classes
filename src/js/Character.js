export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Parameter "Name" is invalid!');
    }
    this.name = name;
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Parameter "Type" is invalid!');
    }
    this.type = type;
  }

  health = 100;

  level = 1;

  attack;

  defence;
}
