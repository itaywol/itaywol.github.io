// INTSALLATION

let installButton = document.getElementById("install-pwa");
let greetingsMessage = document.getElementById("greeting-message");
let defaultMessage = greetingsMessage.innerText;
const pwaInstalled = " And thanks for having me on your device 😊";

function updateGreeting() {
  greetingsMessage.innerText = defaultMessage + pwaInstalled;
}

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  let deferredPrompt = e;

  installButton.style.display = "block";

  installButton.addEventListener("click", (e) => {
    installButton.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accpeted") {
        greetingsMessage.innerText = defaultMessage + pwaInstalled;
      }
      deferredPrompt = null;
    });
  });
});

window.addEventListener("appinstalled", (e) => {
  updateGreeting();
});

// END INSTALLATION

// SERVICE WORKER

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("worker.js");
  }
});
