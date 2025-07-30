function delaymessage(){
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            resolve("Done...");
        },2000);
    });
}

async function message(){
    try{
        const data=await delaymessage();
        console.log(data);
    }
    catch(Error){
        console.log("The code has an Error");

    }
}
message();