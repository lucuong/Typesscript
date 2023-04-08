var a = 100;
var b = "Hello";
var c = true;
var d = { ho: "Pham", ten: "Khoa" };
console.log(a);
console.log(b);
console.log(c);
console.log(d.ho, d.ten);
{
    var m = 99;
    console.log(m); // bien m chi thay trong block nay, dung let bao mat tot hon
}
if (c) {
    console.log("OK");
}
else {
    console.log("BAD");
}
for (var i = 0; i <= 5; i++) {
    console.log("for " + i);
}
