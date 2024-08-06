function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.clicaBtn();
        },
        
        realizaConta() {
            this.display.value = eval(this.display.value);
        },
        
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        
        clearDisplay() {
            this.display.value = '';
        },
        
        deleteOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        
        clicaBtn() {
            document.addEventListener('click', e => {
        
                const el = e.target;
        
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.deleteOne();
                }
                if (el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            })
        }
        
    }
}

const calculadora = criaCalculadora();
calculadora.inicia();