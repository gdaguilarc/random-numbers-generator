import FitTest from "./FitTest";
import ISquaredChi from "../Interfaces/ISquaredChi";

class SquaredChi
  extends FitTest
  implements ISquaredChi {
  seen: number[];
  alpha: number;
  table: number[][]

  constructor(
    seen: number[],
    alpha: number,
  ) {
    super(seen, alpha);
    this.seen = seen
    this.alpha = alpha
    this.table = [
        [2.7055, 3.8415, 5.0239,6.6349,7.8794,10.8276],
        [4.6052,5.9915,7.3778,9.2103,10.5966,13.8155],
        [6.2514,7.8147,9.3484,11.3449,12.8382,16.2662],
        [7.7794,9.4877,11.1433,13.2767,14.8603,18.4668],
        [9.2364,11.0705,12.8325,15.0863,16.7496,20.5150],
        [10.6446,12.5916,14.4494,16.8119,18.5476,22.4577],
        [12.0170,14.0671,16.0128,18.4753,20.2777,24.3219],
        [13.3616,15.5073,17.5345,20.0902,21.9550,26.1245],
        [14.6837,16.9190,19.0228,21.6660,23.5893,27.8772],
        [15.9872,18.3070,20.4832,23.2093,25.1882,29.5883],
        [17.2750,19.6751,21.9200,24.7250,26.7568,31.2641],
        [18.5493,21.0261,23.3367,26.2170,28.2995,32.9095],
        [19.8119,22.3620,24.7356,27.6882,29.8195,34.5282],
        [21.0641,23.6848,26.1189,29.1412,31.3193,36.1233],
        [22.3071,24.9958,27.4884,30.5779,32.8013,37.6973],
        [23.5418,26.2962,28.8454,31.9999,34.2672,39.2524],
        [24.7690,27.5871,30.1910,33.4087,35.7185,40.7902],
        [25.9894,28.8693,31.5264,34.8053,37.1564,42.3124],
        [27.2036,30.1435,32.8523,36.1909,38.5823,43.8202],
        [28.4120,31.4104,34.1696,37.5662,39.9968,45.3147],
        [29.6151,32.6706,35.4789,38.9322,41.4011,46.7970],
        [30.8133,33.9244,36.7807,40.2894,42.7957,48.2679],
        [32.0069,35.1725,38.0756,41.6384,44.1813,49.7282],
        [33.1962,36.4150,39.3641,42.9798,45.5585,51.1786],
        [34.3816,37.6525,40.6465,44.3141,46.9279,52.6197],
        [35.5632,38.8851,41.9232,45.6417,48.2899,54.0520],
        [36.7412,40.1133,43.1945,46.9629,49.6449,55.4760],
        [37.9159,41.3371,44.4608,48.2782,50.9934,56.8923],
        [39.0875,42.5570,45.7223,49.5879,52.3356,58.3012],
        [40.2560,43.7730,46.9792,50.8922,53.6720,59.7031],
        [51.8051,55.7585,59.3417,63.6907,66.7660,73.4020],
        [63.1671,67.5048,71.4202,76.1539,79.4900,86.6608],
        [74.3970,79.0819,83.2977,88.3794,91.9517,99.6072],
        [85.5270,90.5312,95.0232,100.4252,104.2149,112.3169],
        [96.5782,101.8795,106.6286,112.3288,116.3211,124.8392],
        [107.5650,113.1453,118.1359,124.1163,128.2989,137.2084]
    ]
  }

  test(): string {
    var alphaIndex: number;
    if(this.alpha == .1){
        alphaIndex = 0
    }
    else if(this.alpha == .05){
        alphaIndex = 1
    }
    else if(this.alpha == .025){
        alphaIndex = 2
    }
    else if(this.alpha == .01){
        alphaIndex = 3
    }
    else if(this.alpha == .005){
        alphaIndex = 4
    }
    else if(this.alpha == .001){
        alphaIndex = 5
    }
    else{
        return "Alfa inválida"
    }
    this.seen.sort(function(a, b){return a - b});
    var len: number = this.seen.length
    var range: number = this.seen[len - 1];
    var k: number = Math.floor(1 + 3.322 * Math.log(len));
    var classRange: number = range / k;

    var seenClasses: number[][] = [];
    var seenClass: number[] = [];
    var counter: number = 1;

    // Divides seen into the class ranges
    for(var i: number = 0; i < len; i++){
        if(this.seen[i] <= classRange * counter) seenClass.push(this.seen[i]);
        else{
            seenClasses.push(seenClass);
            counter++;
            seenClass = [this.seen[i]];
        }
    }
    var up: number[];
    var down: number[];
    var madeChange: boolean = true;

    // redistributes seenClasses so none of the subarrays are less than 5 in length
    while(madeChange){
        madeChange = false;
        for(var i: number = 0; i < seenClasses.length; i++){
            if(seenClasses[i].length < 5){
                madeChange = true;
                var newSeenClasses: number[][];
                // Dont look up:
                if(i == 0){
                    newSeenClasses = seenClasses.slice(0, i);
                    newSeenClasses.push(seenClasses[i].concat(seenClasses[i+1]));
                    newSeenClasses.concat(seenClasses.slice(i+2, seenClasses.length))
                    seenClasses = newSeenClasses;
                    break;
                }
                // Dont look down:
                else if(i == seenClasses.length - 1){
                    newSeenClasses = seenClasses.slice(0, i-1);
                    newSeenClasses.push(seenClasses[i-1].concat(seenClasses[i]));
                    newSeenClasses.concat(seenClasses.slice(i+1, seenClasses.length))
                    seenClasses = newSeenClasses;
                    break;
                }
                // Look both ways:
                else{
                    up = seenClasses[i-1];
                    down = seenClasses[i+1];
                    if(up.length >= down.length){
                        newSeenClasses = seenClasses.slice(0, i);
                        newSeenClasses.push(seenClasses[i].concat(seenClasses[i+1]));
                        newSeenClasses.concat(seenClasses.slice(i+2, seenClasses.length))
                        seenClasses = newSeenClasses;
                        break;
                    }
                    else{
                        newSeenClasses = seenClasses.slice(0, i-1);
                        newSeenClasses.push(seenClasses[i-1].concat(seenClasses[i]));
                        newSeenClasses.concat(seenClasses.slice(i+1, seenClasses.length))
                        seenClasses = newSeenClasses;
                        break;
                    }
                }
            }
        }
    }

    counter = 1;
    var newClassCutoffs: number[] = [];
    for(var i: number = 0; i < seenClasses.length; i++){
        seenClass = seenClasses[i];
        while(seenClass[seenClass.length - 1] > counter * classRange){
            counter++;
        }
        newClassCutoffs.push(counter * classRange);
        counter++;
    }

    var FOi: number[] = [];
    var FEi: number[] = [];
    var squared: number[] = [];
    for(var i: number = 0; i < seenClasses.length; i++){
        FOi.push(seenClasses[i].length)
        if(i == 0){
            FEi.push(len * newClassCutoffs[i]);
        }
        else{
            FEi.push(len * (newClassCutoffs[i] - newClassCutoffs[i-1]));
        }
        squared.push((FOi[i] - FEi[i]) ** 2 / FEi[i])
        
    }
    var X0: number = squared.reduce((a, b) => a + b, 0)
    var Xva: number = this.table[newClassCutoffs.length][alphaIndex]
    if(X0 < Xva){
        return "X0 = " + X0 + ", Xva = " + Xva + ". Se acepta la hipótesis porque X0 < Xva"
    }
    else{
        return "X0 = " + X0 + ", Xva = " + Xva + ". Se rechaza la hipótesis porque X0 > Xva"
    }
  }
}

export default SquaredChi;
