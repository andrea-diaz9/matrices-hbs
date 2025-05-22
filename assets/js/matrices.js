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
let ordenRes

function iniciar(){
    const btnGuardar  = document.getElementById('btnGuardar')
    btnGuardar.addEventListener('click', clickGuardar)

    const sumar  =document.getElementById('btnSumar')
    sumar.addEventListener('click',operacionSumar)
    sumar.addEventListener('click', resultadosBD)

    const restarAB =document.getElementById('btnRestarAB')
    restarAB.addEventListener('click', operacionRestarAB)
    restarAB.addEventListener('click', resultadosBD)

    const restarBA =document.getElementById('btnRestarBA')
    restarBA.addEventListener('click', operacionRestarBA)
    restarBA.addEventListener('click', resultadosBD)

    const btnMultiplicar = document.getElementById('btnMultiplicarAB')
    btnMultiplicar.addEventListener('click', operacionMultiplicacion)
    btnMultiplicar.addEventListener('click', resultadosBD)
}

function elegirOtroOrden(){
    location.reload()
}

function clickGuardar(){
    const btnGuardar  = document.getElementById('btnGuardar')
    const btnElegirOtroOrden = document.getElementById('btnElegirOtroOrden')
    const sectionOrden = document.getElementById('delcararOrden')
    const btnHistorial = document.getElementById('btnHistorial')
    
    const sctBotones = document.getElementById('sctBotones')
    //se deja de mostrar cuando clickeamos guardar
    sectionOrden.style.display='none'
    btnGuardar.style.display='none'

    //aparecen para poder hacer las operaciones
    btnElegirOtroOrden.style.display='block'
    sctBotones.style.display = 'block'
    btnHistorial.style.display = 'block'


    declararOrden1();
    declararOrden2();

   /* datos() */

    btnElegirOtroOrden.addEventListener('click', elegirOtroOrden)

}

function declararOrden1(){
    const filasLength1 = document.getElementById('numFilas1')
    const columnasLength1 = document.getElementById('numColumnas1')
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
    const filasLength2 = document.getElementById('numFilas2')
    const columnasLength2 = document.getElementById('numColumnas2')
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
    const contenedor = document.getElementById('imprimir-orden1')
    for (let i = 0; i < valorFila; i++) {
        contadorFil ++
        const espacio = document.createElement('br')
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
    const contenedor = document.getElementById('imprimir-orden2')
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
        const espacio = document.createElement('br')
        contenedor.appendChild(espacio)
        contadorCol = 0
    }
}

function guardarMatriz (){
    //declaramos en donde se almacenaran los datos que inicen en 0
    matrizA = []
    matrizB = []

    //traemos el dato de la matriz 1 desde html
    const fila1 = document.getElementById('numFilas1')
    const columna1 = document.getElementById('numColumnas1')

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
    const fila2 = document.getElementById('numFilas2')
    const columna2 = document.getElementById('numColumnas2')

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
    ordenAjson = `${fila1.value}x${columna1.value}`
    matrizAjson= (JSON.stringify(matrizA)).replaceAll(",", ", ")

    ordenBjson = `${fila2.value}x${columna2.value}`
    matrizBjson= (JSON.stringify(matrizB)).replaceAll(",", ", ")
    matrizC=[]
}

function operacionSumar () {
    guardarMatriz()
    const tablaResultado = document.getElementById('disTabla')
    //traemos el orden de la matriz 1
    const fila1 = document.getElementById('numFilas1')
    const columna1 = document.getElementById('numColumnas1')
    
    //traemos el orden de la matriz 2
    const fila2 = document.getElementById('numFilas2')
    const columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el parametro para titulo de la operacion en la tabla resultado
    const operacion ='Suma A+B'
    operacionJSON = operacion

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
        crearTablaResultado(operacion)

        resultadoJSON= (JSON.stringify(matrizC)).replaceAll(",", ", ")

        ordenRes = `${fila1.value}x${columna1.value}`
    } else{
        const resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la suma'

        resultadoJSON = resultado
        resultadoInvalido(resultado)

        if(tablaResultado){
            tablaResultado.style.display= 'none'
        }
        ordenRes ='N/A'
    }
    consolaResultados()
    
}

function operacionRestarAB () {
    guardarMatriz()
    const tablaResultado = document.getElementById('disTabla')
    //traemos el orden de la matriz 1
    const fila1 = document.getElementById('numFilas1')
    const columna1 = document.getElementById('numColumnas1')

    //traemos el orden de la matriz 2
    const fila2 = document.getElementById('numFilas2')
    const columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el variable para titulo de la operacion en la tabla resultado
    const operacion = 'Resta A-B'
    operacionJSON = operacion

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

        resultadoJSON= (JSON.stringify(matrizC)).replaceAll(",", ", ")
        
        ordenRes = `${fila1.value}x${columna1.value}`
    } else{
        const resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la resta'
        
        resultadoJSON = resultado
        resultadoInvalido(resultado) 

        if(tablaResultado){
            tablaResultado.style.display= 'none'
        }
        ordenRes ='N/A'
    }
    consolaResultados()
}

function operacionRestarBA () {
    guardarMatriz()
    const tablaResultado = document.getElementById('disTabla')
    //traemos el orden de la matriz 1
    const fila1 = document.getElementById('numFilas1')
    const columna1 = document.getElementById('numColumnas1')

    //traemos el orden de la matriz 2
    const fila2 = document.getElementById('numFilas2')
    const columna2 = document.getElementById('numColumnas2')

    //creamos la matriz 3 vacia
    matrizC = []

    //declaramos el variable para titulo de la operacion en la tabla resultado
    const operacion = 'Resta B-A'
    operacionJSON = operacion

    //valida que las filas y columnas sean del mismo tamaño
    if(fila1.value === fila2.value && columna1.value === columna2.value){
        
        //podemos usar cualquiera de las dos matrices para verificar el largo ya que ya validamos que son del mismo orden
        for (let i = 0; i < matrizB.length; i++) {
            let elemento =parseFloat((matrizB[i])-(matrizA[i]))
            if(elemento%1 == 0){
                matrizC.push(elemento)
            }else{
                elemento = elemento.toFixed(2)
                matrizC.push(parseFloat(elemento))
            }
        }
        crearTablaResultado(operacion) 

        resultadoJSON= (JSON.stringify(matrizC)).replaceAll(",", ", ")
        
        ordenRes = `${fila1.value}x${columna1.value}`
    } else{
        const resultado='El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la resta'
        
        resultadoJSON = resultado
        resultadoInvalido(resultado) 

        if(tablaResultado){
            tablaResultado.style.display= 'none'
        }
        ordenRes ='N/A'
    }
    consolaResultados()
}

function crearTablaResultado(operacion){
    const cantFilTotal = document.getElementById('numFilas1')
    const cantColTotal = document.getElementById('numColumnas1')
    const secTabla = document.getElementById('secTabla')
    const tablaExistente = document.getElementById('disTabla')
    const lineaDivExistente = document.querySelector('.parrafo')

    if(!tablaExistente){
        const divEspacio1 = document.createElement('div')
        divEspacio1.className= 'col-3'
        const divEspacio2 = document.createElement('div')
        divEspacio2.className= 'col-3'

        const lineaDiv = document.createElement('div')
        lineaDiv.className = 'col-12'
        lineaDiv.style.textAlign= 'center'
        lineaDiv.className='parrafo'
        lineaDiv.style.height= '27px'
        lineaDiv.style.paddingTop='5px'
        
    
        const table = document.createElement('table')
        table.id='disTabla'
        table.className= 'col-6'
        
        //aqui se pide el parametro para saber que operacion se esta ejecutando
        if (lineaDivExistente) {
            lineaDivExistente.innerHTML = operacion;
        }else{
            secTabla.appendChild(lineaDiv);
            lineaDiv.innerHTML = operacion;
        }
        
        secTabla.appendChild(divEspacio1) //se crea el espacio para que se centre la tabla
        
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
                td.setAttribute('style', `width:${100/cantColTotal.value}%;`)
                row.appendChild(td)
                td.innerHTML = matrizC[contador]
                contador++
            }
        }
        
        secTabla.appendChild(table)
        
        secTabla.appendChild(divEspacio2)
        
    }else{
        
        tablaExistente.innerHTML=''
        //para saber en que elemento del array matrizC va
        let contador = 0    
        for(let i= 1 ; i<=cantFilTotal.value; i++){
            //se crea y se inserta una fila en la tabla de resultados
            const row = document.createElement('tr')
            tablaExistente.appendChild(row)
            tablaExistente.setAttribute('style','')
            
            for(let j = 1; j <=cantColTotal.value; j++ ){
                let td = document.createElement('td')
                td.id = `p${i}${j}`
                td.setAttribute('style', `width:${100/cantColTotal.value}%;`)
                td.className = 'td'
                row.appendChild(td)
                td.innerHTML = matrizC[contador]
                contador++
            }
        }
        if (lineaDivExistente) {
            lineaDivExistente.innerHTML = operacion;
        }
    }
}

function operacionMultiplicacion(){
    guardarMatriz()
    matrizC = []
    const cantFilas1 = document.getElementById('numFilas1')
    const cantCol1 = document.getElementById('numColumnas1')
    const cantFilas2 = document.getElementById('numFilas2')
    const cantCol2 = document.getElementById('numColumnas2')
    const tablaResultado = document.getElementById('disTabla')

    const valorCantFilasA = cantFilas1.value
    const valorCantColA = cantCol1.value
    const valorCantFilasB = cantFilas2.value
    const valorCantColB = cantCol2.value
    let matrizAcopia = matrizA
    let matrizBcopia = matrizB
    
    const operacion = 'Multiplicacion AxB'
    operacionJSON = operacion
    
    if(valorCantColA === valorCantFilasB){

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

        resultadoJSON= (JSON.stringify(matrizC)).replaceAll(",", ", ")
        
        ordenRes = `${valorCantFilasA}x${valorCantColB}`

        /*termina if*/
    }else{
        const resultado='La cantidad de filas de la matriz A no es igual a la filas de columnas de la matriz B'        
        resultadoJSON = resultado
        resultadoInvalido(resultado)
        if(tablaResultado){
            tablaResultado.style.display= 'none'
        }
        ordenRes ='N/A'
    }
    consolaResultados()
}

function crearTablaResultadoMultiplicacion(operacion) {
    const cantFilTotal = document.getElementById('numFilas1');
    const cantColTotal = document.getElementById('numColumnas2');
    const secTabla = document.getElementById('secTabla');

    // Buscar si ya existe una tabla previa
    let tablaExistente = document.getElementById('disTabla');
    let lineaDivExistente = secTabla.querySelector('.parrafo');

    if (tablaExistente) {
        // Si existe una tabla, limpiarla y actualizar su contenido
        tablaExistente.innerHTML = '';
        let contador = 0;

        for (let i = 1; i <= cantFilTotal.value; i++) {
            const row = document.createElement('tr');
            tablaExistente.appendChild(row);
            tablaExistente.setAttribute('style','')

            for (let j = 1; j <= cantColTotal.value; j++) {
                const td = document.createElement('td');
                td.id = `p${i}${j}`;
                td.className = 'td';
                td.setAttribute('style', `width:${100/cantColTotal.value}%;`)
                td.innerHTML = matrizC[contador];
                row.appendChild(td);
                contador++;
            }
        }

        // Actualizar el texto de la operación si ya existe
        if (lineaDivExistente) {
            lineaDivExistente.innerHTML = operacion;
        }
        
    } else {
        // Crear y añadir los elementos si no existen
        const divEspacio = document.createElement('div');
        divEspacio.className = 'col-3';
        
        const espacio2 = document.createElement('div');
        espacio2.className = 'col-3';
        
        const lineaDiv = document.createElement('div');
        lineaDiv.className = 'col-12 parrafo';
        lineaDiv.style.textAlign = 'center';
        lineaDiv.style.height = '27px';
        lineaDiv.style.paddingTop = '5px';
        
        const table = document.createElement('table');
        table.id = 'disTabla';
        table.className = 'col-6';
        
        // Añadir texto de operación
        if (lineaDivExistente) {
            lineaDivExistente.innerHTML = operacion;
        }else{
            lineaDiv.innerHTML = operacion;
            secTabla.appendChild(lineaDiv);
        }
        
        // Crear tabla
        let contador = 0;
        
        for (let i = 1; i <= cantFilTotal.value; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            
            for (let j = 1; j <= cantColTotal.value; j++) {
                const td = document.createElement('td');
                td.id = `p${i}${j}`;
                td.className = 'td';
                td.setAttribute('style', `width:${100/cantColTotal.value}%;`)
                td.innerHTML = matrizC[contador];
                row.appendChild(td);
                contador++;
            }
        }

        secTabla.appendChild(espacio2); // Añadir espacio para centrar la tabla
        secTabla.appendChild(table);
        secTabla.appendChild(divEspacio);
    }
}

function resultadoInvalido(resultado) {
    const secTabla = document.getElementById('secTabla');
    
    // Buscar si ya existe un elemento con la clase 'parrafo'
    let lineaDiv = secTabla.querySelector('.parrafo');
    
    // Si ya existe, reemplazar el texto
    if (lineaDiv) {
        lineaDiv.textContent = resultado;
    } else {
        // Crear el div si no existe
        lineaDiv = document.createElement('div');
        lineaDiv.className = 'col-12 parrafo';
        lineaDiv.style.textAlign = 'center';
        lineaDiv.style.height = '30px';
        lineaDiv.style.paddingTop = '10px';
        lineaDiv.textContent = resultado;
        secTabla.appendChild(lineaDiv);
    }
}

function consolaResultados(){
    let datosConsola = {
        ordenAjson,
        matrizAjson,
        ordenBjson,
        matrizBjson,
        operacionJSON,
        ordenRes,
        resultadoJSON
    }
    console.log(operacionJSON,':',datosConsola)
    resJSONaINT()
}

function  resultadosBD(){
    const datos = {
        ordenAjson,
        matrizAjson,
        ordenBjson,
        matrizBjson,
        ordenRes,
        operacionJSON,
        resultadoJSON
    }
    
    fetch('/opera',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos)
    })
    .then((response) => response.json())
    .then((result) => {
        console.log('Se guardó en BD')
    })
    .catch(err => console.log('error al imprimir', err))
}

function resJSONaINT(){
    const purosNumerosA = matrizAjson.replace("[",'').replace("]",'').split(",")
    const arrMatrizA = []
    purosNumerosA.forEach( element => {
        arrMatrizA.push(parseInt(element))
    });
    console.log('MatrizA:',arrMatrizA)

    const purosNumerosB = matrizBjson.replace("[",'').replace("]",'').split(",")
    const arrMatrizB = []
    purosNumerosB.forEach( element => {
        arrMatrizB.push(parseInt(element))
    });
    console.log('MatrizB:',arrMatrizB)

    if(resultadoJSON == 'El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la suma' || resultadoJSON == 'El orden de las matrices no son del mismo tamaño por lo tanto no se puede realizar la resta' || resultadoJSON == 'La cantidad de filas de la matriz A no es igual a la filas de columnas de la matriz B'){
        console.log(resultadoJSON)
    }else{
        const purosNumerozC = resultadoJSON.replace("[",'').replace("]",'').split(",")
        const arrMatrizC = []
        purosNumerozC.forEach( element => {
            arrMatrizC.push(parseInt(element))
        });
        console.log('Resultado:',arrMatrizC)
    }
}