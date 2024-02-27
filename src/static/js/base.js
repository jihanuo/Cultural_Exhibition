
function onLogin() {
  var x = document.getElementById("login_password").value;
  var hash = md5(x);
  document.getElementById("login_password").value = hash;
}

function onRegister() {
  var name = document.getElementById("register_nickname").value;
  var x = document.getElementById("register_password").value;
  if (name == "" || x == "") {
    alert("不能为空");
    return false;
  } else {
    var y = document.getElementById("register_password_again").value;
    if (x != y) {
      alert("两次密码不一致");
      return false;
    } else {
      var hash = md5(x);
      document.getElementById("register_password").value = hash;
      // document.getElementById("register_password_again").value = hash;
      return true;
    }
  }
}