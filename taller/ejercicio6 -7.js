class contador
{
    constructor()
    {
        this.conteo = 0;
        this.ultimaacc = "";
    }
    reset()
    {
        this.conteo = 0;
        this.ultimaacc = "reset"
    }
    inc()
    {
        this.conteo += 1;
        this.ultimaacc = "incremento"
    }
    dec()
    {
        this.conteo -= 1;
        this.ultimaacc = "decremento"
    }
    valorActual(nuevoValor)
    {
        if(nuevoValor != null)
        {
            this.conteo = nuevoValor;
            this.ultimaacc = "actualizacion"
        }
        if(nuevoValor == null)
        {
            console.log(`valor actual:  ${this.conteo}`)
        }

    }
    ultimoComando()
    {
        console.log(`El último comando fue ${this.ultimaacc}`)
    }

}

let contadornuevo = new contador();
contadornuevo.valorActual(10)
contadornuevo.inc()
contadornuevo.inc()
contadornuevo.dec()
contadornuevo.inc()
contadornuevo.valorActual()
//contadornuevo.valorActual(10) para probar el metodo ultimoComando
contadornuevo.ultimoComando()
