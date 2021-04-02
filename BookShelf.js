const books=["Eloquent Javascript by Marijn Haverbeke", "The Hobbit by J.R.R Tolkein", "Steelheart by Brandon Sanderson", 
"HTML and CSS: Design and Build Websites by Jon Duckett", "Fahrenheit 451 by Ray Bradbury", "Digital Minimalism by Cal Newport"];

//Randomly generates a number between the array length and 0
//which will selects the elements of the books array
function Num(arr){

   return Math.floor((Math.random()*arr.length)+0)
  
}

//The user can only borrow up to 6 books from the sehlf
function BorrowBooks(arr){
    const newBooks=[];
    
    for (let i=0; i<arr.length; i++){
        let num=Num(arr);
        newBooks[i]=arr[num];
    }

    //Removes the duplicates of newBooks array and returns the results 
    return [...new Set(newBooks)];

}

console.log(BorrowBooks(books));
