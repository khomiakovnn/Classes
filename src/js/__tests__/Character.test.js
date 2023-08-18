import Character from '../Character.js';

function typeTest() {
  return new Character('Ivan', 'Bowmann');
}
test('Incorrect type', () => {
  expect(typeTest).toThrow('Parameter "Type" is invalid!');
});

function smallName() {
  return new Character('I', 'Bowmann');
}
test('Too small name', () => {
  expect(smallName).toThrow('Parameter "Name" is invalid!');
});

function bigName() {
  return new Character('Ivannnnn123678', 'Bowmann');
}
test('Too big name', () => {
  expect(bigName).toThrow('Parameter "Name" is invalid!');
});

const typesDatalist = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

const typesHandler = test.each(typesDatalist);

typesHandler('Class Character for %s', (type) => {
  expect(new Character('Ivan', type)).toEqual({
    attack: undefined, defence: undefined, health: 100, level: 1, name: 'Ivan', type,
  });
});
