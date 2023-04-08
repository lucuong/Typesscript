class Hocsinh{
    maso:string;
    hoten:string;
    namsinh:number;
}
var teo:Hocsinh = new Hocsinh();
teo.maso = "HS001";
teo.hoten = "Nguyen Van Teo";
teo.namsinh = 2000;

var tun:Hocsinh = new Hocsinh();
tun.maso = "HS002";
tun.hoten = "Tran Tun";
tun.namsinh = 2000;

console.log(teo.maso, teo.hoten, teo.namsinh);
console.log(tun.maso, tun.hoten, tun.namsinh);
