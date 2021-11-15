function buttons(){
    const buttons = document.createElement('div');
    buttons.classList.add('btn-nav');
    
    const home = document.createElement('button');
    home.setAttribute('id', 'btn-home');
    home.innerText = 'Home';
    buttons.appendChild(home);

    const menu = document.createElement('button');
    menu.setAttribute('id', 'btn-menu');
    menu.innerText = 'Menu';
    buttons.appendChild(menu);

    const contact = document.createElement('button');
    contact.setAttribute('id', 'btn-contact');
    contact.innerText = 'Contact';
    buttons.appendChild(contact);
    
    return buttons;
}

export default buttons;