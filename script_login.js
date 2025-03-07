const boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    const correo = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    if (!correo || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!validarEmail(correo)) {
        alert("El correo no tiene un formato válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    alert("Inicio de sesión exitoso.");
    window.location.href = 'index.html';
});


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
