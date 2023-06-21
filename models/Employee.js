import Person from "./Person.js";

class Employee extends Person {
    super(hoTen, diaChi, ma, email);
    constructor(ngayLamViec, luongNgay) {
        this.ngayLamViec = ngayLamViec;
        this.luongNgay = luongNgay;
    }
    tinhLuong = () => {
        return this.ngayLamViec * this.luongNgay;
    }
}