
const btn = document.querySelector('.btn-iniciar');
function iniciarConversa(){
    const txt = document.querySelector('.txt-numero');
    const telefone = txt.value;
    window.location.href = `https://api.whatsapp.com/send?phone=55${telefone}`;
    console.log(telefone);
}
btn.addEventListener('click', iniciarConversa);