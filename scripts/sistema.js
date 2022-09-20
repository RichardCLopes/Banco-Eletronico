class Sistema {
  numero_conta = 1;
  contas = new Array();

  apareceCriar() {
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "block";
    document.getElementById("n_conta").innerText =
      "O número da conta será:  " + this.numero_conta;
  }

  apareceTransferencia() {
    var con_cadastro = document.getElementById("transferir");
    con_cadastro.style.display = "block";
  }

  criarConta() {
    var ent_nome = document.getElementById("nome").value;
    var ent_tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (ent_tipo == "platinum") {
      var obje = new Platinum(this.numero_conta, ent_nome, 0);
      this.contas.unshift(obje);
    } else if (ent_tipo == "basico") {
      var obje = new Basica(this.numero_conta, ent_nome, 0);
      this.contas.unshift(obje);
    } else {
      var obje = new Estudante(this.numero_conta, ent_nome, 0);
      this.contas.unshift(obje);
    }

    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
    document.getElementById("form").reset();
    this.numero_conta++;
  }

  listaContas() {
    var container = document.getElementById("corp_list");

    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }

    var table = document.getElementById("tabela");
    for (var i = table.rows.length - 1; i > 0; i--) {
      table.deleteRow(i);
    }

    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i] instanceof Platinum) {
        var tipo = "Platinum";
      } else if (this.contas[i] instanceof Basica) {
        var tipo = "Básico";
      } else {
        var tipo = "Estudante";
      }
      var tabela = document.getElementById("tabela");
      var linha = tabela.insertRow(1);
      var cel1 = linha.insertCell(0);
      var cel2 = linha.insertCell(1);
      var cel3 = linha.insertCell(2);
      var cel4 = linha.insertCell(3);
      cel1.innerHTML = this.contas[i].num;
      cel2.innerHTML = this.contas[i].nome;
      cel3.innerHTML = tipo;
      cel4.innerHTML = "R$ " + this.contas[i].saldo;
    }
  }

  alterna() {
    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
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

  transferir() {
    var ent_quan = document.getElementById("quant").value;
    var ent_ori = document.getElementById("ori").value;
    var ent_des = document.getElementById("des").value;

    for(let i = 0; i < this.contas.length; i++){
      if(ent_ori==this.contas[i].num){
        
      }
    }
  }
}
sis = new Sistema();
