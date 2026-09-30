const login = document.getElementById('login');
const modal = document.getElementById('modal');
const fechar = document.getElementById('fechar');


function openModal() {
    
    modal.classList.add('modal');
    modal.classList.remove('hidden');
   
}

function closeModal() {
    modal.classList.remove('modal');
    modal.classList.add('hidden');
};


login.addEventListener('click', () => {
    openModal('login');
});



fechar.addEventListener('click', () => {
    
closeModal();
});



