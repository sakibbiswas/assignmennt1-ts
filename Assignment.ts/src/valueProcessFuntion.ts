{
    // Problem 5

    const processValue = (value: string | number): number => {

        if(typeof value === "string"){
           return value.length; 
        } 
        else{
            return value * 2;
        }
        
    }
    // Given Example usage
      console.log(processValue("hello")); // Output: 5
      console.log(processValue(10));      // Output: 20
      

}