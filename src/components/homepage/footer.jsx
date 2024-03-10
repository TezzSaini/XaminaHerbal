import '../../css/footer.css'
import serviceImage2 from '../../assets/buffalo.png';

function Footer(){
    return(
        <>
        <div className='footer-div'>
            <div className='foot-sec'>
                <img src={serviceImage2} className='footer-logo' />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum aspernatur excepturi rem velit veritatis! Eius.</p>
            </div>
            <div className='foot-sec-subscribe'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rem ipsa iure dolor inventore nihil.</p>
                <input type='search' placeholder='' />
                <button type='submit'>Subscribe</button>
            </div>
            <div className='foot-sec-alt'>
                <p>Follow Us on:</p>
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
            </div>
            <div className='foot-sec-alt'>
                <p> Call Us:</p>
                <p> +91 78762-39520</p>
            </div>
        </div>
        <div className='footer-copyright'>
                <p>All copyrights reserved to Xamina Herbal</p>
                <p>Developed by <a href='https://www.linkedin.com/in/tejendrasaini/'>TezzBaba</a></p>
        </div>
        </>
    )
}

export default Footer;