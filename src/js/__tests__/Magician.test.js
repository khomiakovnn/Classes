import Magician from '../Magician.js';

test('Create instance', () => {
  expect(new Magician('Ivan')).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Magician',
  });
});
