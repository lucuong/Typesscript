class Hocsinh{
    maso:string;
    hoten:string;
    namsinh:number;
    private tien:number;

    constructor(m:string, h:string, n:number){
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
    }

    setTien(n:number){
        if(n>=0){
            this.tien=n;
        }else{
            this.tien=0;
        }
    }

    getTien(){
        return this.tien;
    }

}

var teo:Hocsinh = new Hocsinh("HS001", "Nguyen Van Teo", 2000);
console.log(teo.maso, teo.hoten, teo.namsinh);

teo.setTien(-100);
console.log(teo.getTien());

teo.setTien(50);
console.log(teo.getTien());
