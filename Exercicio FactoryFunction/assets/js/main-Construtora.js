function Calculadora() {
  this.display = document.querySelector('.display')

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  } 

  this.capturaEnter = () => {
    document.addEventListener('keypress', e => {
      if (e.keyCode === 13 ) {
        this.realizaConta();
      }
    }); 
  };

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear(el);
      if (el.classList.contains('btn-del')) this.del(el);
      if (el.classList.contains('btn-eq')) this.realizaConta(el);
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus()
  }
  // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
  this.clear = () => this.display.value = '';
  this.realizaConta = () => {
    try {
      // biome-ignore lint/security/noGlobalEval: <explanation>
      const conta = eval(this.display.value);

      if (!conta) {
        alert('Conta Inválida');
        return
      }
      this.display.value = conta
    }catch(e){
      alert('Conta Inválida');
      return;
    }
  }

};

const calculadora = new Calculadora();
calculadora.inicia()