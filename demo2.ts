var ds: string[] = ["AAA", "BBB", "CCC"];
console.log(ds[1]);
console.log(ds.length);

//DUYET MANG JS
for(var i = 0; i<ds.length; i++){
    console.log(ds[i]);
}

//DUYET MANG: FOR IN/OFF
for(var k in ds){
    console.log("IN " +k); //0 1 2 tra ve key cua mang
} 
for (var x of ds){
    console.log("OF " + x); //AAA BBB CCC tra ve gia tri cua mang
}