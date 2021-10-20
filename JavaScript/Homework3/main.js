function getArrayDepth(value) {
    return Array.isArray(value) ? 
      1 + Math.max(...value.map(getArrayDepth)) :
      0;
  }
  
  
  
  let array = [10, [25, 13], [14, [55]], 2];

  console.log(getArrayDepth(array))