function agregarTarea() {
    const tarea = document.getElementById('tareaInput').value;
    const categoria = document.getElementById('categoriaSelect').value;
    const prioridad = document.getElementById('prioridadSelect').value;

    if (tarea === '') return alert('Escribí una tarea');

    const fila = `<tr>
        <td>${tarea}</td>
        <td>${categoria}</td>
        <td>${prioridad}</td>
        <td><span class="status-badge">Pendiente</span></td>
    </tr>`;

    document.getElementById('tablaCuerpo').innerHTML += fila;
    document.getElementById('tareaInput').value = ''; 
}