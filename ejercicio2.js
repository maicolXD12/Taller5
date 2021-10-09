class cuenta
{
    constructor(titular,saldo)
    {
        this.titular = titular
        this.cantidad =saldo
    }
    mostrar()
    {
       console.log(`Titular: ${this.titular} Saldo: ${this.cantidad}`)
    }
    ingresar(valor)
    {
        if(valor > 0)
        {
            this.cantidad = this.cantidad + valor; 
            console.log("Consignación exitosa")
        }
        if(valor <= 0)
        {
            console.log("Su solicitud no se ha procesado.")
            console.log("El valor ingresado no es invalido.")
        }
    }
    retirar(valor)
    {
        if(valor <= this.cantidad)
        {
            this.cantidad = this.cantidad - valor;
            console.log("Retiro exitoso")
            console.log(`Tu saldo actual es : ${this.cantidad}`)
        }
        if(valor > this.cantidad)
        {
            console.log("Saldo insuficiente")
            console.log(`Tu saldo es de : ${this.cantidad}`)
        }
    }

}
let cuentaEilyn= ["Eilyn",2000000]
let cuenta1 = new cuenta(cuentaEilyn[0],cuentaEilyn[1])
cuenta1.ingresar(800000)
cuenta1.retirar(1200000)
cuenta1.mostrar()


let cuentaMaicol=["Michael",9000000]
let cuenta2 =new cuenta(cuentaMaicol[0],cuentaMaicol[1] )
cuenta2.ingresar(30000)
cuenta2.retirar(50000)
cuenta2.mostrar()