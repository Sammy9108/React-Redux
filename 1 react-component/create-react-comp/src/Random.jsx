function Random(){

   let number1 = Math.random()*50;

  return <h2 style={{'background-color':'#7765'}}>Random Number is : {Math.round(number1)}</h2>
}


export default Random;