const randomColor = function () {
    let hex = '123456789ABCDEF';
    let color = '#';
  
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  
  const startChangingColors = function () {
    const changeBgcolor = function () {
      document.body.style.backgroundColor = randomColor();
    };
    if (!intervalId) {
      intervalId = setInterval(changeBgcolor, 1000);
    }
  };
  
  const stopChangingColors = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColors);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColors);
  