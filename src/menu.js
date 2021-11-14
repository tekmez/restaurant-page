function creatMenu(){
    document.body.style.backgroundImage= "url(/dist/İmages/menu.jpg)"
    const menu = document.createElement('div');
    menu.classList.add('menu');

    // VGETARİAN
    const vegetarian = document.createElement('div');
    vegetarian.classList.add('vegetarian');
    menu.appendChild(vegetarian);

    const vh3 = document.createElement('h3');
    vh3.innerHTML= 'Vegetarian';
    vegetarian.appendChild(vh3);
    const vp = document.createElement('p');
    vp.innerHTML= 'Cucumber, Lettuce, Tomatoes, Mushroom, Onions, Red and Green Bell, Black Olives';
    vegetarian.appendChild(vp);
    // CHİCKEN GARLİC
    const chicken = document.createElement('div');
    chicken.classList.add('chicken');
    menu.appendChild(chicken);

    const ch3 = document.createElement('h3');
    ch3.innerHTML= 'Chicken Garlic';
    chicken.appendChild(ch3);
    const cp = document.createElement('p');
    cp.innerHTML = 'Chicken Hot Dog sliced, Chicken minced, Tomatoes, Onions';
    chicken.appendChild(cp);
    // BEEF GARLİC
    const beef = document.createElement('div');
    beef.classList.add('beef');
    menu.appendChild(beef);

    const bh3 = document.createElement('h3');
    bh3.innerHTML = 'Beef Garlic';
    beef.appendChild(bh3);
    const bp = document.createElement('p');
    bp.innerHTML = 'Beef Hot Dog sliced, Beef minced, Tomatoes, Onions';
    beef.appendChild(bp);
    // ALL PEPPERONİ
    const pepperoni = document.createElement('div');
    pepperoni.classList.add('pepperoni');
    menu.appendChild(pepperoni);

    const ah3 = document.createElement('h3');
    ah3.innerHTML = 'All Pepperoni';
    pepperoni.appendChild(ah3);
    const ap = document.createElement('p');
    ap.innerHTML = 'All Pepperoni with Hot and Spicy sauce';
    pepperoni.appendChild(ap);

    return menu;
}

export default creatMenu;