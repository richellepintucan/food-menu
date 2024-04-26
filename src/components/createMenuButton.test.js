/**
 * @jest-environment jsdom
 */

import createMenuButton from './createMenuButton.js';

describe('create a button element', () => {
    const button = createMenuButton({ id: 'all', text: 'All' });

    test('nodeName', () => {
        expect(button.nodeName).toEqual('BUTTON');
    });

    test('id => all', () => {
        expect(button.id).toEqual('all');
    });

    test('class name => filter-btn', () => {
        expect(button.className).toEqual('filter-btn');
    });

    test('type => button', () => {
        expect(button.type).toEqual('button');
    });

    test('innerText => All', () => {
        expect(button.innerText).toEqual('All');
    });
});
