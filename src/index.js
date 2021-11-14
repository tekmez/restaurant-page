import creatHome from "./home";
import creatMenu from "./menu";

const content = document.getElementById('content');
content.appendChild(creatHome());

content.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(creatMenu());
});