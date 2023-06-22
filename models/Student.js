export default class Student {
  constructor(diemToan, diemLy, diemHoa) {
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
  }
  tinhDiemTrungBinh = () => {
    return (this.diemToan * 1 + this.diemLy * 1 + this.diemHoa * 1) / 3;
  };
}
