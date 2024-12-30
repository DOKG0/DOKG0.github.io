document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const url = "https://formspree.io/f/mvgojqbd"; // Reemplaza tu_form_id

    try {
        const response = await fetch(url, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            document.getElementById("status").innerText = "¡Mensaje enviado con éxito!";
            form.reset();
        } else {
            document.getElementById("status").innerText = "Hubo un error al enviar el mensaje.";
        }
    } catch (error) {
        document.getElementById("status").innerText = "Ocurrió un error inesperado.";
    }
});