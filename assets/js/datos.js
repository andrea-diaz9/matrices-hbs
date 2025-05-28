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
}

function crearTablaA(){
    const espacioPTablaA = document.getElementById('espacioPTablaA')

    const tabla = document.createElement('table')
    tabla.setAttribute('style', 'padding: 0px; width: 100%; margin: 0x; height:100%')
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
                td.setAttribute('style', `width: ${100/arrOrdenAnums[1]}%; border: solid, purple, 1px; text-align: center; background-color: rgb(198, 157, 237);`)
                td.innerHTML = arrMatrizA[contador]
                contador++
            }
        }
    espacioPTablaA.appendChild(tabla)
}

function operacion(){
    const espacioOperacion = document.getElementById('espacioOperacion')
    if(arrOperacion == '+'){
        espacioOperacion.innerHTML = '+'
    }else if (arrOperacion == 'x'){
        espacioOperacion.innerHTML = 'x'
    }else{
        espacioOperacion.innerHTML = '-'
    }
}

function crearTablaB(){
    const espacioPTablaB = document.getElementById('espacioPTablaB')

    const tabla = document.createElement('table')
    tabla.setAttribute('style', 'padding: 0px; width: 100%; margin: 0x; height:100%')
    let contador = 0

        for(let i= 1 ; i<=arrOrdenBnums[0]; i++){
            //se crea y se inserta una fila en la tabla de resultados
            const row = document.createElement('tr')
            row.setAttribute('style', `height: ${100/arrOrdenBnums[0]}%`)
            tabla.appendChild(row)
            for(let j = 1; j <=arrOrdenBnums[1]; j++ ){
                let td = document.createElement('td')
                row.appendChild(td)
                td.id=`pA${i}${j}`
                td.className=`celdaHistorial`
                td.setAttribute('style', `width: ${100/arrOrdenBnums[1]}%;`)
                td.innerHTML = arrMatrizB[contador]
                contador++
            }
        }
    espacioPTablaB.appendChild(tabla)
}