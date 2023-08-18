import Swordsman from '../Swordsman.js';

test('Create instance', () => {
  expect(new Swordsman('Ivan')).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Swordsman',
  });
});
