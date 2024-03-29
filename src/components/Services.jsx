import React from 'react';
import '../css/services.css';
import ServiceItems from './ServiceItems';
import serviceImage1 from '../assets/cow.png';
import serviceImage2 from '../assets/buffalo.png';
import serviceImage3 from '../assets/goat.png';

const services = [
  { serviceImage: serviceImage1, servicetitle: 'Cow Products', servicedetails: 'Best cow diet and medication products for your cows health and your milk health.' },
  { serviceImage: serviceImage2, servicetitle: 'Buffalo Products', servicedetails: 'Best buffalo diet and medication products for your cows health and your milk health.' },
  { serviceImage: serviceImage3, servicetitle: 'Goat Products', servicedetails: 'Best goat diet and medication products for your cows health and your milk health.' },
];

function Services() {
  return (
    <>
      <div className='service-box'>
        <div className='serv-heading'>
          <h2>Our Services</h2>
        </div>
        <div className='prod-serv'>
          {services.map((service, index) => (
            <div key={index} className={`service-${index + 1}`}>
              <ServiceItems
                serviceImage={service.serviceImage}
                servicetitle={service.servicetitle}
                servicedetails={service.servicedetails}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;