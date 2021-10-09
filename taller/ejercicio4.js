class persona
{
    constructor(nombre,edad,dni,sexo,peso,altura)
    {
        this.nombre = nombre
        this.edad = edad
        this.dni = dni
        this.sexo = sexo
        this.peso = peso
        this.altura = altura
    }
    calcularIMC()
    {
        this.imc =  (this.peso/(this.altura * this.altura))
        if(this.imc < 20)
        {
            return -1
        }
        if(this.imc >= 20 && this.imc <= 25)
        {
            return 0
        }
        if(this.imc > 25)
        {
            return 1
        }

    }
    esMayorDeEdad()
    {
        if(edad >= 18)
        {
            return true
        }
        else
        {
            return false
        }
    }
    comprobarSexo()
    {
        if(this.sexo != "H" || this.sexo != "M")
        {
            this.sexo = "H"
        }
    }
}