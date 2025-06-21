// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
	let totalBirds = 0;
	for (let i = 0; i < birdsPerDay.length; i++) {
		totalBirds = totalBirds + birdsPerDay[i];
	}
	return totalBirds;
}

const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount(birdsPerDay));

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
	const startIndex = (week - 1) * 7;
	const endIndex = week * 7;

	let total = 0;

	for (let i = startIndex; i < endIndex; i++) {
		total = total + birdsPerDay[i];
	}
	return total;
}

console.log(birdsInWeek(birdsPerDay, 2));

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
	for (let i = 0; i < birdsPerDay.length; i += 2) {
		birdsPerDay[i] += 1;
	}
}
console.log(fixBirdCountLog(birdsPerDay));
console.log(birdsPerDay);
