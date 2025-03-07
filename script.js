const boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const correo = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    if (!nombre || !apellidos || !correo || !password) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    if (!validarEmail(correo)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        return;
    }

    const user = { nombre, apellidos, correo, password };

    
    let usuarios = JSON.parse(localStorage.getItem('usuariosregistrados')) || [];
    usuarios.push(user);
    localStorage.setItem('usuariosregistrados', JSON.stringify(usuarios));

    alert("Usuario registrado correctamente.");
    window.location.href = 'login.html';
});


function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
