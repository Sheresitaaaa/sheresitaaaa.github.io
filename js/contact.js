const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form) {
  const fields = {
    name: form.querySelector("#name"),
    email: form.querySelector("#email"),
    message: form.querySelector("#message"),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(field, message) {
    const input = fields[field];
    const errorEl = form.querySelector(`.error[data-for="${field}"]`);
    if (errorEl) errorEl.textContent = message;
    if (input) input.classList.toggle("invalid", Boolean(message));
    return !message;
  }

  function validate() {
    let valid = true;

    valid = setError("name", fields.name.value.trim() ? "" : "Vul je naam in.") && valid;

    const email = fields.email.value.trim();
    let emailMsg = "";
    if (!email) emailMsg = "Vul je e-mailadres in.";
    else if (!emailPattern.test(email)) emailMsg = "Vul een geldig e-mailadres in.";
    valid = setError("email", emailMsg) && valid;

    valid = setError("message", fields.message.value.trim() ? "" : "Schrijf een bericht.") && valid;

    return valid;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!validate()) {
      status.textContent = "Controleer de gemarkeerde velden.";
      status.classList.add("fail");
      return;
    }

    status.textContent = "Bedankt! Je bericht is verstuurd (demo).";
    status.classList.add("success");
    form.reset();
  });

  //foutmeldingen tijdens het typen
  Object.keys(fields).forEach((key) => {
    fields[key].addEventListener("input", () => setError(key, ""));
  });
}
