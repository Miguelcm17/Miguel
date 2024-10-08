document.getElementById('employeeForm').addEventListener('submit', function(event) {
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

    // Validar correo
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        valid = false;
        document.getElementById('emailError').textContent = 'El correo es obligatorio.';
    } else if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Por favor, ingrese un correo válido.';
    } else {
        document.getElementById('emailError').textContent = '';
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

    // Validar fecha de contratación
    const hireDate = document.getElementById('hireDate').value;
    if (hireDate === '') {
        valid = false;
        document.getElementById('hireDateError').textContent = 'La fecha de contratación es obligatoria.';
    } else {
        document.getElementById('hireDateError').textContent = '';
    }

    // Validar departamento
    const department = document.getElementById('department').value;
    if (department === '') {
        valid = false;
        document.getElementById('departmentError').textContent = 'Seleccione un departamento.';
    } else {
        document.getElementById('departmentError').textContent = '';
    }

    // Si no es válido, evitar el envío del formulario
    if (!valid) {
        event.preventDefault();
    }
});
