const search_bar = document.getElementById('site')

const buttonn = document.getElementById('search-button')

buttonn.addEventListener('click', () => {
    const movie = search_bar.value.trim();

    fetch(`http://www.omdbapi.com/?apikey=57f1bb11&t=${encodeURIComponent(movie)}`)
        .then(res => res.json())
        .then(dt => {
            if (dt.Response === "True") {
                result.innerHTML = `
                 <h2>${dt.Title} (${dt.Year})</h2>
                 <img src="${dt.Poster}" alt="${dt.Title} poster" width="200">
                <p><strong>Plot:</strong> ${dt.Plot}</p>
                <p><strong>Genre:</strong> ${dt.Genre}</p>
                <p><strong>Rating:</strong> ${dt.imdbRating}</p>
                <p><strong>Director:</strong> ${dt.Director}</p>
                <p><strong>Actors:</strong> ${dt.Actors}</p>`;
            }

            else {
                result.innerHTML = "movie not found"
            }
        })
        .catch(error => {
            console.error("sorry bruv something is off ")
        })
})
