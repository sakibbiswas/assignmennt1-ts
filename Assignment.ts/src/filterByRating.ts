{
    // Problem 2

    type Items={
        title: string;
        rating: number; 
    }

    const filterByRating = (items: Items[]): Items[] => {
        return items.filter(item => item.rating >= 4);
      };
      
      // Given Example usage
      const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      console.log(filterByRating(books)); 
}