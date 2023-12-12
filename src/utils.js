const getRandomInt = (min, max) => {
    const minIntNum = Math.ceil(min);
    const maxIntNum = Math.floor(max);
    return Math.floor(Math.random() * (maxIntNum - minIntNum + 1)) + minIntNum;
  };
  
  export default getRandomInt;