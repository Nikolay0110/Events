export default class MoleGame {
    constructor(fieldSize) {
        this.fieldSize = fieldSize ** 2;
    }

    // создание игрового поля исходя из указанного fieldSize
    creatingField() {
        const allField = document.querySelector('.hole-game');
        for (let i = 0; i < this.fieldSize; i += 1) {
            const field = document.createElement('div');
            field.classList.add('hole');
            field.id = `hole-${i}`;
            allField.appendChild(field);
        }
        this.randomHole();
    }

    // перемещение крота на случайное поле
    randomHole() {
        setInterval(() => {
            const holes = document.querySelectorAll('.hole');
            for (let i = 0; i < holes.length; i++) {
                const activeCell = 'hole_has-mole';
                if (holes[i].classList.contains(activeCell)) {
                    holes[i].classList.remove(activeCell);
                }
            }
            const rand = Math.floor(Math.random() * this.fieldSize);
            holes[rand].classList.add('hole_has-mole'); // Была ошибка здесь, нужно добавить 'hole_' перед 'has-mole'
        }, 1000);
    }
}

const newGame = new MoleGame(4);
newGame.creatingField();
