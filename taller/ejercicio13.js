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
    fortalezaDefensiva()
    {
        return this.coraza + this.potencia
    }
    necesitaFortalecer()
    {
        if(this.potencia <= 20 && this.coraza == 0 )
        {
            return true
        }
        else
        {
            return false
        }
    }
    fortalezaOfensiva()
    {
        if(this.potencia < 20)
        {
            return 0
        }
        if(this.potencia > 20)
        {
            return (this.potencia-20)/2
        }
    }
}

