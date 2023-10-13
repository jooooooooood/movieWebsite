document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code here
  
    let allMovies = [];

    let resultHTML = "";
  
    class Movie {
      constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
      }
    }
  
    let addMovie = (movie) => {
      allMovies.push(movie);
      updateResult();
    }
  
    let printMovies = () => {
      let totalMovies = allMovies.length;
      resultHTML += `<br>---------------<br>`;
      resultHTML += "Printing All Movies... <br> <br>";

      allMovies.forEach( movie => resultHTML += `${movie.title}` + ', rating of ' + `${movie.rating}` + 
      ', havewatched: ' + `${movie.haveWatched}` + '<br> <br>');

      resultHTML += `You have ${totalMovies} movies in total`;
      resultHTML += `<br>---------------<br>`;
      updateResult();
    }
  
    let highRatings = (rating) => {
      let highRatedMovies = allMovies.filter(movie => movie.rating > rating);
      resultHTML += `Printing movies that have a higher rating than  ${rating} <br> <br>`;
      highRatedMovies.forEach(movie => {
        resultHTML += `Title: ${movie.title}, Rating: ${movie.rating}<br>`;
      });
      resultHTML += `<br> In total there are  ${highRatedMovies.length} matches`;
      document.getElementById('result').innerHTML = resultHTML;
      updateResult();
    }
  
    let changeWatched = (title) => {
        title.haveWatched = !title.haveWatched;
        resultHTML += `<br>---------------<br>`;
        resultHTML += `Changing watch status of ${title.title}<br>---------------<br>`;
        updateResult();
      }
      
  
    function updateResult() {
        document.getElementById('result').innerHTML = resultHTML;
    }
  
    // Test code - DO NOT DELETE
    let x = new Movie("Spiderman", 3, true);
    let y = new Movie("Citizen Kane", 4, false);
    let z = new Movie("Zootopia", 4.5, true);
  
    allMovies.push(x, y, z);
  
    let movie1 = new Movie("Parasite", 2, false);
    addMovie(movie1);
  
    changeWatched(x);
  
    // Call the functions and update the result on the webpage
    printMovies();
    highRatings(3.5);
  });
  