export const sortData=(data)=>{
    const sortedData=[...data]

    sortedData.sort((firstCountry,secondCountry)=>{
        if(firstCountry.cases>secondCountry.cases){
            return -1;
        }

        else{
            return 1;
        }
    })

    return sortedData
}