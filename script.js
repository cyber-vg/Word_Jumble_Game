const msg =document.querySelector('.msg');
const guess=document.querySelector('input');
const btn = document.querySelector('.btn');
let play =false;
let newWords;
let randwords;
let sword= ['python','java','c++','pearl','swift','javascript','angular','ruby','android','reactjs'];
const creteNewWords= () =>{
let ranNum =Math.floor(Math.random()*sword.length)
let newTempsword =sword[ranNum];
return newTempsword;

}
const scramblewords=(arr) =>{
  for(let i =arr.length-1;i>=0;i--){
    let temp =arr[i];
    let j = Math.floor(Math.random()*(i+1));
    arr[i]=arr[j]
    arr[j]= temp;
  }
  return arr;
}
btn.addEventListener('click', function(){
if(!play){
    play=true;
    btn.innerHTML = "Guess";
    guess.classList.toggle('hidden');
      newWords= creteNewWords();
      randwords=scramblewords(newWords.split("")).join("");
      msg.innerHTML=(`guess the word ${randwords}`);
    }
    else{
      let tempword=guess.value;
      if(tempword == newWords){
        play=false;
        msg.innerHTML=`awsome It's correct.It is ${newWords}`;
        btn.innerHTML=`Start again`;
        guess.classList.toggle('hidden');
        guess.value = "";
      }
      else{
        msg.innerHTML=`Try again.${randwords}`; 
        btn.innerHTML=`Try again !`;
        btn.addEventListener('click',function(){
          
          window.location.reload();
        })
      }
    }
})