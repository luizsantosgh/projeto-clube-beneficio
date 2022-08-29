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
            document.getElementById('ibclogradouro').value=("");
            document.getElementById('ibcbairro').value=("");
            document.getElementById('ibccidade').value=("");
            document.getElementById('ibcuf').value=("");
            //document.getElementById('ibcibge').value=("");
            //document.getElementById('ibcgia').value=("");
            //document.getElementById('ibcddd').value=("");
            //document.getElementById('ibcsiafi').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            document.getElementById('ibclogradouro').value=(conteudo.logradouro);
            document.getElementById('ibcbairro').value=(conteudo.bairro);
            document.getElementById('ibccidade').value=(conteudo.localidade);
            document.getElementById('ibcuf').value=(conteudo.uf);
            //document.getElementById('ibcibge').value=(conteudo.ibge);
            //document.getElementById('ibcgia').value=(conteudo.gia);
            //document.getElementById('ibcddd').value=(conteudo.ddd);
            //document.getElementById('ibcsiafi').value=(conteudo.siafi);
            document.getElementById('ibcnumero').focus;
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

                document.getElementById('ibclogradouro').value="...";
                document.getElementById('ibcbairro').value="...";
                document.getElementById('ibccidade').value="...";
                document.getElementById('ibcuf').value="...";
                //document.getElementById('ibcibge').value="...";
                //document.getElementById('ibcgia').value="...";
                //document.getElementById('ibcddd').value="...";
                //document.getElementById('ibcsiafi').value="...";
    
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
