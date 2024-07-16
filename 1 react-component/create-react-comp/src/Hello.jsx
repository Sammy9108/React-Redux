function Hello(){
   let Name ='Sachin';
   let FullName = () =>{
      return 'Sachin Ramesh Tendulakar';
   }
   let AgeNum = 20;

return <h3>My name is {Name}.<br></br>
   Full name is {FullName()}.<br></br>
   Age : {AgeNum}</h3>
}

export default Hello;