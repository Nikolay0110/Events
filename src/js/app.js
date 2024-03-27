export default class MoleGame {
    constructor(fieldSize) {
        this.fieldSize = fieldSize ** 2
        this.score = 0;
        this.miss = 0;
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

    logicHit() {
        const counterHit = document.createElement('div');
        counterHit.classList.add('counter');
        counterHit.textContent = `Количество попаданий: ${this.score}`;
        const gameCell = document.querySelector('.content');
        const firstHole = gameCell.firstElementChild;
        gameCell.insertBefore(counterHit, firstHole);
        const holes = document.querySelectorAll('.hole');
        holes.forEach((hole) => {
            holes.addEventListener('onclick', () => {
                if (hole.contains('hole_has-mole')) {
                    this.score ++;
                    console.log(this.score)
                } else {
                    this.miss ++;
                }
            })
        })
    }
}

const newGame = new MoleGame(4);
newGame.creatingField();
newGame.logicHit();
