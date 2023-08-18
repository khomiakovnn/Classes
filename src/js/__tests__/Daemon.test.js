import Daemon from '../Daemon.js';

test('Create instance', () => {
  expect(new Daemon('Ivan')).toEqual({
    attack: 10, defence: 40, health: 100, level: 1, name: 'Ivan', type: 'Daemon',
  });
});
