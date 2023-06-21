import Person from "./Person.js";

class Student extends Person {
    super(hoTen, diaChi, ma, email);
    constructor(diemToan, diemLy, diemHoa) {
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    tinhDiemTrungBinh = () => {
        return (this.diemToan + this.diemLy + this.diemHoa) / 3;
    }
}