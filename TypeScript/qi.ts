const numbers=[2,4,23,42]
const squaremapping=numbers.map((num)=>num*num);
   
    let sum=0;
    for(const num of squaremapping){
        sum+=num;
    }
    console.log(sum/squaremapping.length);

