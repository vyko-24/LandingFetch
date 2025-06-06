document.addEventListener('DOMContentLoaded', () => {
    fetch('https://reqres.in/api/unknown', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta de la red');
        }
        return response.json();
    })
    .then(data => {
        let recursosDiv = document.getElementById('recursos');
        recursosDiv.innerHTML = "";

        data.data.forEach(recurso => {
            recursosDiv.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <div 
                            class="card-img-top" 
                            style="background-color: ${recurso.color}; height: 150px;">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${recurso.name}</h5>
                            <p class="card-text">Color: ${recurso.color}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
});
