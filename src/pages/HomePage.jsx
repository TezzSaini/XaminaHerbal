import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import AboutCompany from '../components/AboutCompany'
import Footer from '../components/Footer'

function HomePage(){
    return(
        <>
        <Navbar />
        <Carousel/>
        <Services/>
        <AboutCompany/>
        <Footer/>
        </>    
    )
}

export default HomePage;