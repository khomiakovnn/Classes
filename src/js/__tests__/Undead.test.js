import Undead from '../Undead.js';

test('Create instance', () => {
  expect(new Undead('Ivan')).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Undead',
  });
});
