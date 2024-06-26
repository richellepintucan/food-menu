import data from '../data.js';
import dom from '../dom.js';
import createMenuItem from '../components/createMenuItem.js';
import createMenuButton from '../components/createMenuButton.js';

const loadHandler = () => {
    // show the item by default
    data.menu.forEach((itemData) => {
        const itemDom = createMenuItem(itemData);
        dom.menuItems.append(itemDom);
    });

    // show buttons
    data.buttons.forEach((btnData) => {
        const btnDom = createMenuButton(btnData);
        dom.btnContainer.append(btnDom);
    });
};

export default loadHandler;
