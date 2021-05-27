const fromDollartoYen = (Dollar)=>{
    let Yen = 0.83*127.9*Dollar;
    return Yen;
}


const fromEuroToDollar = (Euro)=>{
   let Dollar = Euro*1.2;
    return Dollar;
}

const fromYanToPound = (Yen)=>{
    let Pound = ((1/127)*0.8*Yen)
    return Pound;
    }

module.exports = { fromEuroToDollar, fromDollartoYen, fromYanToPound };