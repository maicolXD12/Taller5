class contraseña
{
    constructor(longitud,contraseña)
    {
        this.longitud = longitud
        this.contraseña = contraseña
    }

    esFuerte()
    {
        if(this.contraseña.length > 5)
        {
            return "Es fuerte"
        }

    }

    generarPassword(tamaño)
    {
        let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"        
        let contraseñaGenerada = ''
        for (let i=0; i<tamaño; i++) {
            let rnum = Math.floor(Math.random() * chars.length)
            contraseñaGenerada += chars.substring(rnum,rnum+1)
        }
        return contraseñaGenerada

    }
}