function deposite(){
    // deposite Money
    
    const deposite= document.getElementById("deposite-value");
    const depositeValue= deposite.value;
    const depositeOutput= document.getElementById("deposite-Output");
    depositeOutput.innerText=  Number( depositeOutput.innerText) + Number(depositeValue);
    deposite.value= " ";

// Total Balance Money

  const BalanceOutput= document.getElementById("Banlance-Output");
  BalanceOutput.innerText= Number (BalanceOutput.innerText) + Number (depositeValue);

}
//   windraw Money

function windraw(){
const windraw= document.getElementById("windraw-value");
const windrawValue= windraw.value;
const WindrawOutput= document.getElementById("Windraw-Output");
WindrawOutput.innerText= Number( WindrawOutput.innerText) + Number (windrawValue)
windraw.value=" ";

// balance money

const BalanceOutput= document.getElementById("Banlance-Output");
BalanceOutput.innerText= Number (BalanceOutput.innerText)- Number (windrawValue) ;   
    
}
