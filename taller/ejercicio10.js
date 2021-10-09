class calculadora
{
    constructor()
    {
        this.total = 0
    }
    cargar(numero)
    {
        this.total = numero
    }
    sumar(numero)
    {
        this.total += numero
    }
    restar(numero)
    {
        this.total -= numero
    }
    multiplicar(numero)
    {
        this.total *= numero
    }
    valorActual()
    {
        console.log(`Valor actual: ${this.total}`)
    }
}

let calc = new calculadora()
calc.cargar(0)
calc.sumar(4)
calc.multiplicar(5)
calc.restar(8)
calc.multiplicar(2)
calc.valorActual()