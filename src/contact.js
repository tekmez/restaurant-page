function creatContact() {
    document.body.style.backgroundImage = "url(/dist/İmages/contact.jpg)";
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const adres = document.createElement('p')
    adres.innerText = 'Where are we: 🌎 We are Everywhere';
    contact.appendChild(adres);

    const phone = document.createElement('p')
    phone.innerHTML = 'Number: 📞 (101)-101-101';
    contact.appendChild(phone);

    const email = document.createElement('p');
    email.innerHTML = 'Email: 📧 pizzas@delicious.com'
    contact.appendChild(email);

    return contact;
}
export default creatContact;