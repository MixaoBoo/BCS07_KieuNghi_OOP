import Person from "./Person.js";

class Customer extends Person {
    super(hoTen, diaChi, ma, email);
    constructor(tenCty, hoaDon, danhGia) {
        this.tenCty = tenCty;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;
    }
}