
import React,{useState} from 'react';
import './App.css';



function App() {
  
  const arr_role=[
    {
      char:"viper",
     role:"controller",
     abilities:"snake Bite, toxic Screen,poision clud"
    },
    {
      char:"Beautiful",
     role:"Synonyms",
     abilities:"	Attractive,Pretty, Good-looking,	Pleasing,	Lovely"
    },
    {
     char:"Contact",
     role:"Synonyms",
     abilities:"Touch,	Proximity,	Communication,	Connection,	Relations"
    },
    {
     char:"Believe",
     role:"Synonyms",
     abilities:"Regard,	Trust,	Affirm,	Accept,	Think"
    },
    {
      char:"Successful",
      role:"antonyms",
      abilities:"	Destitute, Untoward"
     },
     {
      char:"Celebratede",
      role:"antonyms",
      abilities:"Unknown, Inglorious"
     },
    
  ];

   const arr_op=["sova","raza","viper","breach"];
    // var temp=0;
    var data= Math.floor(Math.random() * arr_op.length);
    var correct_op= Math.floor(Math.random() * arr_role.length);
    const options = [];
   var n=3;
   for(let i=0;i<=n;i++){
    var random_role = Math.floor(Math.random() * arr_role.length);
   

    if(random_role != data){
      if(i==data){
        options[data]=arr_role[correct_op].char
      }else{
        if(random_role==correct_op){
          random_role = Math.floor(Math.random() * arr_role.length);
          options[i] = arr_role[random_role].char;
        }else{
          options[i] = arr_role[random_role].char;
        }
        
      }
    }else{
      i--;
    }
    
    
   }
   console.log(options[1]);
   const [temp, setTemp] = useState(0);

   const count1 =()=>{
    if(arr_role[correct_op].char == options[0]){
      setTemp(temp+1);
    }else{
      setTemp(temp-1);
    }
   }
   const count2 =()=>{
    if(arr_role[correct_op].char== options[1]){
      setTemp(temp+1);
    }else{
      setTemp(temp-1);
    }
   }
   const count3 =()=>{
    if(arr_role[correct_op].char == options[2]){
      setTemp(temp+1);
    }else{
      setTemp(temp-1);
    }
   }
   const count4 =()=>{
    if(arr_role[correct_op].char == options[3]){
      setTemp(temp+1);
    }else{
      setTemp(temp-1);
    }
   }

   
  

   
return(
  <>
  <div className="main">
    <div className="up">guese the character</div>
    <div className="down">
      <p className="ablities">The charactor has the following abilities :</p>
      <p className="score">score :</p><p className='cr_score'> {temp} </p>
      <p>Role :{arr_role[correct_op].role}</p>
      <p className='ability'>{arr_role[correct_op].abilities}</p>
     <div className="option">
     <button className='op' onClick={count1}>{options[0]}</button>
     <button className='op' onClick={count2}>{options[1]}</button>
     <button className='op' onClick={count3}>{options[2]}</button>
     <button className='op' onClick={count4}>{options[3]}</button>
     </div>
    
    </div>
  </div>


</>
 );
}

export default App;
