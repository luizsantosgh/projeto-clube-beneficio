//<script type="text/javascript">
// coloca para digitar telefone número fixo ou celular
    function tipotel(value){

        var teltp = document.getElementsByClassName('mostratelefone');
        var celtp = document.getElementsByClassName('mostracelular');
                    
        if(value == "1"){
            teltp[0].style.display = 'block';
            celtp[0].style.display = 'none';
            document.getElementById("icel").value = "";
            //document.getElementById("idddcel").value = "";
            }
            
        if(value == "2"){
            teltp[0].style.display = 'none';
            celtp[0].style.display = 'block';
            document.getElementById("itel").value = "";
            //document.getElementById("idddtel").value = "";
            }
    }
//</script>
