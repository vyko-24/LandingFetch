async function getUserById() {
  const userId = document.getElementById("userIdInput").value;

  if (!userId) {
    alert("Por favor, ingresa un ID válido.");
    return;
  }

  try {
    const response = await fetch(`https://reqres.in/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error("Usuario no encontrado.");
    }

    const data = await response.json();
    mostrarUsuario(data.data); // Enviamos al render
  } catch (error) {
    document.getElementById("userInfo").innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
function mostrarUsuario(usuario) {
  document.getElementById("userInfo").innerHTML = `
    <h3>${usuario.first_name} ${usuario.last_name}</h3>
    <p>Email: ${usuario.email}</p>
    <img src="${usuario.avatar}" alt="Avatar">
  `;
}

