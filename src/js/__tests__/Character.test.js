import Character from '../Character.js';

test('Incorrect type', () => {
  expect(() => {
    Character('Ivan', 'Bowmann');
  }).toThrow('Parameter "Type" is invalid!');
});

test('Too small name', () => {
  expect(() => {
    Character('I', 'Bowman');
  }).toThrow('Parameter "Name" is invalid!');
});

test('Too big name', () => {
  expect(() => {
    Character('Ivannnnn123678', 'Bowman');
  }).toThrow('Parameter "Name" is invalid!');
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
