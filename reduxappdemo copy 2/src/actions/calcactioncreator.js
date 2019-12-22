export const calcActionCreator = (firstNumber, secondNumber, operation)=>{
    return {
        payLoad:{first:firstNumber, second:secondNumber},
        type:operation
    }
}