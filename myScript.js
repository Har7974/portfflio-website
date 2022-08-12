
const cur=document.getElementById('fav_language');
const rateEle=document.getElementsByClassName("rate_section")[0];
console.log(rateEle)

const handle=(curVal)=>{
   if(curVal){
    console.log(rateEle);
    rateEle.style.display="none";
   }else{
    rateEle.style.display="inline";
   }
}