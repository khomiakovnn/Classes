export default class Character {
  constructor(name, type) {
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (name.length < 2 || name.length > 10) {
      throw new Error('Parameter "Name" is invalid!');
    }
    this.name = name;
    if (!types.includes(type)) {
      throw new Error('Parameter "Type" is invalid!');
    }
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
