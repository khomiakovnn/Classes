import { Character } from "./Character"

export default class Magician extends Character {
    constructor (name) {
        super(name, 'Magician')
    }

    attack = 10
    defence = 40
}
