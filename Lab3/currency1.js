let canadiand = 2.59;
let us = 3.64;
let eu = 4.24;
let dk = 0.57;
let jenów = 0.024;

function roundTwoDecimals(amount) { 
    return Math.round(amount * 100) / 100; 
}

exports.canadianToPLN = function(canadian){

    return roundTwoDecimals(canadian * canadiand);
}

exports.USToPLN = function(usa) { 
    return roundTwoDecimals(usa * us); 
}

exports.EUToPLN = function(euro) { 
    return roundTwoDecimals(euro * eu); 
}

exports.DKKToPLN = function(dkk) { 
    return roundTwoDecimals(dkk * dk); 
}

exports.JENToPLN = function(jen) { 
    return roundTwoDecimals(jen * jenów); 
}