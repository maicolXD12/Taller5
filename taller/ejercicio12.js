class enterprise
{
    constructor(potencia, coraza)
    {
        this.potencia = 50
        this.coraza = 5
    }
    encontrarPilaAtomica()
    {
        if(this.potencia >= 100)
        {
            console.log("Potencia Maxima")
        }
        else
        {
            this.potencia +=  25
        }
        if(this.potencia > 100)
        {
            this.potencia = 100
        }
        console.log(`La potencia actual es de ${this.potencia}`)
    }

    encontrarEscudo()
    {
        if(this.coraza >= 20)
        {
            console.log("Escudo Maximo")
        }
        else
        {
            this.coraza +=  10
        }
        if(this.coraza > 20)
        {
            this.coraza = 20
        }
        console.log(`La coraza actual es de ${this.coraza}`)
    }

    recibirAtaque(puntosDaño)
    {
        let total = this.coraza - puntosDaño
        if(total >= 0)
        {
            this.coraza = total
        }
        if(total < 0)
        {
            this.coraza = 0
            this.potencia -= (total * -1)
        }
    }
    mostrarStats()
    {
        console.log("los stats actuales son: ")
        console.log(`La coraza actua es de ${this.coraza}`)
        console.log(`La potencia actual es e ${this.potencia}`)
    }

}

let nave1 = new enterprise()
nave1.encontrarPilaAtomica()
nave1.recibirAtaque(14)
nave1.encontrarEscudo()
nave1.mostrarStats()
