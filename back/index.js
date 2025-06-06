const fetchUserLis1 = async () => {
  const url = "https://reqres.in/api/users?page=1";
  const spinner = document.getElementById("spinner");
  const container = document.getElementById("list");


  spinner.style.display = "inline-block";

  try {
    const response = await fetch(url);
    const json = await response.json();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    spinner.style.display = "none";

    json.data.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("mb-2", "p-2", "card", "cardMover");

      userDiv.innerHTML = `
        <div class="d-flex align-items-center col-6">
          <img src="${user.avatar}" class="rounded-circle me-3" width="80" height="80" />
          <div>
            <h5>${user.first_name} ${user.last_name}</h5>
            <p class="mb-0">${user.email}</p>
          </div>
                    <a href="detalleUsuario.html?id=${user.id}" class="btn btn-primary">Ver detalles</a>
        </div>
      `;
      container.appendChild(userDiv);
    });
  } catch (error) {
    spinner.style.display = "none"; 
    console.error("Algo salió mal, Agles:", error.message);
    container.innerHTML = `<p class="text-danger">No se pudo cargar la lista de usuarios. Intentalo más tarde.</p>`;
  }
};
