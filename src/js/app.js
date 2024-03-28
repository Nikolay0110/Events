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
        this.logicHit();
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
            holes[rand].classList.add('hole_has-mole');
        }, 1000);
    }

    gameOver() {
        alert('Вы проиграли, попробуйте еще раз!');
        this.miss = 0;
        const counterMiss = document.getElementsByClassName('miss');
        counterMiss.textContent = `Количество промахов: ${this.miss}`;
        this.score = 0;
        const counterHit = document.getElementsByClassName('hit');
        counterHit.textContent = `Количество попаданий: ${this.score}`;
        this.pass = 0;
    }

    logicHit() {
        const gameCell = document.querySelector('.content');
        const firstHole = gameCell.firstElementChild;
        const holes = document.querySelectorAll('.hole');

        const counterHit = document.createElement('div');
        counterHit.classList.add('hit');
        counterHit.textContent = `Количество попаданий: ${this.score}`;
        gameCell.insertBefore(counterHit, firstHole);

        const counterMiss = document.createElement('div');
        counterMiss.classList.add('miss');
        counterMiss.textContent = `Количество промахов: ${this.miss}`;
        gameCell.insertBefore(counterMiss, firstHole);

        let pass = 0;
        setInterval(() => {
            pass ++;
            console.log(pass);
        }, 1000);

        if (pass == 5) {
            alert('Вы проиграли, попробуйте еще раз!');
            this.miss = 0;
            counterMiss.textContent = `Количество промахов: ${this.miss}`;
            this.score = 0;
            counterHit.textContent = `Количество попаданий: ${this.score}`;
            pass = 0;
        } else {
            holes.forEach((hole) => {
                hole.addEventListener('click', () => {
                    if (this.miss < 4 && pass < 4) {
                        if (hole.classList.contains('hole_has-mole')) {
                            this.score ++;
                            counterHit.textContent = `Количество попаданий: ${this.score}`;
                            pass = 0;
                        } else {
                            this.miss ++;
                            counterMiss.textContent = `Количество промахов: ${this.miss}`;
                            pass = 0;
                        }
                    } else {
                        alert('Вы проиграли, попробуйте еще раз!');
                        this.miss = 0;
                        counterMiss.textContent = `Количество промахов: ${this.miss}`;
                        this.score = 0;
                        counterHit.textContent = `Количество попаданий: ${this.score}`;
                        pass = 0;
                    }
                })
            })
        }
    }
}
