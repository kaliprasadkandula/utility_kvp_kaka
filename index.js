function kvp(input,target)
{
    for(let key in input)
    {
        let value=input[key]
        if(key ===target){
            return value
        }
        let type=typeof value
        if(type==="object"||type==="array"){
            let output=kvp(value,target)
            if(output){
                return output
            }
        }
              
    }
}
module.exports={kvp}