// Code your solution here


function findMatching(arr,matchFilter){
    //made both into uppercase to keep it the same case...
    return arr.filter((item) => item.toUpperCase() === matchFilter.toUpperCase());
}

function fuzzyMatch(arr,matchFilter){
    return arr.filter((item) => item.indexOf(matchFilter)===0 ? true : false);
}

function matchName(arr,matchFilter){
    return arr.filter((item) => item.name === matchFilter ? true : false);
}






