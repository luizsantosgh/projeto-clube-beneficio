//<!-- Busca de CEP - Javascript -->
//campos retornados
//meu_callback({
//    "cep": "99999-999",
//    "logradouro": "Xxxxx Xxxxxx Xxxxxx Xxxxxx",
//    "complemento": "",
//    "bairro": "Xxxxxx",
//    "localidade": "Rio de Janeiro",
//    "uf": "RJ",
//    "ibge": "3304557",
//    "gia": "",
//    "ddd": "21",
//    "siafi": "6001"
//  });
//ou
//meu_callback({
//    "erro": "true"
//  }); 
//   
    function limpa_formulário_cep() {
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
            document.getElementById('gia').value=("");
            document.getElementById('ddd').value=("");
            document.getElementById('siafi').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
            document.getElementById('gia').value=(conteudo.gia);
            document.getElementById('ddd').value=(conteudo.ddd);
            document.getElementById('siafi').value=(conteudo.siafi);
            document.getElementById('inumero').focus;
        }
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {

            var validacep = /^[0-9]{8}$/;

            if(validacep.test(cep)) {

                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";
                document.getElementById('gia').value="...";
                document.getElementById('ddd').value="...";
                document.getElementById('siafi').value="...";
    
                var script = document.createElement('script');

                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                document.body.appendChild(script);

            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    };
