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
              this.contas.push(obje);
            } else if(ent_tipo == "basico"){
                var obje = new Basica(this.numero_conta, ent_nome, 0);
                this.contas.push(obje);
            }else{
                var obje = new Estudante(this.numero_conta, ent_nome, 0);
                this.contas.push(obje);
            }
            
        var con_cadastro = document.getElementById("cadastro");
        con_cadastro.style.display = "none";
        document.getElementById("form").reset();
        this.numero_conta++;
     
    }

    listaContas(){
        var container = document.getElementById("corp_list");

        if (container.style.display === "block") {
          container.style.display = "none";
        } else {
          container.style.display = "block";
        }

        document.getElementById("list_contas").innerText = "";
        for(let i=0;i<this.contas.length;i++){
            var listcon = document.getElementById("list_contas").innerText;
            document.getElementById("list_contas").innerText = listcon + this.contas[i].num + this.contas[i].nome + '\n';
        }
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