let cl = console.log;


const movieContainer = document.getElementById('movieContainer');

let result = "";
movieArr.forEach(movie => {
    if (!movie.backdrop_path) {
        return
    }else{
        result += `
                <div class="col-lg-3 col-md-6 col-xs-12">
                    <div class="card mb-4">
                        <figure class="movieCard">
                            <img src="https://image.tmdb.org/t/p/w1280${movie.backdrop_path}" alt="" class="${movie.original_title}">
                            <figcaption>
                                <div class="row">
                                    <div class="col-sm-10">
                                        <h3>${movie.title}</h3>
                                    </div>
                                    <div class="col-sm-2">
                                        ${movie.vote_average}
                                    </div>
                                    <div class="overview">
                                        <h4>overview</h4>
                                        <p>
                                           ${movie.overview}
                                        </p>
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
        `
    }
    
    movieContainer.innerHTML = result;
});