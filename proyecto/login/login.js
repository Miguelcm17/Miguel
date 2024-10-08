// Validación del formulario de inicio de sesión
function validateLoginForm() {
    let valid = true;

    // Validar correo electrónico
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById('emailError').textContent = 'Debe ingresar un correo electrónico válido.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validar contraseña
    const password = document.getElementById('password').value.trim();
    if (password === '' || password.length < 6) {
        valid = false;
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    return valid;
}

// Evento para manejar el formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    if (!validateLoginForm()) {
        event.preventDefault(); // Evitar envío del formulario si la validación falla
    }
});
