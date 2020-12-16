function test(a){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
            resolve("time")
        },2000)   
    })
}

async function main(){
        console.log("1");
        let t= test(1);
        await t.then((v)=>{
            console.log(v)
        })
        await t.then((v)=>{
            console.log(v)
        })
        console.log("2");
}

async function main1(){
    return 1;
}
function main2(){
        console.log("1");
        let t= main1();
        t.then((v)=>{
            console.log(v);
        })
       
        console.log("2");
}
main2()