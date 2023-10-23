const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
ctx.strokeStyle = '#FF0000'
ctx.lineWidth = 5;

function filter(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    document.getElementById('cronograma').innerHTML = `
        <tr class="linha_cabecalho">
            <th class="cabecalho">Prédio</th>
            <th class="cabecalho sala">Sala</th>
            <th class="cabecalho">Turno</th>
            <th class="cabecalho">Rota</th>
            <th class="cabecalho">Dom</th>
            <th class="cabecalho">Seg</th>
            <th class="cabecalho">Ter</th>
            <th class="cabecalho">Qua</th>
            <th class="cabecalho">Qui</th>
            <th class="cabecalho">Sex</th>
            <th class="cabecalho">Sáb</th>
        </tr>
        `
        var predio = document.getElementById('predio_type').value.toUpperCase()
        var sala = document.getElementById('sala_type').value.toUpperCase()
        var turno = document.getElementById('turno_type').value.toUpperCase()
        var rota = document.getElementById('rota_type').value.toUpperCase()
    for(i = 0; i < cronograma.length; i++){
        if(cronograma[i].turno.includes(turno) && cronograma[i].predio.includes(predio) &&
        cronograma[i].sala.includes(sala.toUpperCase()) && cronograma[i].rota.includes(rota)){
            document.getElementById('cronograma')
            .innerHTML += `
            <tr class="linha">
                <td class="cell day">${cronograma[i].predio}</td>
                <td class="cell">${cronograma[i].sala}</td>
                <td class="cell day">${cronograma[i].turno}</td>
                <td class="cell day">${cronograma[i].rota}</td>
                <td class="cell day">${cronograma[i].dom}</td>
                <td class="cell day">${cronograma[i].seg}</td>
                <td class="cell day">${cronograma[i].ter}</td>
                <td class="cell day">${cronograma[i].qua}</td>
                <td class="cell day">${cronograma[i].qui}</td>
                <td class="cell day">${cronograma[i].sex}</td>
                <td class="cell day">${cronograma[i].sab}</td>
            </tr>
            `
        }
    }
    var table = document.getElementById('cronograma')
    predios.forEach((predio) => {
        for(var i = 0, row; row = table.rows[i]; i++){
            if(row.cells[0].innerText.includes(predio[0].predio)){
                ctx.beginPath()
                ctx.moveTo(predio[1].x, predio[1].y)
                for(var j = 2; j < predio.length; j++){
                    ctx.lineTo(predio[j].x, predio[j].y)
                }
                ctx.lineTo(predio[1].x, predio[1].y)
                ctx.stroke()
            }
        }
    })
}

document.getElementById('sala_type').addEventListener('keyup', filter)
document.getElementById('turno_type').addEventListener('keyup', filter)
document.getElementById('predio_type').addEventListener('keyup', filter)
document.getElementById('rota_type').addEventListener('keyup', filter)
document.getElementById('reset_button').addEventListener('click', () => {
    setTimeout(filter, 500)
})