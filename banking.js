function deposite(){
    // deposite Money
    const deposite= document.getElementById("deposite-value");
    const depositeValue= parseFloat(deposite.value);
    if(depositeValue>0){
      const depositeOutput= document.getElementById("deposite-Output");
    depositeOutput.innerText=  Number( depositeOutput.innerText) + Number(depositeValue);
    deposite.value= "";
    
// Total Balance Money

  const BalanceOutput= document.getElementById("Banlance-Output");
  BalanceOutput.innerText= Number (BalanceOutput.innerText) + Number (depositeValue);
    }
    

}
//   windraw Money

function windraw(){
const windraw= document.getElementById("windraw-value");
const windrawValue= parseFloat (windraw.value);
if(windrawValue>0){
const WindrawOutput= document.getElementById("Windraw-Output");
WindrawOutput.innerText= Number( WindrawOutput.innerText) + Number (windrawValue)
windraw.value=" ";

// balance money

const BalanceOutput= document.getElementById("Banlance-Output");
BalanceOutput.innerText= Number (BalanceOutput.innerText)- Number (windrawValue) ;   
}   
}
