let storecurrenthour=21;
const getStoreStatus=(hour)=>{
    if (hour >=9 && hour <18){
        return"open for business";
    }else{
        return "sjshfshdfdhhsd";

        }

    };

const dynamicMessage=getStoreStatus(storecurrenthour);
console.log(dynamicMessage);
