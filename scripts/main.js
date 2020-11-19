// INTSALLATION

let installButton = document.getElementById("install-pwa");
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  let deferredPrompt = e;

  installButton.style.display = "block";

  installButton.addEventListener("click", (e) => {
    installButton.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accpeted") {
        console.log("success");
      } else {
        console.log("nope");
      }
      deferredPrompt = null;
    });
  });
});

// END INSTALLATION

// SERVICE WORKER

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("worker.js");
  }
});
