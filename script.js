

const boton = document.getElementById('boton');

boton.addEventListener('click', function(){
    const nombre = document.getElementById('nombre').value;
    const apellidos = document.getElementById('apellidos').value;
    const correo = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = { nombre, apellidos, correo, password }
    let usuarios = []
    usuarios.push(user);
    localStorage.setItem('usuariosregistrados', JSON.stringify(usuarios));
    window.location.href='login.html'
    console.log(usuarios);
})


