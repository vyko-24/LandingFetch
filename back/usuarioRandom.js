document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const randomId = Math.floor(Math.random() * 12) + 1; 

    fetch(`https://reqres.in/api/users/${randomId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Usuario no encontrado');
        }
        return response.json();
    })
    .then(data => {
        const user = data.data;
        userContainer.innerHTML = `
            <img style="width: 250px;     height: 250px;" src="${user.avatar}" alt="Avatar de ${user.first_name}">
            <h1>${user.first_name} ${user.last_name}</h1>
            <p>Email: ${user.email}</p>
        `;
    })
    .catch(error => {
        userContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});