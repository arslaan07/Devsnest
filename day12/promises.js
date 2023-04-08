let moneyLended = 10_000;

let promise = new Promise((resolve,reject) => {

    setTimeout(() => {
        resolve(10_500);
        //  reject(new Error("I lied,you are not getting any money!"));
    }, 3000) //represent 2 days
})

promise
    .then((money) => {
        if(money === moneyLended) {
            console.log("Yay!, I got my money back");
        }
        return money;
        //this is the fulfilled state i.e.,
        //this code executes if promise is fulfiled
    }).then(moneyReceived).
    then(extraMoney => {
        if(extraMoney){
            console.log("Wow!My friend is generous");
        }
        console.log("Deposit the lended amount back to bank");
    }).catch(error => {
        console.error(error.message);
        //this is the rejected state i.e.,
        //this code executes if promise is broken
    })

    //pending state--the time till we wait for the promise
    //here it is 3000ms


    //settled state--it represents the outcome,
    //whether fulfilled or failed

    function moneyReceived(amountReceived) {
        return new Promise((resolve,reject) => {
            if(amountReceived > moneyLended)
                resolve(amountReceived - moneyLended);
        
            else if(amountReceived < moneyLended)
                reject(new Error("Oh wait, I havent received the entire amount"));
            else
                resolve(0);
        })
    }