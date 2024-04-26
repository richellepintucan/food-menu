import filterMenuItems from '../handlers/filterMenuItems.js';
/**
 * Create a button element.
 *
 * @param {object} btn - The button object data.
 * @returns {HTMLElement} The button element.
 */

const createMenuButton = (btnData) => {
    // create a button
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerText = btnData.text;
    btn.id = btnData.id;
    btn.classList.add('filter-btn');

    // add event to btn
    btn.addEventListener('click', () => {
        const id = btn.id;
        filterMenuItems(id);
    });

    return btn;
};

export default createMenuButton;
