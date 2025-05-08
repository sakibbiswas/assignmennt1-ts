{
    //Peoblem 7
    
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      const getDayType = (day: Day): string => {
        if( day === Day.Saturday || day === Day.Sunday){
            return "Weekend";
        }
        
        else{
            return "Weekday"
        }
      
      }
      //Given Example Usage:
      console.log(getDayType(Day.Monday));   // Output: "Weekday"
      console.log(getDayType(Day.Sunday));   // Output: "Weekend"
      

}