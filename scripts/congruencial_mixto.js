/*
La funcion congruencialMixto toma como argumentos la semilla, a, c y m para generar los números aleatorios y el entero n para saber cuántos generar
Regresa un diccionario con la siguiente estructura:
    respuesta = {
        "numeros": [], // Lista de numeros aleatorios empezando con la semilla y tiene una longitud n
        "numerosRi": [], // Lista de numeros aleatorios con valores entre 0 y 1 empezando con la semillla y tiene una longitud n
        "tienePeriodo": true, // Booleano que indica si el generador tiene periodo (true) o no (false)
        "codigo": 200 // entero que denomina si pasaron todas las validaciones (200) o no (400)
    }

*/
function congruencialMixto(semilla, a, c, m, n){
    resultado = {};
    listaNumeros = [semilla];
    numerosRi = []
    codigo = 400;
    tienePeriodo = true;
    
    if(Number.isInteger(semilla) && Number.isInteger(a) && Number.isInteger(c) && Number.isInteger(m) && Number.isInteger(n)){
        codigo = 200;
        
        cDivisores = getDivisores(c);
        mDivisores = getDivisores(m);
        for(cDivisor in cDivisores){  //Checa si c y m tienen divisores comunes mayores a 1
            if(mDivisores.includes(cDivisor)){
                tienePeriodo = false;
                break;
            }
        }

        if(tienePeriodo){
            divisoresPrimos = getDivisoresPrimos(m);
            for(divisor in divisoresPrimos){
                if((a-1) % divisor != 0){
                    tienePeriodo = false;
                    break;
                }
            }
        }

        if(m % 4 == 0 && (a-1) % 4 != 0) tienePeriodo = false;

        for(i = 0; i < n; i++){
            nuevoNumero = (listaNumeros[n] * a + c) % m;
            listaNumeros.push(nuevoNumero)
        }

        for(numero in listaNumeros){
            numerosRi.push(numero/m);
        }
    }

    resultado["numeros"] = listaNumeros;
    resultado["numerosRi"] = numerosRi;
    resultado["tienePeriodo"] = tienePeriodo;
    resultado["codigo"] = codigo;
    return resultado;
}

/*
La función getDivisores toma como argumento un número natural y regresa un arreglo con todos sus divisores. NOTA: eficiencia O(n)
*/
function getDivisores(n){
    resultado = []
    for(i = 2; i <= n; i++) if(n % i == 0) resultado.push(i);
    return resultado;
}

/*
La función getDivisoresPrimos toma como argumento un número natural y regresa un arreglo con todos sus divisores primos
*/
function getDivisoresPrimos(n){
    resultado = []
    for(i = 2; i <= n; i++) if(n % i == 0 && esPrimo(i)) resultado.push(i);
    return resultado;
}

/*
La función esPrimo toma como argumento un número natural y regresa un booleano que indica si es primo (true) o no (false)
*/
function esPrimo(n){
    for(var i = 2; i < num; i++) if(num % i == 0) return false;
    return num > 1;
}
