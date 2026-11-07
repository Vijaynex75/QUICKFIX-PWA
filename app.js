// QUICKFIX setup: replace this with your WhatsApp number including country code.
const WHATSAPP_NUMBER = "919629580995";

const serviceInput = document.getElementById("service");
const serviceButtons = document.querySelectorAll(".service");
serviceButtons.forEach(button => {
  button.addEventListener("click", () => {
    serviceButtons.forEach(item => item.classList.remove("selected"));
    button.classList.add("selected");
    serviceInput.value = button.dataset.service;
    document.getElementById("book").scrollIntoView({behavior:"smooth", block:"start"});
  });
});

document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    "*QUICKFIX — New Service Booking*",
    `Service: ${form.get("service")}`,
    `Customer: ${form.get("customer")}`,
    `Mobile: ${form.get("phone")}`,
    `Area: ${form.get("area")}`,
    `Address: ${form.get("address")}`,
    `Issue: ${form.get("details") || "Not specified"}`
  ].join("\n");

  if (WHATSAPP_NUMBER.includes("X")) {
    document.getElementById("notice").textContent =
      "Demo is ready. Add your WhatsApp number in app.js (replace 91XXXXXXXXXX) before accepting real bookings.";
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
});

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./service-worker.js").catch(console.error));
}
