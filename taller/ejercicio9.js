class chimuela
{
    constructor()
    {
        this.energia = 0
    }
    comer(cantidad)
    {
        this.energia += (cantidad*4)

    }
    volar(distancia)
    {
        this.energia -=(distancia+10)
    }
    VerEnergia()
    {
        console.log(`Energía actual: ${this.energia}`)
    }
    estaDebil()
    {
        if(this.energia < 50)
            return true
        else
        {
            return false
        }
    }
    estafeliz()
    {
        if(this.energia >= 500 && this.energia <= 1000)
        {
            return true
        }
        else
        {
            return false
        }
    }
    cuandoQuiereVolar()
    {
        let base =this.energia/5
        let total = 0
        let plus= 0
        if(this.energia >= 300 && this.energia <= 400)
        {
            plus += 10
        }
        if(this.energia % 20 == 0)
        {
            plus += 15
        }
        total = base + plus
        console.log(`Quiere volar ${total} kilometros`)


    }

}
let chimuela1 = new chimuela()
chimuela1.comer(100)
chimuela1.volar(10)
chimuela1.volar(20)
chimuela1.VerEnergia()
chimuela1.estaDebil()
chimuela1.estafeliz()
chimuela1.cuandoQuiereVolar()