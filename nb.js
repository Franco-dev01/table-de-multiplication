var nb=prompt('entre un nombre svp');
/*let paire;
    for(var i=0;i<=30;i++){
        if(nb%2==0 && nb>=0){
            if(i%2 !=0){
            console.log(nb+'*'+i+'='+nb*i)
            } 
    }else if(nb%2!=0 && nb>=0){
            if(i%2 ==0){
            console.log(nb+'*'+i+'='+nb*i)
            };
    }else{
       console.log(nb)
    } 
}
*/
let x = (nb+1)%2;
for (let j=x;j<=30;j+=2){
    console.log(nb+'*'+j+'='+nb*j)
}