async function cargarUsuario(userId) {
    try {
        // 1. Obtener datos del usuario específico
        const response = await fetch(`https://reqres.in/api/users/${userId}`);
        const data = await response.json();
        const user = data.data;
        console.log(data);
        

        // 2. Mostrar en HTML
        document.getElementById('user-name').textContent = `${user.first_name} ${user.last_name}`;
        document.getElementById('user-email').textContent = user.email;
        document.getElementById('user-avatar').src = user.avatar;
    } catch (error) {
        console.error("Error al cargar usuario:", error);
    }
}

// 3. Al cargar la página, leer el ID de la URL
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id') || 1; // Si no hay ID, muestra usuario 1
    cargarUsuario(userId);
});