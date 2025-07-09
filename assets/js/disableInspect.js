// Create a toast notification element
function createToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.backgroundColor = "rgba(0,0,0,0.8)";
  toast.style.color = "#fff";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "5px";
  toast.style.fontFamily = "Arial, sans-serif";
  toast.style.fontSize = "14px";
  toast.style.zIndex = "10000";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.5s ease";

  document.body.appendChild(toast);

  // Show toast
  requestAnimationFrame(() => {
    toast.style.opacity = "1";
  });

  // Hide after 3 seconds and remove from DOM
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.addEventListener("transitionend", () => toast.remove());
  }, 3000);
}

// Disable right-click context menu
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  createToast("Source code is protected by AgostarTech 🔒");
});

// Disable common developer tools keyboard shortcuts
document.addEventListener("keydown", function (e) {
  const key = e.key.toUpperCase();

  const blockedCombos = [
    // F12
    key === "F12",

    // Ctrl+Shift+I/J/C
    e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(key),

    // Ctrl+U, Ctrl+S
    e.ctrlKey && ["U", "S"].includes(key),
  ];

  if (blockedCombos.some(Boolean)) {
    e.preventDefault();
    createToast("Developer tools are disabled for security 🚫");
  }
});
