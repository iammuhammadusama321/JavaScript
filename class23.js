//For loop with break and continue (Iterations)

//for

/*for(i = 0; i<=10; i++){

    const element = i
    
    if(i == 5){
    //console.log("5 is the best number")
    }

    //console.log(i)
}*/

/*for (let i = 1; i <=10; i++) {

    //console.log(`Outer loop value ${i}`)
    
    for (let j = 1; j <=10; j++) {
        
        //console.log(`Inner loop value ${j} and inner loop value ${i}`)
        //Print table

        console.log(i + "*" + j + "=" + i*j)

    }    
}   */

//Break and Continue

//Break

for(i =1; i<=10; i++){

    if(i==5){

        console.log("Detected 5")
        break
    }

    console.log(`Value of i is ${i}`)

}

//continue

for(j =1; j<=10; j++){

    if(j==5){

        console.log("Detected 5")
        continue
    }

    console.log(`Value of j is ${j}`)
}

/*when we use break the further execution stops, and when we use continue it stops one time 
and then continue the further execution*/