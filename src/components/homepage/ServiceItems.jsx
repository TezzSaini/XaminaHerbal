import '../../css/serviceitems.css'

function ServiceItems({serviceImage, servicetitle, servicedetails}){
    return(
        <>
        <div className='service-card'>
            <img class="cardimgtop" src={serviceImage} alt="Card image cap" />
            <h5 class="card-title">{servicetitle}</h5>
            <p class="card-text">{servicedetails}</p>
            <a href="#" class="btn serv-buy-btn">Buy Products</a>
        </div>
        </>
    )
}

export default ServiceItems;