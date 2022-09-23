class Sistema {
  numero_conta = 1;
  contas = new Array();

  apareceCriar() {
    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
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
    var con_ext = document.getElementById("extrato");
    con_ext.style.display = "none";

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
    var con_ext = document.getElementById("extrato");
    con_ext.style.display = "none";

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
    var con_ext = document.getElementById("extrato");
    con_ext.style.display = "none";
    if (con_sac.style.display === "block") {
      con_sac.style.display = "none";
    } else {
      con_sac.style.display = "block";
    }
  }

  apareceExtrato() {
    var con_ext = document.getElementById("extrato");
    var con_sac = document.getElementById("sacar");
    con_sac.style.display = "none";
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";

    if (con_ext.style.display === "block") {
      con_ext.style.display = "none";
    } else {
      con_ext.style.display = "block";
    }
  }

  extrato() {
    var ent_conte = document.getElementById("conte").value;

    var tabl = document.getElementById("tabext");
    for (var i = tabl.rows.length - 1; i > 0; i--) {
      tabl.deleteRow(i);
    }

    for (let i = 0; i < this.contas.length; i++) {
      if (ent_conte == this.contas[i].num) {
        if (this.contas[i].lim_e == 0) {
          this.contas[i].saldo = this.contas[i].saldo - 0.5;
          this.contas[i].addExtrato(["extrato adicional", -0.5]);
        } else {
          this.contas[i].lim_e = this.contas[i].lim_e - 1;
        }
        var aux_con = this.contas[i].extrato;
        for (let j = 0; j < aux_con.length; j++) {
          var aux_item = aux_con[j];
          var tabela = document.getElementById("tabext");
          var linha = tabela.insertRow(1);
          var cel1 = linha.insertCell(0);
          var cel2 = linha.insertCell(1);
          var cel3 = linha.insertCell(2);
          cel1.innerHTML = aux_con.length - j + "º";
          cel2.innerHTML = aux_item[0];
          cel3.innerHTML = parseFloat(
            parseFloat(aux_item[1], 10).toFixed(2),
            10
          );
          if (aux_item[1] < 0) {
            cel3.style.backgroundColor = "rgba(255, 0, 0, 0.15)";
          } else {
            cel3.style.backgroundColor = "rgba(0, 255, 0, 0.15)";
          }
        }
        var linha = tabela.insertRow(parseFloat(aux_con.length, 10) + 1);
        var cel1 = linha.insertCell(0);
        var cel2 = linha.insertCell(1);
        var cel3 = linha.insertCell(2);
        cel1.innerHTML = "---";
        cel2.innerHTML = "saldo";
        cel3.innerHTML = parseFloat(
          parseFloat(this.contas[i].saldo, 10).toFixed(2),
          10
        );
        if (this.contas[i].saldo < 0) {
          cel3.style.backgroundColor = "rgba(255, 0, 0, 0.15)";
        } else {
          cel3.style.backgroundColor = "rgba(0, 255, 0, 0.15)";
        }
      }
    }
    document.getElementById("f5").reset();
  }

  criarConta() {
    var ent_nome = document.getElementById("nome").value;
    var ent_tipo = document.querySelector('input[name="tipo"]:checked').value;

    if (ent_tipo == "platinum") {
      var obje = new Platinum(this.numero_conta, ent_nome, 0, -1, -1, "no");
      this.contas.unshift(obje);
    } else if (ent_tipo == "basico") {
      var obje = new Basica(this.numero_conta, ent_nome, 0, 3, 3, -1000);
      this.contas.unshift(obje);
    } else {
      var obje = new Estudante(this.numero_conta, ent_nome, 0, 1, 1, -300);
      this.contas.unshift(obje);
    }

    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
    document.getElementById("f1").reset();
    this.numero_conta++;
  }

  listaContas() {
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
    var container = document.getElementById("corp_list");

    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }

    var table = document.getElementById("tablis");
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
      var tabela = document.getElementById("tablis");
      var linha = tabela.insertRow(1);
      var cel1 = linha.insertCell(0);
      var cel2 = linha.insertCell(1);
      var cel3 = linha.insertCell(2);
      var cel4 = linha.insertCell(3);
      cel1.innerHTML = this.contas[i].num;
      cel2.innerHTML = this.contas[i].nome;
      cel3.innerHTML = tipo;
      cel4.innerHTML = parseFloat(
        parseFloat(this.contas[i].saldo, 10).toFixed(2),
        10
      );
    }
  }

  avancarMes() {
    for (let i = 0; i < this.contas.length; i++) {
      if (this.contas[i] instanceof Platinum) {
        this.contas[i].lim_e = -1;
        this.contas[i].lim_t = -1;
      } else if (this.contas[i] instanceof Basica) {
        this.contas[i].lim_e = 3;
        this.contas[i].lim_t = 3;
        if (this.contas[i].saldo <= 0) {
          this.contas[i].limite = this.contas[i].saldo - 1000;
        } else {
          this.contas[i].limite = -1000;
        }
      } else {
        this.contas[i].lim_e = 1;
        this.contas[i].lim_t = 1;
        if (this.contas[i].saldo <= 0) {
          this.contas[i].limite = this.contas[i].saldo - 300;
        } else {
          this.contas[i].limite = -300;
        }
      }
    }
  }

  alterna() {
    var con_cadastro = document.getElementById("cadastro");
    con_cadastro.style.display = "none";
    var con_lis = document.getElementById("corp_list");
    con_lis.style.display = "none";
    var con_tra = document.getElementById("transferir");
    con_tra.style.display = "none";
    var con_sac = document.getElementById("sacar");
    con_sac.style.display = "none";
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
    var con_ext = document.getElementById("extrato");
    con_ext.style.display = "none";
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
            this.contas[i].addExtrato(["transferencia", -ent_quan]);
            for (let j = 0; j < this.contas.length; j++) {
              if (ent_des == this.contas[j].num) {
                this.contas[j].saldo =
                  parseFloat(this.contas[j].saldo, 10) +
                  parseFloat(ent_quan, 10);
                this.contas[j].addExtrato(["transferencia", ent_quan]);
              }
            }
          } else if (
            this.contas[i] instanceof Basica &&
            this.contas[i].saldo - ent_quan >= this.contas[i].limite
          ) {
            if (
              this.contas[i].lim_t == 0 &&
              this.contas[i].saldo - ent_quan - 0.5 < this.contas[i].limite
            ) {
            } else {
              this.contas[i].saldo = this.contas[i].saldo - ent_quan;
              this.contas[i].addExtrato(["transferencia", -ent_quan]);
              for (let j = 0; j < this.contas.length; j++) {
                if (ent_des == this.contas[j].num) {
                  this.contas[j].saldo =
                    parseFloat(this.contas[j].saldo, 10) +
                    parseFloat(ent_quan, 10);
                  this.contas[j].addExtrato(["transferencia", ent_quan]);
                }
              }
              if (this.contas[i].lim_t == 0) {
                this.contas[i].saldo = this.contas[i].saldo - 0.5;
                this.contas[i].addExtrato(["transferencia adicional", -0.5]);
              } else {
                this.contas[i].lim_t = this.contas[i].lim_t - 1;
              }
            }
          } else if (
            this.contas[i] instanceof Estudante &&
            this.contas[i].saldo - ent_quan >= this.contas[i].limite
          ) {
            if (
              this.contas[i].lim_t == 0 &&
              this.contas[i].saldo - ent_quan - 0.5 < this.contas[i].limite
            ) {
            } else {
              this.contas[i].saldo = this.contas[i].saldo - ent_quan;
              this.contas[i].addExtrato(["transferencia", -ent_quan]);
              for (let j = 0; j < this.contas.length; j++) {
                if (ent_des == this.contas[j].num) {
                  this.contas[j].saldo =
                    parseFloat(this.contas[j].saldo, 10) +
                    parseFloat(ent_quan, 10);
                  this.contas[j].addExtrato(["transferencia", ent_quan]);
                }
              }
              if (this.contas[i].lim_t == 0) {
                this.contas[i].saldo = this.contas[i].saldo - 0.5;
                this.contas[i].addExtrato(["transferencia adicional", -0.5]);
              } else {
                this.contas[i].lim_t = this.contas[i].lim_t - 1;
              }
            }
          }
        }
      }
    }
    document.getElementById("f2").reset();
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
            this.contas[i].addExtrato(["saque", -ent_sac]);
          } else if (
            this.contas[i] instanceof Basica &&
            this.contas[i].saldo - ent_sac >= this.contas[i].limite
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_sac;
            this.contas[i].addExtrato(["saque", -ent_sac]);
          } else if (
            this.contas[i] instanceof Estudante &&
            this.contas[i].saldo - ent_sac >= this.contas[i].limite
          ) {
            this.contas[i].saldo = this.contas[i].saldo - ent_sac;
            this.contas[i].addExtrato(["saque", -ent_sac]);
          }
        }
      }
    }
    document.getElementById("f3").reset();
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
          this.contas[i].addExtrato(["deposito", ent_dep]);
        }
      }
    }
    document.getElementById("f4").reset();
    var con_dep = document.getElementById("depositar");
    con_dep.style.display = "none";
  }
}
sis = new Sistema();
