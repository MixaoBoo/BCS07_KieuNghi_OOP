export const checkEmpty = (checkInput, idThongBao, idInput) => {
  if (checkInput) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById(idInput).classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Vui lòng nhập trường dữ liệu này";
    document.getElementById(idInput).classList.add("is-invalid");
    return false;
  }
};

// Check email
export const checkEmail = (checkInput, idThongBao) => {
  let regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let hopLe = regexEmail.test(checkInput);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById("email").classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML = "Vui lòng nhập đúng Email";
    document.getElementById("email").classList.add("is-invalid");
    return false;
  }
};

// check tên: là chữ
export const checkName = (checkInput, idThongBao) => {
  let regexName = /^[\p{L}\s]+$/u;
  let hopLe = regexName.test(checkInput);
  console.log("idThongBao: ", idThongBao);
  if (hopLe) {
    document.getElementById(idThongBao).innerHTML = "";
    document.getElementById("hoTen").classList.remove("is-invalid");
    return true;
  } else {
    document.getElementById(idThongBao).innerHTML =
      "Tên người dùng không hợp lệ";
    document.getElementById("hoTen").classList.add("is-invalid");
    return false;
  }
};
