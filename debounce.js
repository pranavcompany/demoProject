const getData = () =>{
  console.log("Pranav...");
}

function doDebounce(fun, delay){ 
let timer;
  return function (){
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fun.apply(context,[args])
    },delay)
  }
}

const getData = doDebounce(getData,300);