function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Please fill all fields");
  }
}
