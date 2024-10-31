/**
 *  Chỉ số
 * HP: máu
 * Attack(atk): chỉ số tấn công
 * Defense: chỉ số phòng thủ
 * Speed: chỉ số tốc độ
 * Counter Attack: tỉ lệ phản công
 * 
 *  Chiêu thức
 * Attack: tấn công
 * Counter Attack: phản công ngay sau khi bị tấn công
 */

function Blueprint(name, hp, atk, defense, speed, counterRate) {
    this.name = name;
    this.hp = hp;
    this.atk = atk;
    this.defense = defense;
    this.speed = speed;
    this.counterRate = counterRate;

    this.attack = (target) => {
        const damage = Math.max(this.atk - target.defense, 0);
        target.hp -= damage;
 
        console.log(`%c${this.name}%c đã tấn công %c${target.name}%c gây %c${damage}%c sát thương, %c${target.name}%c còn lại %c${target.hp}%c máu.`,
            "color: green", "",
            "color: green", "",
            "color: orange", "",
            "color: green", "",
            "color: red", ""
        );
 
        if(target.isAlive() && Math.random() < target.counterRate) {
            const counterDamage = Math.max(target.atk - this.defense, 0);
            this.hp -= counterDamage;

            console.log(`%c${target.name}%c đã phản đòn lên %c${this.name}%c gây %c${counterDamage}%c sát thương, %c${this.name}%c còn lại %c${this.hp}%c máu.`,
                "color: green", "",
                "color: green", "",
                "color: orange", "",
                "color: green", "",
                "color: red", ""
            )
        }
    }

    this.isAlive = () => {
        return this.hp > 0;
    }
}

function battleRound(attacker, defender) {
    attacker.attack(defender);

    if(defender.isAlive() && attacker.isAlive()) {
        defender.attack(defender);
    }
}

function battle(player1, player2) {
    let round = 1;

    while(player1.isAlive() && player2.isAlive()) {
        console.log(`Round: %c${round}`, "color: red; font-weight: bold;");

        if(player1.speed > player2.speed) {
            battleRound(player1, player2);
        } else if(player1 < player2.speed) {
            battleRound(player2, player1);
        } else {
            if(Math.random() < 0.5) {
                battleRound(player1, player2);
            } else {
                battleRound(player2, player1);
            }
        }
        round++;
    }

    player1.isAlive ? console.log(`%c${player1.name}%c thắng!`, "color: green", "") : console.log(`%c${player1.name}%c thắng!`, "color: green", "");

}

let cubi = new Blueprint("cubi", 1000, 50, 20, 30, 0.7);
let phuc = new Blueprint("phugnuc", 800, 40, 10, 20, 0.5);

battle(cubi, phuc);
