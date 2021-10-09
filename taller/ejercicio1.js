class fila
{ 

  //Constructor clase.

  constructor()
  {

    this.elemento = {};  
    this.primero = 0;
    this.final = 0; 

  }


// Metodo: agrega un elemento a la fila.

  encolar(info)
  {  

    this.elemento[this.final] = info;    
    this.final++;

  }

  // Metodo: valida si la fila está vacia.

  validarNull()
  {

    if(this.primero === this.final)
        return "La fila esta vacia";

    if(this.primero != this.final)
    return "La fila tiene elementos"

  }


  // Metodo: busca la posición del primer elemento en la fila.

  encontrarPrimero()
  {

    let x = 0
    let check = false
    while(check == false)

    {

      if(this.elemento[x] != null)

      {
        check = true
        return x
      }
      else
      {
        x++
      }

    }
  }

  //Metodo: desencolar el total de la fila.

  desencolarTotal()
  {   
    while(this.desencolar() !== null)
    {
      this.desencolar();
    }
    console.log("El total de la fila se a desencolado");
  }


  //Metodo: desencolar el primer elemento.

  desencolar()
  {
    if(this.primero === this.final)
    {
      return null;
    }    
    const info = this.elemento[this.primero];
    delete this.elemento[this.primero];
    this.primero++;
    return info;
  }
}





// Ejecución y depuración

const cola = new fila();
cola.encolar("Michael");
cola.encolar("David");
cola.encolar("Herrada");
cola.encolar("Castaneda"); 
cola.encolar("Duque");
console.log(cola.elemento);
console.log("Longitud Fila : " + cola.final);
cola.desencolar();
cola.desencolar();
cola.desencolar();
cola.encolar("Carmen");
cola.encolar("Cecilia");
cola.encolar("Jhon");
cola.encolar("Milena"); 
cola.encolar("Hernando");
console.log(cola.validarNull());
console.log(cola.elemento);
console.log("Siguiente: " +  cola.elemento[cola.encontrarPrimero()]);
cola.desencolarTotal();
console.log(cola.validarNull());
console.log(cola.elemento);
