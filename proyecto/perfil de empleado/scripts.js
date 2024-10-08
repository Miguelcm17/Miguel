// Validación del formulario de perfil del empleado
function validateProfileForm() {
    let valid = true;

    // Validar nombre
    const name = document.getElementById('name').value.trim();
    if (name === '' || name.length < 3) {
        valid = false;
        document.getElementById('nameError').textContent = 'El nombre debe tener al menos 3 caracteres.';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Validar cédula
    const id = document.getElementById('id').value.trim();
    const idRegex = /^[0-9]{10}$/; // Cédula debe tener 10 dígitos
    if (!idRegex.test(id)) {
        valid = false;
        document.getElementById('idError').textContent = 'La cédula debe tener exactamente 10 dígitos numéricos.';
    } else {
        document.getElementById('idError').textContent = '';
    }

    // Validar correo electrónico
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Debe ingresar un correo electrónico válido.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validar teléfono
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        valid = false;
        document.getElementById('phoneError').textContent = 'El teléfono debe tener exactamente 10 dígitos numéricos.';
    } else {
        document.getElementById('phoneError').textContent = '';
    }

    // Validar estado civil
    const maritalStatus = document.getElementById('marital-status').value;
    if (maritalStatus === '') {
        valid = false;
        document.getElementById('maritalStatusError').textContent = 'Debe seleccionar un estado civil.';
    } else {
        document.getElementById('maritalStatusError').textContent = '';
    }

    return valid;
}

// Evento para manejar el formulario de perfil
document.getElementById('profileForm').addEventListener('submit', function(event) {
    if (!validateProfileForm()) {
        event.preventDefault(); // Evitar envío del formulario si la validación falla
    }
});
