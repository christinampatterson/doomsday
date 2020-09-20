// Adding an event
const addButton = document.getElementById("add-event-button");
const form = document.getElementById("form");

addButton.onclick = function () {
  const popup = document.createElement("div");
  popup.id = "popup";
  document.body.appendChild(popup);
  popup.appendChild(form);

  // Add html to white background
  form.style.visibility = "visible";

  // Submit the form
  const submitButtom = document.getElementById("form-submit-button");
  submitButtom.onclick = function () {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    console.log(name + date + time);
    if (name !== "" && date !== "" && time !== "")
      form.style.visibility = "hidden";
    // Remove the popup div
    document.body.removeChild(popup);
  };
};

var i = 0;
function move() {
  if (i === 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = 100 - width + "%";
        elem.innerHTML = 100 - width + " HRS";
      }
    }
  }
}
move();
