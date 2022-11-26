
const btn = document.querySelector('.btn-iniciar');
const txt = document.querySelector('.txt-numero');
function iniciarConversa(){
    const telefone = txt.value;
    const telefone2 = String(telefone).replace(/[^0-9s]/g,'');/*RegExr*/ 
    window.location.href = `https://api.whatsapp.com/send?phone=55${telefone2}`;
    console.log(telefone2);
}
btn.addEventListener('click', iniciarConversa);

function mascara(){
    let qtd = txt.value.length;
    if(qtd === 0){
        txt.value += '(';
    }else if(qtd === 3){
        txt.value += ') ';
    }else if(qtd === 10){
        txt.value += ' - ';
    }
}
txt.addEventListener('keypress', mascara);
