let totalAttendance = 0;
let totalAbsences = 0;
let totalLates = 0;
const workingHoursStart = "08:00";
const workingHoursEnd = "17:00";

document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valid = true;

    // Validar nombre
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        valid = false;
        document.getElementById('nameError').textContent = 'El nombre es obligatorio.';
    } else if (name.length < 3) {
        valid = false;
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 3 caracteres.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validar cédula
    const id = document.getElementById('id').value.trim();
    const idRegex = /^[0-9]{10}$/;
    if (id === '') {
        valid = false;
        document.getElementById('idError').textContent = 'La cédula es obligatoria.';
    } else if (!idRegex.test(id)) {
        valid = false;
        document.getElementById('idError').textContent = 'La cédula debe tener exactamente 10 dígitos numéricos.';
    } else {
        document.getElementById('idError').textContent = '';
    }

    // Validar hora de entrada
    const entryTime = document.getElementById('entryTime').value;
    if (entryTime === '') {
        valid = false;
        document.getElementById('entryTimeError').textContent = 'La hora de entrada es obligatoria.';
    } else {
        document.getElementById('entryTimeError').textContent = '';
    }

    // Validar hora de salida
    const exitTime = document.getElementById('exitTime').value;
    if (exitTime && exitTime <= entryTime) {
        valid = false;
        document.getElementById('exitTimeError').textContent = 'La hora de salida debe ser después de la hora de entrada.';
    } else {
        document.getElementById('exitTimeError').textContent = '';
    }

    if (!valid) return;

    // Registrar asistencia
    const attendanceTable = document.querySelector('#attendanceTable tbody');
    const row = document.createElement('tr');
    const status = calculateStatus(entryTime);
    row.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${entryTime}</td>
        <td>${exitTime ? exitTime : '---'}</td>
        <td>${status}</td>
    `;
    attendanceTable.appendChild(row);

    updateStatistics(status);
});

function calculateStatus(entryTime) {
    if (entryTime > workingHoursStart) {
        totalLates++;
        return 'Tardanza';
    } else {
        totalAttendance++;
        return 'A Tiempo';
    }
}

function updateStatistics(status) {
    if (status === 'Tardanza') {
        totalLates++;
    } else if (status === 'A Tiempo') {
        totalAttendance++;
    }

    const totalRecords = totalAttendance + totalLates;
    const onTimePercentage = totalRecords > 0 ? Math.round((totalAttendance / totalRecords) * 100) : 0;

    document.getElementById('totalAttendance').textContent = totalRecords;
    document.getElementById('totalLates').textContent = totalLates;
    document.getElementById('onTimePercentage').textContent = onTimePercentage;
}
