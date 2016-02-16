// var avgFunc =function (){
//   var sum = 0;
//   var args = Array.prototype.slice.call(arguments);
//   for(var i = 0; i < args.length; i ++){
//   sum += args[i];
//   }
//   var avg = (sum/args.length);
//   console.log(avg);
//   return avg;
// };
//
// +function forEach(array, callback){
//  +
//  +      for(var i = 0; i < array.length; i++) {
//  +        callback(array[i], i, array);
//  +      }
//  +
//  +}
//  +forEach(['flower', 'tree', 'turtle'], function (item) {
//  +  console.log(item + " is pretty");
//  +})
//  +var normalizedPicsArr = popPics.map(function (element) {
//   +    return {
//   +            thumbnail: element.data.thumbnail,
//   +            title: element.data.title,
//   +            score: element.data.score
//   +           };
//   +});
//   +var newPicsStr = "";
//   +normalizedPicsArr.forEach(function(el, idx, arr) {
//   +  newPicsStr += "<h2>" + el.title + " Score: " + el.score +"</h2>";
//   +  newPicsStr += "<img src='" + el.thumbnail + "'>";
//   +});
//   + document.getElementById("pictures").innerHTML = newPicsStr;


var sum = 0;
var avgPrice;
 items.forEach(function(elements){
   sum += elements.price;
 });
 avgPrice = (sum/items.length);
 console.log(avgPrice);

 document.getElementById("answer1").innerHTML = "Average Price $" + avgPrice;

// answer 2

var filteredPrices =items.filter(function (elements){
    return elements.price >= 14 && elements.price <=18;

 });
 console.log(filteredPrices);

var inBetweenPricesArr = filteredPrices.map(function (elements){
  return {
        title: elements.title,
        price: elements.price
  };
});

var newPriceStr ="";
inBetweenPricesArr.forEach(function(elements){
    newPriceStr +="<p>" + elements.title + ": $" + elements.price + "</p>";
});
document.getElementById("answer2").innerHTML = newPriceStr;

// answer 3

var currencyCode = items.filter(function(elements) {
  return elements.currency_code == "GBP";
});
console.log(currencyCode);
var currencyGbpArr = currencyCode.map(function(elements) {
  return {
    title: elements.title,
    price: elements.price
  };
});
var newCurrencyStr = "";
currencyGbpArr.forEach(function(elements) {
  newCurrencyStr += "<p>" + elements.title + ": $" + elements.price + "</p>";
});
document.getElementById("answer3").innerHTML = newCurrencyStr;

// answer 4
// materials

var madeOfWood = items.filter(function(elements) {
  return elements.materials.includes("wood");
});
console.log(madeOfWood);
var woodMaterialArr = madeOfWood.map(function(elements) {
  return {
    title: elements.title,
    price: elements.price
  };
});
var materialWoodStr = "";
woodMaterialArr.forEach(function(elements) {
  materialWoodStr += "<p>" + elements.title + ": $" + elements.price +
    "</p>";
});
document.getElementById("answer4").innerHTML = materialWoodStr;

// answer 5

var madeOfEight = items.filter(function(elements) {
  return elements.materials.length >= 8;
});
console.log(madeOfEight);
var eightMaterialsArr = madeOfEight.map(function(elements){
  return{
    title:elements.title,
    length:elements.materials.length,
    materials:elements.materials
  };
});
  var materialsOfEightStr ="";
  eightMaterialsArr.forEach(function(elements){
    materialsOfEightStr += "<p>" + elements.title + ": Is made with:" + elements.materials +
      "</p>";
  });
  document.getElementById("answer5").innerHTML = materialsOfEightStr;

  // answer 6
//   "who_made": "i_did",

var handMade = items.filter(function(elements) {
  return elements.who_made == "i_did";
});
console.log(handMade);
var meMadeArr = handMade.map(function(elements) {
  return {
    title: elements.title,
    price: elements.price
  };
});
var homeMadeStr = "";
meMadeArr.forEach(function(elements) {
  homeMadeStr += "<p>" + elements.title + ": $" + elements.price + "</p>";
});
document.getElementById("answer6").innerHTML = homeMadeStr;  
