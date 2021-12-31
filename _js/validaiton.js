
var $btnEntrar = document.getElementById('btnEntrar')


$btnEntrar.addEventListener('click', (e)=>{
    e.preventDefault()
    var $labelName = document.querySelector('#labelName');
    var $labelSenha = document.querySelector('#labelSenha')
    var $cxUser = document.querySelector('#cxUser');
    var $cxPass = document.getElementById('cxPass');

    if ($cxUser.value =="") {
        $labelName.classList.add("card__erro");       
    }
    if ($cxPass.value =="") {
        $labelSenha.classList.add("card__erro");        
    }
});




