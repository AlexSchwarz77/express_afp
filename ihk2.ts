function generateReport(vka: Array<any>){
   
   let gesamtSummeNetto: number = 0.0;
   let gesamtSummeProv: number = 0.0;
   let gesamtGesamtSummeNetto: number = 0.0;
   let gesamtGesamtSummeProv: number = 0.0;
   let summeNetto: number = 0.0;
   let summeProv: number = 0.0;
   let counterA: number = 0; 
   let counterC: number = 0;
   let max = 0;
   let maxArr = new Array();
   
   
   for(let i = 0; i < vka.length; i++){
        if(vka[i][0] == vka[i+1][0]){
            if(counterA = 0){
                printAgentData(getAgentData(vka[i][0]));
                counterA = 1;
            }
            gesamtSummeProv += getOrderData(vka[i][2]).getProv();
            gesamtSummeNetto += getOrderData(vka[i][2]).getNetto();
             if(vka[i][1] == vka[i+1][1]){
                if(counterC == 0){
                    printCustomerData(getCustomerData(vka[i][1]));
                    counterC = 1;
                }
                if(counterC == 1){
                    printOrderData(getOrderData(vka[i][2]))
                }
               summeProv += getOrderData(vka[i][2]).getProv();
               summeNetto += getOrderData(vka[i][2]).getNetto();
             }else {
                if(counterC = 0){
                    printCustomerData(getCustomerData(vka[i][1]));
                    counterC = 1;
                }
                if(counterC == 1){
                    printOrderData(getOrderData(vka[i][2]))
                }
               summeProv += getOrderData(vka[i][2]).getProv();
               summeNetto += getOrderData(vka[i][2]).getNetto();
               counterC = 0;
               
               printSum("Summe", summeNetto, summeProv);
               
             }
        } else {
        gesamtSummeProv += getOrderData(vka[i][2]).getProv();
        gesamtSummeNetto += getOrderData(vka[i][2]).getNetto();
        if(counterA = 0){
                printAgentData(getAgentData(vka[i][0]));
                counterA = 1;
            }
        counterA = 0;
        if(max > summeNetto){
                maxArr[0] = vka[i][0];
                maxArr[1] = gesamtSummeNetto;
               }
        printSum("Vertretter Gesamt", gesamtSummeNetto, gesamtSummeProv);
        }
        if(vka[i][0] !== vka[i+1][0]){
            gesamtGesamtSummeNetto += gesamtSummeNetto;
            gesamtGesamtSummeProv += gesamtSummeProv;
            gesamtSummeNetto = 0;
            gesamtSummeProv = 0;
        }    
   } 

printSum("Summen Gesamt", gesamtGesamtSummeNetto, gesamtGesamtSummeProv);
printMaxText(maxArr[0], maxArr[1]);
}

function printAgentData(arg0: any) {
    throw new Error("Function not implemented.");
}
function getAgentData(arg0: any): any {
    throw new Error("Function not implemented.");
}

function getOrderData(arg0: any) {
    throw new Error("Function not implemented.");
}

function printCustomerData(arg0: any) {
    throw new Error("Function not implemented.");
}
function getCustomerData(arg0: any) {
    throw new Error("Function not implemented.");
}

function printSum(arg0: string, summeNetto: number, summeProv: number) {
    throw new Error("Function not implemented.");
}

function printOrderData(arg0: void) {
    throw new Error("Function not implemented.");
}

function printMaxText(arg0: any, arg1: any) {
    throw new Error("Function not implemented.");
}

