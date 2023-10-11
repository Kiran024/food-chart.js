// Read the JSON data from the food.json file
const foodData = require('./food.json');
function listFood(food=''){
  if(food.length>0){
    return foodData.filter((food) => food.category === food)
  }
  else{
    return foodData
  }
}

listFood("Protein")
listFood('Nuts')
listFood()


function sortCalorie(condition){
  if(condition==='asec'){
    return foodData.filter((food) => food.calorie < calorie);
  }
  else if(condition==="desc"){
    return foodData.filter((food) => food.calorie > calorie)
  }
}

sortCalorie('asec')
sortCalorie('desc')

function sort(type){
  if(type==="protein"){
    return foodData.sort((a, b) => b.protiens - a.protiens)
  }
  else if(type==="carb"){
    return foodData.sort((a, b) => a.cab - b.cab)
  }
}
sort('protein')
sort('carb')

function listItems(arr){
  for(let i=0;i<arr.length;i++){
    console.log(arr[i])
  }
}
const foodItems = ["Apple", "Banana", "Orange", "Pear", "Grapefruit", "Strawberry", "Blueberry", "Raspberry", "Broccoli", "Cauliflower", "Green Beans", "Asparagus", "Spinach", "Kale", "Sweetpotato", "Potato", "Carrot", "Onoin", "Egg", "Chicken Breast", "Salon", "Tuna", "Beef", "Pork", "Lamb", "Shrimp", "Quinoa", "Bread", "Pasta", "Milk", "Cheese", "Yogurt", "Butter", "Almonds", "Walnuts", "Peanuts", "Cashews"]

listItems(foodItems);

