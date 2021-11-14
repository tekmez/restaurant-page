function creatHome(){
    document.body.style.backgroundImage= "url(/dist/İmages/pizzaHome.jpg)";
    const introduction = document.createElement('div');
    introduction.classList.add('introduction');
    
    const h3 = document.createElement('h3');
    h3.innerHTML= 'TRADITIONAL AMERICAN CUISINE';
    introduction.appendChild(h3);

    const h1 = document.createElement('h1');
    h1.innerHTML= 'Fast Food';
    introduction.appendChild(h1);
    
    const home = document.createElement('button');
    home.innerText = 'Home';
    introduction.appendChild(home);

    const menu = document.createElement('button');
    menu.innerText = 'Menu';
    introduction.appendChild(menu);

    const contact = document.createElement('button');
    contact.innerText = 'Contact';
    introduction.appendChild(contact);

    return introduction;
}


export default creatHome;
