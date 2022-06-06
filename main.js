function Calculadora() {
  this.display = document.querySelector("#display");
  this.display.focus();
  this.inicia = () => {
    this.capturaClique();
    this.capturaEnter();
    this.capturaEsc();
  };

  this.capturaEsc = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 27) {
        this.display.value = "";
      }
    });
  };
  this.capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        this.display.focus();
        this.realizaConta();
      }
    });
  };

  this.capturaClique = () => {
    document.addEventListener("click", (e) => {
      el = e.target;
      if (el.classList.contains("btn-num")) {
        this.addDisplay();
        this.display.focus();
      }
      if (el.classList.contains("btn-clear")) {
        this.display.value = "";
      }
      if (el.classList.contains("btn-del"))
        this.display.value = this.display.value.slice(0, -1);
      if (el.classList.contains("btn-eq")) {
        this.realizaConta();
        this.display.focus();
      }
    });
  };

  this.addDisplay = () => {
    this.display.value += el.innerText;
  };
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert("conta invalida");
        return;
      }
      this.display.value = conta;
    } catch (e) {
      alert("conta errada");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
