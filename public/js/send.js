const sendButton = document.getElementById("btn-submit");

sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;

  sendButton.setAttribute("disabled", true);

  if (!email) {
    Toastify({
      text: "El email es requerido",
      duration: 3000,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#c62828",
      },
    }).showToast();
    sendButton.removeAttribute("disabled", true);
    return;
  }

  const response = await fetch(`http://127.0.0.1:5000/api/api-keys`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const data = await response.json();

  if (data.statusCode === 400) {
    if (data.error.includes("E11000")) {
      Toastify({
        text: "El email ya existe",
        duration: 3000,
        gravity: "bottom",
        position: "left",
        stopOnFocus: true,
        style: {
          background: "#c62828",
        },
      }).showToast();
    }
  }

  sendButton.removeAttribute("disabled", true);

  if (data.email) {
    Toastify({
      text: `Revisa tu mail ${data.email} para obtener tu API key`,
      duration: 3000,
      gravity: "bottom",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "#2e7d32",
      },
    }).showToast();

    document.getElementById("email").value = "";
    return;
  }
});
