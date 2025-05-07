{

    // Problem-1  --> 
    const formatString = (input: string, toUpper?: boolean) : string => {
        if(toUpper !== false){
          return  input.toUpperCase();
        }

        else {
            return input.toLocaleLowerCase();
        }

        // return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
    };



    console.log(formatString("Hello"));        // Output: "HELLO"
    console.log(formatString("Hello", true));  // Output: "HELLO"
    console.log(formatString("Hello", false)); // Output: "hello"
}
