var Hocsinh = /** @class */ (function () {
    function Hocsinh(m, h, n) {
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
    }
    Hocsinh.prototype.setTien = function (n) {
        if (n >= 0) {
            this.tien = n;
        }
        else {
            this.tien = 0;
        }
    };
    Hocsinh.prototype.getTien = function () {
        return this.tien;
    };
    return Hocsinh;
}());
var teo = new Hocsinh("HS001", "Nguyen Van Teo", 2000);
console.log(teo.maso, teo.hoten, teo.namsinh);
teo.setTien(-100);
console.log(teo.getTien());
teo.setTien(50);
console.log(teo.getTien());
