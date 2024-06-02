import { NumeroGenerado } from "../../../types/numero-generado";

/**
 * Metodo que convierte a posicion de dados
 * @param {number} cantidadGenerar - Cantidad de dados a generar
 * @returns lista de posicion para los dados
 */
export function numerosGenerados(cantidadGenerar: number) {
  const numeros: number[] = [];
  for (let i = 0; i < cantidadGenerar; i++) {
    numeros.push(Math.floor(Math.random() * 6) + 1);
  }
  return numeros;
}

/**
 * Metodo que cuenta los numeros
 * @param numeros numeros a contar
 * @returns numeros contados
 */
export function contarNumeros(numeros: number[]) {
  const counts: NumeroGenerado[] = [];

  numeros.forEach((num) => {
    const index = counts.findIndex((count) => count.numero === num);
    if (index === -1) {
      counts.push({ numero: num, veces: 1 });
    } else {
      counts[index].veces++;
    }
  });

  return counts;
}

/**
 * Metodo que calcula la moda
 * @param {Array} lista Recibe una lista de metodos
 * @returns moda
 */
export function calcularModa(numeros: number[]) {
  const counts = new Map<number, number>();
  for (const num of numeros) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let maxCount = 0;
  for (const count of counts.values()) {
    maxCount = Math.max(maxCount, count);
  }

  const modes: number[] = [];
  for (const [num, count] of counts.entries()) {
    if (count === maxCount) {
      modes.push(num);
    }
  }

  return modes;
}

/**
 * Metodo que calcula la mediana de un array
 * @param {Array} numeros de numeros que se desea calcular la mediana
 * @returns Mediana
 */
export function calcularMediana(numeros: number[]) {
  const ordenados = numeros.sort((a: number, b: number) => a - b);

  const mitad = ordenados.length / 2;

  if (ordenados.length % 2 === 0) {
    return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
  }

  return ordenados[Math.floor(mitad)];
}

/**
 * Método que calcula la media aritmética de una lista de numeros
 * @param {Array} numeros lista de numeros
 * @returns media aritmética
 */
export function calcularMedia(numeros: number[]) {
  const suma = numeros.reduce((x: number, y: number) => x + y, 0);

  return (suma / numeros.length).toFixed(2);
}
