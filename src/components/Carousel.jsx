import '../css/carousel.css'
import cowImage from '../assets/cow.jpg'
import buffaloImage from '../assets/buffalo.jpg'
import goatImage from '../assets/goat.jpg'

function carousel(){
    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={cowImage} class="carousel-image" alt="carousel-1" />
                </div>
                <div className="carousel-item">
                    <img src={buffaloImage} class="carousel-image" alt="carousel-2" />
                </div>
                <div className="carousel-item">
                    <img src={goatImage} class="carousel-image" alt="carousel-3" />
                </div>
                <div className='text-and-search'>
                    <div className="carousel-text">
                        <h2>Hey, This is Xamina Herbal Official Website</h2>
                        <p>We have the best medication and diet for your loved pets.</p>
                    </div>
                    <div className="carousel-search-box">
                        <input className="search-box-carousel" type="search" placeholder="Search here" aria-label="Search" />
                    </div>
                </div>
            </div>
           
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}

export default carousel;