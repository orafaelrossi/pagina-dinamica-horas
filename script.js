function carregar(){
    //Declaração de Variáveis recebendo o Elemento pelo ID do Documento HTML.
    var caixa_msg = window.document.getElementById('msg');
    var caixa_hora = window.document.getElementById('hora');
    var img = window.document.getElementById('img');
    
    //Declaração da Variável data para pegar horas, minutos e segundos.
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    //Código que escreve dentro do Documento HTML. 
    caixa_hora.innerHTML = `Agora são ${hora} horas, ${minuto} minutos e ${segundo} segundos.`;

    //Aqui entra a parte das Condicionais.
    if((hora>=0) && (hora<12)){
        //BOM DIA!
        caixa_msg.innerHTML = 'Olá, bom dia!!!'
        img.src = 'foto_manha.png';
        document.body.style.backgroundColor = "yellow";
    }
    else if((hora>=12) && (hora<18)){
        //BOA TARDE!
        caixa_msg.innerHTML = 'Olá, boa tarde!!!'
        img.src = 'foto_tarde.png';
        document.body.style.backgroundColor = "orange";
    }
    else{
        //BOA NOITE!
        caixa_msg.innerHTML = 'Olá, boa noite!!!'
        img.src = 'foto_noite.png';
        document.body.style.backgroundColor = "grey";

    }
}

function boasvindas(){
    window.alert('SEJA BEM-VINDO!!!');

    var n1 = Number(window.prompt('DIGITE UM NÚMERO:')); 
    var n2 = Number(window.prompt('DIGITE OUTRO NÚMERO:'));
    var n3 = n1 + n2; 
    // (Number + Number = ADIÇÃO -> EX: 2 + 2 = 4)
    // (String + String = CONCATENAÇÃO -> EX: 2 + 2 = 22)
    window.alert('A SOMA DE ' + n1 + ' + ' + n2 + ' É = ' + n3);
    window.alert(`A SOMA DE ${n1} + ${n2} = ${n3}`);
}
