import creatHome from "./home";
import creatMenu from "./menu";
import buttons from "./nav";
import creatContact from "./contact";

document.body.appendChild(buttons());
const content = document.getElementById('content');
content.appendChild(creatHome());

function loadPage(e) {
    if(e.target.id === 'btn-menu') {
        content.innerHTML = '';
        content.appendChild(creatMenu());
    } 
    else if(e.target.id === 'btn-contact'){
        content.innerHTML = '';
        content.appendChild(creatContact());
    }
    else if(e.target.id === 'btn-home'){
        content.innerHTML = '';
        content.appendChild(creatHome());
    }
}
document.addEventListener('click', loadPage);