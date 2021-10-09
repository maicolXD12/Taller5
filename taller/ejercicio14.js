class motor
{
    constructor()
    {
        this.cambioActual = 0;
        this.rpm = 0;
        this.velocidad = 0
        this.consumo = 0
    }
    arrancar()
    {
        this.cambioActual = 1
        this.rpm = 500
    }
    subirCambio()
    {
        this.cambioActual += 1;
    }
    bajarCambio()
    {
        this.cambioActual -= 1;
    }
    subirRPM(cantidad)
    {
        this.rpm += cantidad
    }
    bajarRPM(cantidad)
    {
        this.rpm -= cantidad
    }
    velocidadTotal()
    {
        this.velocidad = (this.rpm/100)*(0.5+(this.cambioActual/2))
    }
    consumoActualPorKm()
    {
        this.consumo = 0.5
        if(this.cambioActual == 1)
        {
            this.consumo *= 3
        }
        if(this.cambioActual == 2)
        {
            this.consumo *= 2
        }
        if(this.rpm > 3000)
        {
            let calculo = (this.rpm-2500)/500
            this.consumo = this.consumo * calculo
        }
        return this.consumo
    }
}