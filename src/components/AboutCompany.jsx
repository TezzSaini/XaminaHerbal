import '../css/aboutcompany.css'
import serviceImage1 from '../assets/cow.png';

function AboutCompany(){
    return(
        <>
        <div className='about-comp'>
            <div className='about-comp-head'>
                <h2>About Xamina Herbal</h2>
            </div>
            <div className="logo-and-details">
                <div className='about-comp-img'>
                    <img src={serviceImage1} className='about-comp-logo'/>
                </div>
                <div className='about-comp-txt'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa necessitatibus praesentium hic non dolore fugiat reiciendis quam quae numquam, magni molestiae quos autem in saepe tempore qui. Maxime vitae totam tempora neque excepturi tenetur nemo dolores quisquam saepe tempore nesciunt eaque, sit dicta eligendi eos vero cum nobis voluptatem? Rem laboriosam minima odio sed porro vitae vel temporibus quia, nemo sint quo numquam iure soluta dolor fugit ratione maxime magni doloremque assumenda. Maiores distinctio quaerat quas itaque explicabo nam esse. Maiores aliquid molestias quibusdam numquam incidunt ipsam ipsum, earum cumque et ad facilis, laborum magni a officia eligendi veniam commodi.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutCompany;