var dadosCliente = {

    endereco : {

    },
    contato: {

    }
};

function validarFormulario(){
    // gerar objeto endereco baseado nos dados do formulário

    event.preventDefault();

    objEndereco = {
        pais: document.getElementById('selection_country').value,
        cidade: document.getElementById('selection_city').value,
        estado: document.getElementById('state').value,
        endereco1: document.getElementById('ad1').value,
        endereco2: document.getElementById('ad2').value,
    };

    validarEndereco(objEndereco);
    //console.log( objEndereco);
}

function validarEndereco(){
    //validar se os campos estão preenchidos
}
    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);
    // gerar objeto contato
}

