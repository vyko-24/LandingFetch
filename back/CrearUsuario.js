document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("userForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const avatar = document.getElementById("avatar").value || "https://reqres.in/img/faces/1-image.jpg";

    const responseDiv = document.getElementById("response");
    const responseData = document.getElementById("responseData");

    const usuario = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      avatar: avatar
    };

    try {
      const response = await fetch("https://reqres.in/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'x-api-key': 'reqres-free-v1'
        },
        body: JSON.stringify(usuario),
      });

      const data = await response.json();
      console.log("Respuesta de la API:", data); // Mostrar en consola

      if (response.ok) {
        responseData.textContent = "Usuario registrado exitosamente.";
      } else {
        responseData.textContent = "Ocurrió un error al registrar el usuario.";
      }

      responseDiv.classList.remove("hidden");
    } catch (error) {
      console.error("Error de red o fetch:", error);
      responseData.textContent = "Error al registrar usuario.";
      responseDiv.classList.remove("hidden");
    }
  });
});
