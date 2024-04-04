export default class MoleGame {
    constructor(fieldSize) {
        this.fieldSize = fieldSize ** 2
        this.score = 0;
        this.miss = 0;
        this.pass = 0;
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

    randomHole() {
        this.pass = 0; // Инициализируем счетчик
        this.prevHole = null; // Инициализируем предыдущий элемент
        setInterval(() => {
            this.pass++;
            console.log(this.pass);
            const holes = document.querySelectorAll('.hole');
            const activeCell = 'hole_has-mole';
    
            // Удаляем класс у предыдущего элемента, если он существует
            if (this.prevHole) {
                this.prevHole.classList.remove(activeCell);
            }
    
            // Генерируем случайный индекс
            this.rand = Math.floor(Math.random() * holes.length);
    
            // Получаем случайный элемент и добавляем класс
            this.prevHole = holes[this.rand];
            this.prevHole.classList.add(activeCell);

            if (this.pass === 5) {
                this.gameOver();
            }
        }, 1000);
    }

    gameOver() {
        this.miss = 0;
        const passMiss = document.querySelector('.miss');
        passMiss.innerText = `Количество промахов: ${this.miss}`;
        this.score = 0;
        const passHit = document.querySelector('.hit');
        passHit.innerText = `Количество попаданий: ${this.score}`;
        this.pass = 0;
        alert('Вы проиграли, попробуйте еще раз!');
    }

    logicHit() {
        const gameCell = document.querySelector('.content');
        const firstHole = gameCell.firstElementChild;
        const holes = document.querySelectorAll('.hole');

        const passHit = document.createElement('div');
        passHit.classList.add('hit');
        passHit.textContent = `Количество попаданий: ${this.score}`;
        gameCell.insertBefore(passHit, firstHole);

        const passMiss = document.createElement('div');
        passMiss.classList.add('miss');
        passMiss.textContent = `Количество промахов: ${this.miss}`;
        gameCell.insertBefore(passMiss, firstHole);

        holes.forEach((hole) => {
            hole.addEventListener('click', () => {
                if (this.miss === 5) {
                    this.gameOver(); 
                } else {
                    if (hole.classList.contains('hole_has-mole')) {
                        this.score ++;
                        passHit.textContent = `Количество попаданий: ${this.score}`;
                        this.pass = 0;
                    } else {
                        this.miss ++;
                        passMiss.textContent = `Количество промахов: ${this.miss}`;
                        this.pass = 0;
                    }
                }
            })
        })      
    }
}
