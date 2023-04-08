class A{
    hoten:string    
}

class B extends A{ //B thua huong tu A
    namsinh:number
}

var teo:A = new A()
teo.hoten = "AAAA"

var tun:B = new B()
tun.hoten = "BBBB"
tun.namsinh = 2000

console.log(teo.hoten)
console.log(tun.hoten, tun.namsinh)