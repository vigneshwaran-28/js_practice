
// function a(){
//     let ar=10;
//     function b(){
//         let ar=8;
//         console.log(this);
//     }
//     b();
// }
// a();

let a={
    name:"vignesh",
    getName:function(state,country){
        console.log(this.name,state,country);
    }
}

let b={
    name:"linga"
}
a.getName.call(b,['tamil','india']);
