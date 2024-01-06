function viataInSaptamani(ani){
    var aniRamasi = 90 - ani; // 
    var zile = aniRamasi * 365;
    var saptamani = aniRamasi * 52;
    var luni = aniRamasi * 12;

    console.log("Mai ai " + zile + " zile, " + saptamani + " saptamani, sau " + luni + " luni ramase.");
}

viataInSaptamani(31);