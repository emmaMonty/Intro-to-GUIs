function filter(data, predicate){
    let total = [];
    for(const terms of data){ //for loop to go through data
        if(predicate(terms)){total.push(terms);} // if true add one
    }
    return total; //returns an array
}

function findLast(data, predicate){
    let final = null;
    for(const terms of data){ //for loop to traverse data
        if(predicate(terms)){final = terms;} // if true replace final 
    }
    return final; //return a single val
}

function map(data, callback){
    const newArray = [];  
    for(const terms of data){ // for loop to traverse
        const newTerm = callback(terms);//for every term perform callback task on
        newArray.push(newTerm); //Add to new array
    }
    return newArray; //returns an array 
}

function pairIf(data1, data2, callback){
    const newArray = []; 
    for(const terms of data1){ //going through all of data1   
        for(const parts of data2){ // going through all of data2
          const subArray = []; // new subarray
          if(callback(terms,parts)){//if true add to subarray
            subArray.push(terms,parts);
            newArray.push(subArray); //add subarray to final array
          }
        }
    }
    return newArray; //returns an array
}

function reduce(data1, reducer, initalValue){
    let value = null;
    for(const terms of data1){//go through data
      value=reducer(terms, initalValue); //call reducer
      initalValue = value; //change the inital Val
    }
    return value; //Return a value
}

function main(){
    
    let invalid = filter(transactions, x => x["amount"] === 0 ||x["amount"] === null || x["amount"] === undefined ||
    x["product"] !== "FIG_JAM" && x["product"] !== "FIG_JELLY" && x["product"] !== "SPICY_FIG_JAM" &&
    x["product"] !== "ORANGE_FIG_JELLY" ); //sets up what is invalid 
    let duplicate = pairIf(customers,customers,(customers1,customers2)=>  { //sets for duplicates
        return (customers1["emailAddress"] === customers2["emailAddress"] && customers1["id"] !== customers2["id"])});
    let money = findLast(transactions, x => x["amount"] > 200); //find the last transaction of 200
    let reduced = reduce(transactions,(num,dollar) =>{ 
        if(num["amount"] < 25){dollar.small.push(num);} //small trans.
        else if(num["amount"] > 24 && num["amount"] < 76){dollar.med.push(num);} //med trans.
        else{dollar.large.push(num);} //large trans.
        return dollar; //return an array
    } ,{small:[], med:[], large:[]});
    //final problem 
    let flitered = filter(transactions, x => x["amount"] > 200); //Only use the transaction over 200
    let paired = pairIf(flitered, customers, (filt, cust) => {
        return (filt["customerId"] == cust["id"])}); //combine the the transactions to customers
    let pairedReduced  = reduce(paired,(pairs, dups) => { //only finds unique customers
       for(const items of pairs){ //goes through all of the data to look for duplicates
            if(!dups.here.includes(pairs)){dups.here.push(pairs);} //push here is not duplicates
            else{dups.nothere.push(pairs);} //push here is it duplicated
       }
       return dups;
    } , {here:[], nothere:[]});
    let maped = map(pairedReduced.here, x => x[1]['firstName'] +" "+ x[1]['lastName']); //adds first and last name
    console.log(`Number of invalid transactions:${invalid.length}`); //filter 
    console.log(`Number of duplicate customers:${duplicate.length / 2}`); //pairIf
    console.log(`Most recent transaction over $200:$${money["amount"]}`); //findLast
    console.log(`Number of small transactions:${reduced.small.length}`);//reduce
    console.log(`Number of medium transaction:${reduced.med.length}`);
    console.log(`Number of large transactions:${reduced.large.length}`);
    console.log(`Customers with transactions over $200:`);
    console.log(pairedReduced.here);//customer ids
    console.log(`Names of customers with transactions over $200:`);
    console.log(maped); //customer names
}

main();
