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

    return introduction;
}

export default creatHome;
