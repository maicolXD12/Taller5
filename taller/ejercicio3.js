class formulas
{
    sumar(num1,num2)
    {
        return num1+num2
    }
    
    fibonaci(cantidad)
    {
        let fibo =[0,1]
        for(let i = 2; i<=cantidad; i++)
        {
            fibo.push(fibo[i-1]+fibo[i-2])
            console.log(fibo[i])
        }

    }
    modulo(cantidad)
    {
        for(i = 1;i <= cantidad;i++)
        {
            if(let i % 2 == 0)
            {
                console.log(i)
            }
        }

    }
    primos(cantidad)
    {
        for(i = 0; i < cantidad;i++)
        {
            for(let x = 2; x < i;x++)
            {
                if(i % x === 0)
                {
                    console.log(`El número ${i} no es primo`)
                }
                else
                {
                    console.log(`El número ${i} es primo`)
                }
            }
        }

    }
}