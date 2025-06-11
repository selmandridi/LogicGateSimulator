// Dummy qtloader.js for example purposes
function QtLoader(config) {
  this.load = function() {
    const div = document.querySelector(config.containerElements[0]);
    div.innerHTML = '<p style="color:white;">Qt App would load here.</p>';
  };
}
