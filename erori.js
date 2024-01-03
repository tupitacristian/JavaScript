try{
    if(number === 1){
        console.log("Number are valoare 1");
    }
}catch(error){
    console.log("Something happened: " + error.message);
}finally{
    console.log("Finally a fost executat."); 
}