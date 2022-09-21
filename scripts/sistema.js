class Sistema {
  numero_conta = 1;
  contas = new Array();

  apareceCriar() {
    var con_cadastro = document.getElementById("cadastro");

    if (con_cadastro.style.display === "block") {
      con_cadastro.style.display = "none";
    } else {
      con_cadastro.style.display = "block";
    }

    document.getElementById("n_conta").innerText =
      "O número da conta será:  " + this.numero_conta;
  }

  apareceTransferencia() {
    var con_tra = document.getElementById("transferir");
    var con_sac = document.getElementById("sacar");
    con_sac.style.display = "none";
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";

    if (con_tra.style.display === "block") {
      con_tra.style.display = "none";
    } else {
      con_tra.style.display = "block";
    }
  }

  apareceDepositar() {
    var con_dep = document.getElementById("depositar");
    var con_sac = document.getElementById("sacar");
    con_sac.style.display = "none";
    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";

    if (con_dep.style.display === "block") {
      con_dep.style.display = "none";
    } else {
      con_dep.style.display = "block";
    }
  }

  apareceSacar() {
    var con_sac = document.getElementById("sacar");
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";

    if (con_sac.style.display === "block") {
      con_sac.style.display = "none";
    } else {
      con_sac.style.display = "block";
    }
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
      cel4.innerHTML =
        "R$ " + parseFloat(parseFloat(this.contas[i].saldo, 10).toFixed(2), 10);
    }
  }

  alterna() {
    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";
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

    if (ent_quan > 0) {
      for (let i = 0; i < this.contas.length; i++) {
        if (ent_ori == this.contas[i].num) {
          if (this.contas[i] instanceof Platinum) {
            this.contas[i].saldo = this.contas[i].saldo - ent_quan;
            this.contas[i].extrato = ["transferencia", -ent_quan];
            for (let i = 0; i < this.contas.length; i++) {
              if (ent_des == this.contas[i].num) {
                this.contas[i].saldo =
                  parseFloat(this.contas[i].saldo, 10) +
                  parseFloat(ent_quan, 10);
                this.contas[i].extrato = ["transferencia", ent_quan];
              }
            }
          } else if (
            this.contas[i] instanceof Basica &&
            this.contas[i].saldo - ent_quan >= -1000
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_quan;
            this.contas[i].extrato = ["transferencia", -ent_quan];
            for (let i = 0; i < this.contas.length; i++) {
              if (ent_des == this.contas[i].num) {
                this.contas[i].saldo =
                  parseFloat(this.contas[i].saldo, 10) +
                  parseFloat(ent_quan, 10);
                this.contas[i].extrato = ["transferencia", ent_quan];
              }
            }
          } else if (
            this.contas[i] instanceof Estudante &&
            this.contas[i].saldo - ent_quan >= -300
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_quan;
            this.contas[i].extrato = ["transferencia", -ent_quan];
            for (let i = 0; i < this.contas.length; i++) {
              if (ent_des == this.contas[i].num) {
                this.contas[i].saldo =
                  parseFloat(this.contas[i].saldo, 10) +
                  parseFloat(ent_quan, 10);
                this.contas[i].extrato = ["transferencia", ent_quan];
              }
            }
          }
        }
      }
    }

    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";
  }

  sacar() {
    var ent_sac = document.getElementById("sac").value;
    var ent_cons = document.getElementById("conts").value;

    if (ent_sac > 0) {
      for (let i = 0; i < this.contas.length; i++) {
        if (ent_cons == this.contas[i].num) {
          if (this.contas[i] instanceof Platinum) {
            this.contas[i].saldo = this.contas[i].saldo - ent_sac;
            this.contas[i].extrato = ["saque", -ent_sac];
          } else if (
            this.contas[i] instanceof Basica &&
            this.contas[i].saldo - ent_sac >= -1000
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_sac;
            this.contas[i].extrato = ["saque", -ent_sac];
          } else if (
            this.contas[i] instanceof Estudante &&
            this.contas[i].saldo - ent_sac >= -300
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_sac;
            this.contas[i].extrato = ["saque", -ent_sac];
          }
        }
      }
    }
    var con_sac = document.getElementById("sacar");
    con_sac.style.display = "none";
  }

  depositar() {
    var ent_dep = document.getElementById("dep").value;
    var ent_con = document.getElementById("cont").value;

    if (ent_dep > 0) {
      for (let i = 0; i < this.contas.length; i++) {
        if (ent_con == this.contas[i].num) {
          this.contas[i].saldo =
            parseFloat(this.contas[i].saldo, 10) + parseFloat(ent_dep, 10);
          this.contas[i].extrato = ["deposito", ent_dep];
        }
      }
    }
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
  }
}
sis = new Sistema();
