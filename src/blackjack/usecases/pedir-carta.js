/**
 * Regresa una carta de un deck y la elimina del mismo
 * @param {Array<String>} deck Arreglo de string
 * @returns {String} La carta seleccionada del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}