import Employee from "../models/Employee.js";
import Student from "../models/Student.js";
import ListPerson from "../models/ListPerson.js";
import Person from "../models/Person.js";

let listPerson = new ListPerson();
listPerson.layLocal();
document.getElementById("btnSave").addEventListener("click", () => {
  let doiTuong = document.getElementById("doiTuong").value;
  let arrInput = document.querySelectorAll("#formInput .main-input");
  let person = new Person();
  for (let item of arrInput) {
    let { id, value } = item;
    person[id] = value;
  }
  person.doiTuong = doiTuong;
  person.privateInfo = getPrivateInfo(doiTuong).privateInfo;
  person.infoDetail = getPrivateInfo(doiTuong).infoDetails;
  console.log(person);
  listPerson.addPerson(person);
  console.log(listPerson.listPerson);
  listPerson.renderTable();
  listPerson.luuLocal();
  document.getElementById("btnClose").click();
});
const getPrivateInfo = (type) => {
  switch (type) {
    case "Student":
      let diemToan = document.getElementById("diemToan").value;
      let diemLy = document.getElementById("diemLy").value;
      let diemHoa = document.getElementById("diemHoa").value;
      let student = new Student(diemToan, diemLy, diemHoa);
      let tinhDiemTrungBinh = student.tinhDiemTrungBinh();
      return {
        privateInfo: `Điểm trung bình: ${tinhDiemTrungBinh}`,
        infoDetails: { diemToan, diemLy, diemHoa },
      };
    case "Employee":
      let luongNgay = document.getElementById("luongNgay").value * 1;
      let ngayLam = document.getElementById("ngayLam").value * 1;
      let employee = new Employee(ngayLam, luongNgay);
      let tinhLuong = employee.tinhLuong();
      return {
        privateInfo: `Tiền lương: ${tinhLuong}`,
        infoDetails: { luongNgay, ngayLam },
      };
    case "Customer":
      let tenCty = document.getElementById("tenCty").value;
      let hoaDon = document.getElementById("hoaDon").value;
      let danhGia = document.getElementById("danhGia").value;
      return {
        privateInfo: `
        <p>Tên công ty: ${tenCty}</p>
        <p>Hoá đơn: ${hoaDon}</p>
        <p>Đánh giá: ${danhGia}</p>
        `,
        infoDetails: { tenCty, hoaDon, danhGia },
      };

    default:
      return {
        privateInfo: "",
        infoDetails: {},
      };
  }
};
export const renderUserType = () => {
  let doiTuong = document.getElementById("doiTuong").value;
  if (doiTuong == "Student") {
    let content = `
        <div class="row">
        <div class="mb-3 col-4">
          <label for="" class="form-label">Điểm toán</label>
          <input
            type="number"
            class="form-control is-invalid" required
            name=""
            id="diemToan"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbDiemToan" class="text-error"></p>
        </div>
        <div class="mb-3 col-4">
          <label for="" class="form-label">Điểm lý</label>
          <input
            type="number"
            class="form-control is-invalid" required
            name=""
            id="diemLy"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbDiemLy" class="text-error"></p>
        </div>
        <div class="mb-3 col-4">
          <label for="" class="form-label">Điểm hoá</label>
          <input
            type="number"
            class="form-control is-invalid" required
            name=""
            id="diemHoa"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbDiemHoa" class="text-error"></p>
        </div>
        </div>
        `;
    document.getElementById("idDoiTuong").innerHTML = content;
  } else if (doiTuong == "Employee") {
    let content = `
        <div class="row">
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Lương ngày</label>
                    <input
                      type="text"
                      class="form-control is-invalid" required
                      name=""
                      id="luongNgay"
                      aria-describedby="helpId"
                      placeholder=""
                    />
                    <p id="tbLuongNgay" class="text-error"></p>
                  </div>
                  <div class="mb-3 col-6">
                    <label for="" class="form-label">Số ngày làm</label>
                    <input
                      type="text"
                      class="form-control is-invalid" required
                      name=""
                      id="ngayLam"
                      aria-describedby="helpId"
                      placeholder=""
                    />
                    <p id="tbNgayLam" class="text-error"></p>
                  </div>
                </div>
        `;
    document.getElementById("idDoiTuong").innerHTML = content;
  } else {
    let content = `
        <div class="row">
        <div class="mb-3 col-4">
          <label for="" class="form-label">Tên công ty</label>
          <input
            type="text"
            class="form-control is-invalid" required
            name=""
            id="tenCty"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbTenCty" class="text-error"></p>
        </div>
        <div class="mb-3 col-4">
          <label for="" class="form-label">Trị giá hoá đơn</label>
          <input
            type="text"
            class="form-control is-invalid" required
            name=""
            id="hoaDon"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbHoaDon" class="text-error"></p>
        </div>
        <div class="mb-3 col-4">
          <label for="" class="form-label">Đánh giá</label>
          <input
            type="text"
            class="form-control is-invalid" required
            name=""
            id="danhGia"
            aria-describedby="helpId"
            placeholder=""
          />
          <p id="tbDanhGia" class="text-error"></p>
        </div>
      </div>
        `;
    document.getElementById("idDoiTuong").innerHTML = content;
  }
};
renderUserType();
window.removePerson = (id) => {
  listPerson.removePerson(id);
  listPerson.luuLocal();
};
window.getInfoDetail = (id) => {
  listPerson.getInfoDetail(id);
};
window.handleChangeUserType = () => {
  renderUserType();
};

document.getElementById("btnUpdate").onclick = () => {
  let doiTuong = document.getElementById("doiTuong").value;
  let arrInput = document.querySelectorAll("#formInput .main-input");
  let person = new Person();
  for (let item of arrInput) {
    let { id, value } = item;
    console.log(id, value);
    person[id] = value;
  }
  person.doiTuong = doiTuong;
  person.privateInfo = getPrivateInfo(doiTuong).privateInfo;
  person.infoDetail = getPrivateInfo(doiTuong).infoDetails;
  listPerson.editInfo(person);
};
window.searchPerson = (event) => {
  let value = event.target.value;
  listPerson.searchPerson(value);
};
window.searchTypePerson = (event) => {
  let value = event.target.value;
  console.log(value);
  listPerson.searchTypePerson(value);
};
window.clickToOrderName = () => {
  listPerson.orderName();
};
