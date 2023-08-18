import Bowman from '../Bowman.js';

test('Create instance', () => {
  expect(new Bowman('Ivan')).toEqual({
    attack: 25, defence: 25, health: 100, level: 1, name: 'Ivan', type: 'Bowman',
  });
});
