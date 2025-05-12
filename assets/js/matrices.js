//estan afuera las variables para que el resultado vaya cambiando de acuerdo a la funcion guardarMatriz
//y se pude acceder a los datos en otras funciones
let matrizA = []
let matrizB = []
let matrizC = []
let matrizCFunction = []


window.addEventListener('load', iniciar)

// DATOS PARA SQL 
let matrizAjson
let matrizBjson
let operacionJSON
let resultadoJSON 

function iniciar(){
    let btnGuardar  = document.getElementById('btnGuardar')
    btnGuardar.addEventListener('click', clickGuardar)

    let sumar  =document.getElementById('btnSumar')
    sumar.addEventListener('click',operacionSumar)

    let restarAB =document.getElementById('btnRestarAB')
    restarAB.addEventListener('click', operacionRestarAB)

    let restarBA =document.getElementById('btnRestarBA')
    restarBA.addEventListener('click', operacionRestarBA)

    let btnMultiplicar = document.getElementById('btnMultiplicarAB')
    btnMultiplicar.addEventListener('click', operacionMultiplicacion)
}

function elegirOtroOrden(){
    location.reload()
}

function clickGuardar(){
    let btnGuardar  = document.getElementById('btnGuardar')
    let btnElegirOtroOrden = document.getElementById('btnElegirOtroOrden')
    let sectionOrden = document.getElementById('delcararOrden')
    let sctResultado = document.getElementById('resultado')
    
    let sctBotones = document.getElementById('sctBotones')
    //se deja de mostrar cuando clickeamos guardar
    sectionOrden.style.display='none'
    btnGuardar.style.display='none'

    //aparecen para poder hacer las operaciones
    btnElegirOtroOrden.style.display='block'
    sctBotones.style.display = 'block'
    sctResultado.style.display = 'block'


    const ordenMatriz1 = declararOrden1();
    const ordenMatriz2 = declararOrden2();


    btnElegirOtroOrden.addEventListener('click', elegirOtroOrden)
}

function declararOrden1(){
    let filasLength1 = document.getElementById('numFilas1')
    let columnasLength1 = document.getElementById('numColumnas1')
    //validar que las FILAS sean minimo 1
    if(filasLength1.value == "" || filasLength1.value <= 0){
        filasLength1.value = 1
    }
    //validar que las COLUMNAS sean minimo 1
    if(columnasLength1.value == "" || columnasLength1.value <= 0){
        columnasLength1.value = 1
    }
    inputsMatriz1(filasLength1.value, columnasLength1.value)

}

function declararOrden2(){
    let filasLength2 = document.getElementById('numFilas2')
    let columnasLength2 = document.getElementById('numColumnas2')
    //validar que las filas sean minimo 1
    if(filasLength2.value == "" || filasLength2.value <= 0){
        filasLength2.value = 1
    }
    //validar que las columnas sean minimo 1
    if(columnasLength2.value == "" || columnasLength2.value <= 0){
        columnasLength2.value = 1
    }
    inputsMatriz2(filasLength2.value, columnasLength2.value)
}

function inputsMatriz1(valorFila, valorColumna){ 
    //se inicializan los contadores para poder ubicar los id
    let contadorFil =0 
    let contadorCol =0

    //se declara donde se va a insertar las celdas
    let contenedor = document.getElementById('imprimir-orden1')
    for (let i = 0; i < valorFila; i++) {
        contadorFil ++
        let espacio = document.createElement('br')
        for (let j = 0; j < valorColumna; j++) { 
            contadorCol++
            //se crea el input
            const inputCelda = document.createElement('input')
            /*atributos del input */
            inputCelda.setAttribute('type', 'text');
            inputCelda.setAttribute('class', 'celda');
            inputCelda.setAttribute('id', `m1c${contadorFil}${contadorCol}`);
            inputCelda.setAttribute('oninput', 'limitChar(event, 1, 3)');
            //se inserta en el contenedor la celda
            contenedor.appendChild(inputCelda)
        }
        contenedor.appendChild(espacio)
        contadorCol = 0
    }
}

function inputsMatriz2(valorFila, valorColumna){
    let contadorFil =0 
    let contadorCol =0
    //se crea la variable donde se va a insertar el elemento html
    let contenedor = document.getElementById('imprimir-orden2')
    for (let i = 0; i < valorFila; i++) {
        contadorFil ++
        for (let j = 0; j < valorColumna; j++) { 
            contadorCol++
            //se crea el input
            const inputCelda = document.createElement('input')
            /*atributos del input */
            inputCelda.setAttribute('type', 'text');
            inputCelda.setAttribute('class', 'celda');
            inputCelda.setAttribute('id', `m2c${contadorFil}${contadorCol}`);
            inputCelda.setAttribute('oninput', 'limitChar(event, 1, 3)');
            //se inserta en el contenedor la celda
            contenedor.appendChild(inputCelda)
        }
        let espacio = document.createElement('br')
        contenedor.appendChild(espacio)
        contadorCol = 0
    }
}

function guardarMatriz (){
    //declaramos en donde se almacenaran los datos que inicen en 0
    matrizA = []
    matrizB = []

    //traemos el dato de la matriz 1 desde html
    let fila1 = document.getElementById('numFilas1')
    let columna1 = document.getElementById('numColumnas1')

    //leemos cada celda en orden fila-columna, se repite hasta que el numero de filas coincida
    for (let i = 1; i <= fila1.value; i++) {
        //se repite hasta que el numero de columnas coincida
        for (let j = 1; j <= columna1.value; j++) {
            let dato1 = document.getElementById(`m1c${i}${j}`) 
            let valorDato1 = parseFloat(dato1.value)
            if(dato1.value == ''){
                valorBlanco = 0
                matrizA.push(valorBlanco)
            }else{
                matrizA.push(valorDato1)
            }
        }
    }

    //REPEAT de los procedimientos de arriba pero para la matriz B
    //traemos el dato de la matriz 2 desde html
    let fila2 = document.getElementById('numFilas2')
    let columna2 = document.getElementById('numColumnas2')

    //leemos cada celda en orden fila-columna, se repite hasta que el numero de filas coincida
    for (let i = 1; i <= fila2.value; i++) {
        //se repite hasta que el numero de columnas coincida
        for (let j = 1; j <= columna2.value; j++) {
            let dato2 = document.getElementById(`m2c${i}${j}`)
            let valorDato2 = parseFloat(dato2.value)
            if(dato2.value == ''){
                valorBlanco = 0
                matrizB.push(valorBlanco)
            }else{
                matrizB.push(valorDato2)
            }
        }
    }
    let matrizAjson= JSON.stringify(`${fila1.value}x${columna1.value}=[${matrizA}]`)
    let matrizBjson= JSON.stringify(`${fila2.value}x${columna2.value}=[${matrizB}]`)
    console.log('Matriz A: ',matrizAjson)
    console.log('Matriz B: ',matrizBjson)

    matrizC=[]
}

function operacionSumar () {
    guardarMatriz()
    
    //traemos el orden de la matriz 1
    let fila1 = document.getElementById('numFilas1')
    let columna1 = document.getElementById('numColumnas1')
    
    //traemos el orden de la matriz 2
    let fila2 = document.getElementById('numFilas2')
    let columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el parametro para titulo de la operacion en la tabla resultado
    let operacion ='Suma A+B'
    operacionJSON = JSON.stringify(operacion)
    console.log(operacionJSON)
    //se crea la variable donde se va a insertar el elemento html
    let resultadoImpresion = document.getElementById('resultado') 
    //valida que las filas y columnas sean del mismo tamaño
    if(fila1.value === fila2.value && columna1.value === columna2.value){

        //podemos usar cualquiera de las dos matrices para verificar el largo ya que ya validamos que 
        // son del mismo orden
        for (let i = 0; i < matrizA.length; i++) {
            let elemento = parseFloat((matrizA[i])+(matrizB[i]))
            if(elemento%1 == 0){
                matrizC.push(elemento)
            }else{
                elemento = elemento.toFixed(2)
                matrizC.push(parseFloat(elemento))
            }
        }
        //convierte el resultado a json
        resultadoJSON= JSON.stringify(matrizC)
        console.log('resultado en JSON:',resultadoJSON)

        crearTablaResultado(operacion)
    } else{
        resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la suma'

        //convierte el resultado a json
        resultadoJSON = JSON.stringify(resultado)
        console.log('Resultado en JSON:', resultadoJSON)
        
        //imprime el resultado en la pantalla
        resultadoInvalido(resultado)
    }
    
}

function operacionRestarAB () {
    guardarMatriz()
    //traemos el orden de la matriz 1
    let fila1 = document.getElementById('numFilas1')
    let columna1 = document.getElementById('numColumnas1')

    //traemos el orden de la matriz 2
    let fila2 = document.getElementById('numFilas2')
    let columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el variable para titulo de la operacion en la tabla resultado
    let operacion = 'Resta A-B'
    operacionJSON = JSON.stringify(operacion)
    console.log(operacionJSON) 

    //valida que las filas y columnas sean del mismo tamaño
    if(fila1.value === fila2.value && columna1.value === columna2.value){
        
        //podemos usar cualquiera de las dos matrices para verificar el largo ya que ya validamos que son del mismo orden
        for (let i = 0; i < matrizB.length; i++) {
            let elemento =parseFloat((matrizA[i])-(matrizB[i]))
            if(elemento%1 == 0){
                matrizC.push(elemento)
            }else{
                elemento = elemento.toFixed(2)
                matrizC.push(parseFloat(elemento))
            }
        }
        crearTablaResultado(operacion)

        resultadoJSON= JSON.stringify(matrizC)
        console.log('resultado en JSON:',resultadoJSON)
    } else{
        resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la resta'
        
        //convierte el resultado a json
        resultadoJSON = JSON.stringify(resultado)
        console.log('Resultado en JSON:', resultadoJSON)

        resultadoInvalido(resultado)
    }
}

function operacionRestarBA () {
    guardarMatriz()
    
    //traemos el orden de la matriz 1
    let fila1 = document.getElementById('numFilas1')
    let columna1 = document.getElementById('numColumnas1')

    //traemos el orden de la matriz 2
    let fila2 = document.getElementById('numFilas2')
    let columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el variable para titulo de la operacion en la tabla resultado
    let operacion = 'Resta B-A'
    operacionJSON = JSON.stringify(operacion)
    console.log(operacionJSON)

    //valida que las filas y columnas sean del mismo tamaño
    if(fila1.value === fila2.value && columna1.value === columna2.value){
        
        //podemos usar cualquiera de las dos matrices para verificar el largo ya que ya validamos que son del mismo orden
        for (let i = 0; i < matrizA.length; i++) {

            let elemento = parseFloat((matrizB[i])-(matrizA[i]))
            if(elemento%1 == 0){
                matrizC.push(elemento)
            }else{
                elemento = elemento.toFixed(2)
                matrizC.push(parseFloat(elemento))
            }
            
        }
        resultadoJSON= JSON.stringify(matrizC)
        console.log('resultado en JSON:',resultadoJSON)

        crearTablaResultado(operacion)
    } else{
        resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la resta'
         
        //convierte el resultado a json
        resultadoJSON = JSON.stringify(resultado)
        console.log('Resultado en JSON:', resultadoJSON)

        resultadoInvalido(resultado)
    }
}

function crearTablaResultado(operacion){
    const cantFilTotal = document.getElementById('numFilas1')
    const cantColTotal = document.getElementById('numColumnas1')
    const secTabla = document.getElementById('secTabla')

    const divEspacio = document.createElement('div')
    divEspacio.className= 'col-4'
    
    const espacio2 =document.createElement('div')
    espacio2.className = 'col-4'

    const lineaDiv = document.createElement('div')
    lineaDiv.className = 'col-12'
    lineaDiv.style.textAlign= 'center'
    lineaDiv.className='parrafo'
    lineaDiv.style.height= '27px'
    lineaDiv.style.paddingTop='5px'

    const table = document.createElement('table')
    table.id='disTabla'
    table.className= 'col-4'

    secTabla.appendChild(lineaDiv)
    
    //aqui se pide el parametro para saber que operacion se esta ejecutando
    lineaDiv.innerHTML= operacion

    secTabla.appendChild(espacio2) //se crea el espacio para que se centre la tabla

    //para saber en que elemento del array matrizC va
    let contador = 0

    
    for(let i= 1 ; i<=cantFilTotal.value; i++){
        //se crea y se inserta una fila en la tabla de resultados
        const row = document.createElement('tr')
        table.appendChild(row)

        for(let j = 1; j <=cantColTotal.value; j++ ){
            let td = document.createElement('td')
            td.id = `p${i}${j}`
            td.className = 'td'
            row.appendChild(td)
            td.innerHTML = matrizC[contador]
            contador++
        }
    }

    
    secTabla.appendChild(table)
    
    secTabla.appendChild(divEspacio)
}

function operacionMultiplicacion(){
    guardarMatriz()
    matrizC = []
    const cantFilas1 = document.getElementById('numFilas1')
    const cantCol1 = document.getElementById('numColumnas1')
    const cantFilas2 = document.getElementById('numFilas2')
    const cantCol2 = document.getElementById('numColumnas2')

    const valorCantFilasA = cantFilas1.value
    const valorCantColA = cantCol1.value
    const valorCantFilasB = cantFilas2.value
    const valorCantColB = cantCol2.value
    let matrizAcopia = matrizA
    let matrizBcopia = matrizB

    let operacion = 'Multiplicacion AxB'
    operacionJSON = JSON.stringify(operacion)
    console.log(operacionJSON)
    
    if(valorCantColA == valorCantFilasB){

        let resultado = 0 
        
        for(let i = 0; i<valorCantFilasA ; i++){
            /*empieza primer for */
            let y = 0
            for(let j = 0 ; j<valorCantColB; j++){
                /*empieza segundo for */
                let x = 0
                for(let k=0 ; k<valorCantColA; k++){
                        resultado += (matrizAcopia[k]*matrizBcopia[x+y])
                        x = x + parseInt(valorCantColB)
                        
                    /*termina tercer for */
                }
                if(resultado%1 == 0){
                    matrizC.push(resultado)
                }else{
                    resultado = resultado.toFixed(2)
                    matrizC.push(parseFloat(resultado))
                    
                }
                resultado = 0 
                y++
                
                /*termina segundo for */
            }
            contador = 0
                for(let b = 0 ; b<valorCantFilasB ; b++){
                    matrizAcopia.shift()
                }
            /*termina primer for */
        }
        crearTablaResultadoMultiplicacion(operacion)        

        resultadoJSON= JSON.stringify(matrizC)
        console.log('resultado en JSON:',resultadoJSON)
        /*termina if*/
    }else{
        resultado='La cantidad de columnas de la matriz A no es igual a la cantidad de filas de la matriz B'        
        resultadoJSON = JSON.stringify(resultado)
        console.log('Resultado en JSON:', resultadoJSON)

        resultadoInvalido(resultado)
    }
    
}

function crearTablaResultadoMultiplicacion(operacion){
    const cantFilTotal = document.getElementById('numFilas1')
    const cantColTotal = document.getElementById('numColumnas2')
    const secTabla = document.getElementById('secTabla')

    const divEspacio = document.createElement('div')
    divEspacio.className= 'col-4'
    
    const espacio2 =document.createElement('div')
    espacio2.className = 'col-4'

    const lineaDiv = document.createElement('div')
    lineaDiv.className = 'col-12'
    lineaDiv.style.textAlign= 'center'
    lineaDiv.className='parrafo'
    lineaDiv.style.height= '27px'
    lineaDiv.style.paddingTop='5px'

    const table = document.createElement('table')
    table.id='disTabla'
    table.className= 'col-4'

    secTabla.appendChild(lineaDiv)
    
    //aqui se pide el parametro para saber que operacion se esta ejecutando
    lineaDiv.innerHTML= operacion

    secTabla.appendChild(espacio2) //se crea el espacio para que se centre la tabla

    //para saber en que elemento del array matrizC va
    let contador = 0

    
    for(let i= 1 ; i<=cantFilTotal.value; i++){
        //se crea y se inserta una fila en la tabla de resultados
        const row = document.createElement('tr')
        table.appendChild(row)

        for(let j = 1; j <=cantColTotal.value; j++ ){
            let td = document.createElement('td')
            td.id = `p${i}${j}`
            td.className = 'td'
            row.appendChild(td)
            td.innerHTML = matrizC[contador]
            contador++
        }
    }
    secTabla.appendChild(table)
    
    secTabla.appendChild(divEspacio)
}

function resultadoInvalido(){
    let secTabla = document.getElementById('secTabla')

    const lineaDiv = document.createElement('div')
    lineaDiv.className = 'col-12'
    lineaDiv.style.textAlign= 'center'
    lineaDiv.className='parrafo'
    lineaDiv.style.height= '30px'
    lineaDiv.style.paddingTop='10px'

    lineaDiv.append(resultado)
    secTabla.appendChild(lineaDiv)
}
