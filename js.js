const attr = {
    href: '#',
    src: '/link'
}




function createElement(tag, className, attr = {}, content = []) {
    const el = document.createElement(tag);
    el.classList.add(...className);
    for (const [key, value] of Object.entries(attr)) {
        el[key] = value;
    }
    content.forEach((current) => el.append(current));

    return el;
}
const logoRight = createElement('span', ['logo_right'], {}, ['CAR']);
const logoLeft = createElement('span', ['logo_left'], {} , ['Premium']);
const logo = createElement('a', ['logo'], { href: '#' }, [logoRight, logoLeft]);
const menuItem = createElement('div', ['menu__item'], {}, [logo]);


// const logoRight = 

console.log(menuItem);

const menu = document.querySelector('.menu')
