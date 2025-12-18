// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber) {
        this.name = name;
        this.position = position;
        this.jerseyNumber = jerseyNumber;
    }
}

class Team {
    #starters = [];
    #bench = [];

    constructor(name) {
        this.name = name;
    }

    getStarters() {
        return this.#starters;
    }

    getBench() {
        return this.#bench;
    }

    addBenchPlayer(player) {
        this.#bench.push(player);
    }

    getPlayerCount() {
        return this.#bench.length + this.#starters.length;
    }

    moveToBench(name) {
        const player = this.#starters.findIndex((starter) => starter.name === name);
        if (player != -1) {
            const removed = this.#starters.splice(player,1);
            this.#bench.push(removed[0]);
            return true;
        }
        return false;
    }

    moveToStarters(name) {
        const player = this.#bench.findIndex((bench) => bench.name === name);
        if (player != -1) {
            const removed = this.#bench.splice(player,1);
            this.#starters.push(removed[0]);
            return true;
        }
        return false;
    }
}

module.exports = { Player, Team };

