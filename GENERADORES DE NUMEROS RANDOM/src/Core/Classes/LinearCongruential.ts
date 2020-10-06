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
    hasPeriod: boolean

    constructor(multiplierA: number, incrementC: number, modulus: number, seed: number, iterations: number){
        super(seed, iterations)
        this.seen = []
        this.multiplierA = multiplierA
        this.incrementC = incrementC
        this.modulus = modulus
        this.hasPeriod = true;
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

    isPeriod(): boolean{
        let cDivisors: number[] = this.getDivisors(this.incrementC);
        let mDivisors: number[] = this.getDivisors(this.modulus);
        for(let i = 0; i < cDivisors.length; i++){  //Checa si c y m tienen divisores comunes mayores a 1
            if(mDivisors.includes(cDivisors[i])){
                this.hasPeriod = false;
                break;
            }
        }

        if(this.hasPeriod){
            let primeDivisors = this.getPrimeDivisors(this.modulus);
            for(let i = 0; i < primeDivisors.length; i++){
                if((this.multiplierA-1) % primeDivisors[i] != 0){
                    this.hasPeriod = false;
                    break;
                }
            }
        }

        if(this.modulus % 4 == 0 && (this.multiplierA-1) % 4 != 0) this.hasPeriod = false;
        return true
    }

    getDivisors(n: number): number[]{
        let resDivisors: number[] = []
        for (let i = 0; i < n; i++) {
            if(n % i == 0) resDivisors.push(i)
        }
        return resDivisors
    }

    getPrimeDivisors(n: number): number[]{
        let resPrimes: number[] = []
        for(let i = 2; i <= n; i++) if(n % i == 0 && this.isPrime(i)) resPrimes.push(i);
        return resPrimes;
    }

    isPrime(n: number): boolean{
        for(let i = 2; i < n; i++) if(n % i == 0) return false;
        return n > 1;
    }

}

export default LinearCongruentialMethod