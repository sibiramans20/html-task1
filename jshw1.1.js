function delayGreeting(){
    return new Promise((resolve)=>
    {
        setTimeout(()=>
       {
        resolve("Hello!");
       },1000 );
    });
}

async function greeting(){
    const data=await delayGreeting();
    console.log(data);
}

greeting();