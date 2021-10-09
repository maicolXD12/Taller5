class libro
{
    constructor(titulo,autor,nEjemplares,nEjemplaresPrestados)
    {
        this.titulo = titulo
        this.autor = autor
        this.nEjemplares=nEjemplares
        this.nEjemplaresPrestados = nEjemplaresPrestados
    }
    prestar()
    {
        if(this.nEjemplares > 0)
        {
            this.nEjemplaresPrestados += 1
            this.nEjemplares -= 1
            return true
        }
        else
        {
            return false
        }
    }
    devolver()
    {
        if(this.nEjemplaresPrestados > 0)
        {
            this.nEjemplaresPrestados -= 1
            this.nEjemplares += 1
            return true
        }
        else
        {
            return false
        }
    }
    toString()
    {
        console.log(`Titulo: ${this.titulo}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Ejemplares disponibles: ${ this.nEjemplares}`)
        console.log(`Ejemplares Prestados: ${this.nEjemplaresPrestados}`)
    }
}