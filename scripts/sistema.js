class Sistema{
    numero_conta = 1;
    contas = new Array();

    apareceCriar(){
        var con_cadastro = document.getElementById("cadastro");
        con_cadastro.style.display = "block";
        document.getElementById("n_conta").innerText = "O número da conta será:  " + this.numero_conta;
    }

    criarConta(){
        
            var ent_nome = document.getElementById("nome").value;
            var ent_tipo = document.querySelector('input[name="tipo"]:checked').value;
            
            if (ent_tipo == "platinum") {
              var obje = new Platinum(this.numero_conta, ent_nome, 0);
              this.contas.unshift(obje);
            } else if(ent_tipo == "basico"){
                var obje = new Basico(this.numero_conta, ent_nome, 0);
                this.contas.unshift(obje);
            }else{
                var obje = new estudante(this.numero_conta, ent_nome, 0);
                this.contas.unshift(obje);
            }
            
        var con_cadastro = document.getElementById("cadastro");
        con_cadastro.style.display = "none";
        document.getElementById("form").reset();
        this.numero_conta++;
     
    }
    
    alterna(){
        var con_ger = document.getElementById("op_gerente");
        var con_cli = document.getElementById("op_cliente");

        if (con_ger.style.display === "none") {
          con_ger.style.display = "block";
          con_cli.style.display = "none";
        } else {
          con_ger.style.display = "none";
          con_cli.style.display = "block";
        }
    }
}
sis = new Sistema();