import Generator from './Generator'
import LinearCongruential from '../Interfaces/LinearCongruential'
import RandomGenerator from '../Interfaces/RandomGenerator'
import { HistoryRow } from '../Interfaces/IHistory'
import History from './History'

class LinearCongruentialMethod extends Generator implements LinearCongruential, RandomGenerator{
    
    seen: number[]
    multiplierA: number
    incrementC: number
    modulus: number

    constructor(multiplierA: number, incrementC: number, modulus: number, seed: number, iterations: number){
        super(seed, iterations)
        this.seen = []
        this.multiplierA = multiplierA
        this.incrementC = incrementC
        this.modulus = modulus
    }

    generate():number{
        const seen: Set<number> = new Set()

        let answer: number = this.seed
        let counter: number = 0

        while(counter < this.iterations){
            counter++
            answer = ((this.multiplierA * answer) + this.incrementC) % this.modulus
            seen.add(answer)
        }

        this.seen = Array.from(seen)
        return answer
    }

    history(): Array<HistoryRow> {
        const history: History = new History()
        let answer: number = this.seed
        let counter: number = 0

        while(counter < this.iterations){
            counter++
            
            const newAnswer = ((this.multiplierA * answer) + this.incrementC) % this.modulus
            
            const ri = newAnswer / this.modulus

            const row: HistoryRow = {
                seed: answer,
                generated: newAnswer,
                res: ri,
            }

            history.iterations.push(row)
            answer = newAnswer
        }

        return history.iterations

    }

}

export default LinearCongruentialMethod