/**
 * @jest-environment jsdom
 */

import createButton from './createButton.js';

describe('create a button element', () => {
    const button = createButton({ id: 'all', text: 'All' });

    test('nodeName -> ', () => {
        expect(button.nodeName).toEqual('BUTTON');
    });

    test('type -> button', () => {
        expect(button.type).toEqual('button');
    });

    test('id -> all', () => {
        expect(button.id).toEqual('all');
    });

    test('className -> filter-btn', () => {
        expect(button.className).toEqual('filter-btn');
    });
});
