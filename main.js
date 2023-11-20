let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confrimPassword = document.getElementById("confrim");
let region = document.getElementById("region");
function validation() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([gmail|email])+\.(com)$/;
  // username
  if (username.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Username";
    return false;
  } else if (username.value.length <= 4 || username.value.length >= 8) {
    document.getElementById("result").innerHTML =
      "Enter username between 4 and 8 characters";
    return false;
  }
  //   email
  else if (email.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Email";
    return false;
  } else if (!reg.test(email.value)) {
    document.getElementById("result").innerHTML = " Your email isn`t valid";
    return false;
  }
  //   password
  else if (password.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Password";
    return false;
  } else if (password.value.length <= 4 || password.value.length >= 12) {
    document.getElementById("result").innerHTML =
      "Enter password between 4 and 12 characters";
    return false;
  }
  //   confrimPassword
  else if (confrimPassword.value == "") {
    document.getElementById("result").innerHTML = "Enter Your Confrim Password";
    return false;
  } else if (password.value !== confrimPassword.value) {
    document.getElementById("result").innerHTML = "Password doesn`t matched";
    return false;
  } else {
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box1").innerHTML =
      "<h1>Welcome</h1> <p style='margin-top:80px'>Your registration was successful</p>";
  }
}
