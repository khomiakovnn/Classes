import Zombie from '../Zombie.js';

test('Create instance', () => {
  expect(new Zombie('Ivan')).toEqual({
    attack: 40, defence: 10, health: 100, level: 1, name: 'Ivan', type: 'Zombie',
  });
});
