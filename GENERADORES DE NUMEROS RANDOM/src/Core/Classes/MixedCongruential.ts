import Generator from './Generator'
import MixedCongruential from '../Interfaces/MixedCongruential'
import RandomGenerator from '../Interfaces/RandomGenerator'
import { HistoryRow } from '../Interfaces/IHistory'
import History from './History'

class MixedCongruentialMethod extends Generator implements MixedCongruential, RandomGenerator{
    
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

    isPeriod(): string{
        let cDivisors: number[] = this.getDivisors(this.incrementC);
        let mDivisors: number[] = this.getDivisors(this.modulus);
        for(let i = 1; i < cDivisors.length; i++){  //Checa si c y m tienen divisores comunes mayores a 1
            if(mDivisors.includes(cDivisors[i])){
                return "No se cumple el teorema de Hull Dobell porque C y M tienen divisor común " + cDivisors[i]
            }
        }

        if(this.hasPeriod){
            let primeDivisors = this.getPrimeDivisors(this.modulus);
            for(let i = 0; i < primeDivisors.length; i++){
                if((this.multiplierA-1) % primeDivisors[i] != 0){
                    return "No se cumple el teorema de Hull Dobell porque " + primeDivisors[i] + " es un divisor primo de M que no divide a (A-1)"
                }
            }
        }

        if(this.modulus % 4 == 0 && (this.multiplierA-1) % 4 != 0) return "No se cumple el teorema de Hull Dobell porque 4 divide a M pero no a (A-1)";
        return "Pasa el teorema de Hull Dobell"
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

export default MixedCongruentialMethod