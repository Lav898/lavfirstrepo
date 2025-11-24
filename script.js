    

    function addUser() {
  const nameValue = document.getElementById("name").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const messageValue = document.getElementById("message").value.trim();
  const userList = document.getElementById("user-list");

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    alert("Please fill all fields");
  } else {
    const li = document.createElement("li");

    // 📝 Include name, email and message
    li.innerHTML = `<strong>${nameValue}</strong> - ${emailValue}<br/><em>Message:</em> ${messageValue}`;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = " ✖";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.style.color = "red";
    deleteBtn.style.cursor = "pointer";
    deleteBtn.onclick = function () {
      li.remove();
    };

    li.appendChild(deleteBtn);
    userList.appendChild(li);

    const message2 = document.getElementById("empty");
    message2.textContent = "User added successfully!";
    message2.style.color = "green";

    setTimeout(() => {
      message2.textContent = "";
    }, 3000);

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
}