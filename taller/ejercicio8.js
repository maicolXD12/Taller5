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

}
let chimuela1 = new chimuela()
chimuela1.comer(100)
chimuela1.volar(10)
chimuela1.volar(20)
chimuela1.VerEnergia()