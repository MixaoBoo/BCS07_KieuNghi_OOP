import Person from "./Person.js";
import { renderUserType } from "../controllers/index.js";
import removeVietnameseTones from "../controllers/helper.js";

export default class ListPerson {
  constructor() {
    this.listPerson = [];
  }

  addPerson = (person) => {
    this.listPerson.push(person);
  };
  renderTable = () => {
    let content = this.listPerson.map((item, index) => {
      let person = new Person();
      Object.assign(person, item);
      let { hoTen, diaChi, ma, email, doiTuong, privateInfo } = person;

      return `<tr key=${index}>
            <td>${ma}</td>
            <td>${hoTen}</td>
            <td>${email}</td>
            <td>${diaChi}</td>
            <td>${doiTuong}</td>
            <td>${privateInfo}</td>
            <td>
            <button class="btn btn-danger" onclick="removePerson('${ma}')">Xoá</button>
            <button class="btn btn-warning" onclick="getInfoDetail('${ma}')">Chỉnh sửa</button>
            </td>
          </tr>`;
    });
    document.getElementById("tbody").innerHTML = content;
  };
  luuLocal() {
    localStorage.setItem("listPerson", JSON.stringify(this.listPerson));
  }
  layLocal() {
    let listLocal = JSON.parse(localStorage.getItem("listPerson"));
    // Kiểm tra xem có value bên dưới local hay không, nếu có mới gán giá trị vào mảng listPerson
    if (listLocal) {
      this.listPerson = [...listLocal];
      this.renderTable();
    }
  }
  removePerson = (id) => {
    let newList = this.listPerson.filter((person) => person.ma !== id);
    this.listPerson = newList;
    this.renderTable();
  };
  getInfoDetail(id) {
    let person = this.listPerson.find((item) => item.ma == id);
    if (person) {
      document.getElementById("addPerson").click();
      let arrInput = document.querySelectorAll(
        "#formInput .main-input, #doiTuong"
      );
      for (let item of arrInput) {
        let { id } = item;
        item.value = person[id];
      }
      renderUserType();

      let arrInputDoiTuong = document.querySelectorAll("#idDoiTuong input");
      for (let item of arrInputDoiTuong) {
        let { id } = item;
        item.value = person.infoDetail[id];
      }
    }
  }
  editInfo(person) {
    let index = this.listPerson.findIndex((item) => item.ma == person.ma);
    if (index != -1) {
      this.listPerson[index] = person;
      console.log("first: ", this.listPerson[index]);
      this.renderTable();
      this.luuLocal();
      document.getElementById("btnClose").click();
    }
  }
  searchPerson(keyword) {
    let newKeyWord = removeVietnameseTones(keyword);
    let arrSearch = this.listPerson.filter((item) => {
      let newName = removeVietnameseTones(item.hoTen);
      return newName
        .toLowerCase()
        .trim()
        .includes(newKeyWord.toLowerCase().trim());
    });
    this.listPerson = [...arrSearch];
    this.renderTable();
    if (keyword.length < 1) {
      this.layLocal();
    }
  }
  searchTypePerson(keyword) {
    this.layLocal();
    let arrSearch = this.listPerson.filter((item) =>
      item.doiTuong.includes(keyword)
    );
    this.listPerson = [...arrSearch];
    this.renderTable();
    if (keyword === "all") {
      this.layLocal();
    }
  }
  orderName = () => {
    let newArr = this.listPerson.sort((a, b) => a.hoTen.localeCompare(b.hoTen));
    this.listPerson = newArr;
    this.renderTable();
    // Sắp xếp tạm để người dùng xem chứ không lưu Local.
  };
}
