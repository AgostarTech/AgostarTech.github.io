// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Source code is protected by AgostarTech 🔒");
});

// Disable keyboard shortcuts (F12, Ctrl+Shift+I, etc.)
document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U")
  ) {
    e.preventDefault();
    alert("Developer tools are disabled for security 🚫");
  }
});
