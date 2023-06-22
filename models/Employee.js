export default class Employee {
    constructor(ngayLamViec, luongNgay) {
        this.ngayLamViec = ngayLamViec;
        this.luongNgay = luongNgay;
    }
    tinhLuong = () => {
        return (this.ngayLamViec * 1) * (this.luongNgay * 1);
    }
}