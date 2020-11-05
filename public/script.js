function convertToCat(nameList) {
    // process your restaurants here!
    const nameLi = [];
    const nameObj = {};
    var i;
    for (let i=0; i<nameList.length; i++) {
        nameLi.push(nameList[i].category);
      if (!nameObj[nameLi[i]]) {
        nameObj[nameLi[i]] = 0;
      }
      nameObj[nameLi[i]] += 1;
      // console.log(restaurantList[i].category);
    }
    //   console.log(catObj);
    const list = Object.keys(nameObj).map((m) => ({
      y: nameObj[m],
      label: m
    }));
  
    return list;
  }


function getRestaurantArr(jsonFromServer){
    console.log('jsonFromServer',jsonFromServer);
    
    const name = [];
    fetch(jsonFromServer).then(arr)
}