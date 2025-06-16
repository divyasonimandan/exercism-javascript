// @ts-check

/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
export function getItem(cards, position) {
	return cards[position];
}
const cards = [1, 2, 4, 1];
const position = 2;
console.log(getItem(cards, position));

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */

export function setItem(cards, position, replacementCard) {
	cards[position] = replacementCard;
	return cards;
}

const replacementCard = 6;
console.log(setItem([1, 2, 4, 1], position, replacementCard));

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
export function insertItemAtTop(cards, newCard) {
	cards.push(newCard);
	return cards;
}

const newCard = 8;
console.log(insertItemAtTop([5, 9, 7, 1], newCard));
/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItem(cards, position) {
	cards.splice(position, 1);
	return cards;
}

console.log(removeItem([3, 2, 6, 4, 8], position));
/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemFromTop(cards) {
	cards.pop();
	return cards;
}
console.log(removeItemFromTop([3, 2, 6, 4, 8]));
/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
export function insertItemAtBottom(cards, newCard) {
	cards.unshift(newCard);
	return cards;
}

console.log(insertItemAtBottom([5, 9, 7, 1], newCard));

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
export function removeItemAtBottom(cards) {
	cards.shift();
	return cards;
}

console.log(removeItemAtBottom([8, 5, 9, 7, 1]));

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
export function checkSizeOfStack(cards, stackSize) {
	if (cards.length === stackSize) {
		return true;
	} else {
		return false;
	}
}

const stackSize = 4;
console.log(checkSizeOfStack([3, 2, 6, 4, 8], stackSize));
