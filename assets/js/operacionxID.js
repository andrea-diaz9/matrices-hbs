function funciones(){

    console.log(
    `OrenA:`, arrOrdenAnums, 
    '\nMatrizA:', arrMatrizA,
    '\nOperacion', arrOperacion,
    '\nOrdenB:', arrOrdenBnums,
    '\nMatrizB:', arrMatrizB,
    '\nOrdenR:', matrizOrdenResultado,
    '\nResultado:', arrMatrizC
    )
    crearTablaA()
    operacion()
    crearTablaB()
    crearTablaResultado()
}

function crearTablaA(){
    const espacioPTablaA = document.getElementById('espacioPTablaA')

    const tabla = document.createElement('table')
    tabla.id= 'tablaEnHistorial'
    let contador = 0

        for(let i= 1 ; i<=arrOrdenAnums[0]; i++){
            //se crea y se inserta una fila en la tabla de resultados
            const row = document.createElement('tr')
            row.setAttribute('style', `height: ${100/arrOrdenAnums[0]}%`)
            tabla.appendChild(row)
            for(let j = 1; j <=arrOrdenAnums[1]; j++ ){
                let td = document.createElement('td')
                row.appendChild(td)
                td.className=`celdaHistorial`
                td.id=`pA${i}${j}`
                td.setAttribute('style', `width: ${100/arrOrdenAnums[1]}%;`)
                td.innerHTML = arrMatrizA[contador]
                contador++
            }
        }
    espacioPTablaA.appendChild(tabla)
}

function operacion(){
    const espacioOperacion = document.getElementById('espacioOperacion')
    const div  = document.createElement('div')
    div.setAttribute('class', 'col-12')
    div.setAttribute('style', 'height: 33%')
    espacioOperacion.append(div)

    const div2  = document.createElement('div')
    div2.setAttribute('class', 'col-12')
    div2.setAttribute('style', 'height: 33%')
    espacioOperacion.append(div2)
    const operacion = document.createElement('p')

    div2.append(operacion)

    if(arrOperacion == '+'){
        operacion.innerHTML = '+'
    }else if (arrOperacion == 'x'){
        operacion.innerHTML = 'x'
    }else{
        operacion.innerHTML = '-'
    }
}

function crearTablaB(){
    const espacioPTablaB = document.getElementById('espacioPTablaB')

    const tabla = document.createElement('table')
    tabla.id= 'tablaEnHistorial'
    let contador = 0

        for(let i= 1 ; i<=arrOrdenBnums[0]; i++){
            //se crea y se inserta una fila en la tabla de resultados
            const row = document.createElement('tr')
            row.setAttribute('style', `height: ${100/arrOrdenBnums[0]}%`)
            tabla.appendChild(row)
            for(let j = 1; j <=arrOrdenBnums[1]; j++ ){
                let td = document.createElement('td')
                row.appendChild(td)
                td.id=`pB${i}${j}`
                td.className=`celdaHistorial`
                td.setAttribute('style', `width: ${100/arrOrdenBnums[1]}%;`)
                td.innerHTML = arrMatrizB[contador]
                contador++
            }
        }
    espacioPTablaB.appendChild(tabla)
}

function crearTablaResultado(){
    const espacioPTablaResultado = document.getElementById('espacioPTablaC')
    if(matrizOrdenResultado == 'N/A'){
        const div = document.createElement('div')
        const parrafo = document.createElement('p')
        parrafo.setAttribute('style', 'text-align: center; border: solid purple 1px; background-color: rgb(200, 161, 226); font-weight: bold')
        parrafo.innerHTML= arrMatrizC[0]
        div.append(parrafo)

        espacioPTablaResultado.append(div)
    }else{

        const tabla = document.createElement('table')
         tabla.id= 'tablaEnHistorial'
        let contador = 0
    
            for(let i= 1 ; i<=matrizOrdenResultado[0]; i++){
                //se crea y se inserta una fila en la tabla de resultados
                const row = document.createElement('tr')
                row.setAttribute('style', `height: ${100/matrizOrdenResultado[0]}%`)
                tabla.appendChild(row)
                for(let j = 1; j <=matrizOrdenResultado[1]; j++ ){
                    let td = document.createElement('td')
                    row.appendChild(td)
                    td.id=`pR${i}${j}`
                    td.className=`celdaHistorial`
                    td.setAttribute('style', `width: ${100/matrizOrdenResultado[1]}%; padding-top: 5px; padding-bottom: 5px; font-weight: bold`)
                    td.innerHTML = arrMatrizC[contador]
                    contador++
                }
            }
        espacioPTablaResultado.appendChild(tabla)
    }
    }

