//Scope level and mini hosting

//nested function

function one() {

    const username = "Ryan"
    
    function two() { 
        
        //console.log(username)
    
    }
    
    two()
    
    }
    one()
    
    //example
    
    if(true){
    
        const usernametwo = "Miller"
    
        if(usernametwo === "Miller"){
    
            const website = "webWiseworks"
            //console.log(usernametwo + " " , website)
        }
    
        //console.log(website)
    }
    
    //console.log(usernametwo)
    
    // ++++++++++++++++++++Interesting++++++++++++++++++++
    
    console.log(addNumone(5))
    
    function addNumone(num){
    
        return num + 1
    
    }
    
    addNumtwo(3)
    
    function addNumtwo(num){
    
        return num + 1
    
    }
    
    //can't access in function 2
    
    
    
    
    
    