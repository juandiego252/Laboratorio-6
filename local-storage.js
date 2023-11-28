// Guardar un Objeto en el LocalStorage 
const usuario = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
  };
  
const usuarioJSON = JSON.stringify(usuario);

localStorage.setItem("usuario", usuarioJSON);

// Obtener un Objeto en el LocalStorage
const usu = JSON.parse(usuarioJSON);

console.log(usu);

// Eliminar un Objeto en el LocalStorage
localStorage.removeItem("usuario");
