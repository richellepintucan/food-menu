/**
 * @jest-environment jsdom
 */

import createMenuItem from './createMenuItem.js';

describe('create an item element', () => {
    const item = createMenuItem({
        id: 1,
        title: 'buttermilk pancakes',
        category: 'breakfast',
        price: 14.99,
        src: './assets/item-1.jpeg',
        desc: 'Perfect, golden pancakes. Carefully perfected to yield fat, fluffy, and super flavorful pancakes (the cousin to paper-thin crepes',
    });

    test('nodeName => ARTICLE', () => {
        expect(item.nodeName).toEqual('ARTICLE');
    });

    test('className => menu-item breakfast', () => {
        expect(item.className).toEqual('menu-item breakfast');
    });

    test('childElementCount => 2', () => {
        expect(item.childElementCount).toEqual(2);
    });
});
