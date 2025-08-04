import React from 'react';
import './FinanceServices.css';

const services = [
  {
    icon: process.env.PUBLIC_URL + '/icons/cooperation.png',
    title: 'Business & Trade',
    description:  'Business licensing and regulation create formal jobs and protect consumers. Revenue supports market upgrades, trade training, and enforcement.',
    link: '/investment'
  },
  {
    icon: process.env.PUBLIC_URL + '/icons/bus.png',
    title: 'Transport & Infrastructure',
    description:  'Roads, street lights, and public transport regulation enable safe movement and economic activity. Fees fund road repairs, signage, and lighting.',
    link: '/reports'
  },
  {
    icon: process.env.PUBLIC_URL + '/icons/sustainable.png',
    title: 'Environmental & Health Services',
    description: 'Waste management and health inspections keep the community clean and safe. Funds help maintain health centers and sanitation programs.' ,
    link: '/support'
  },
  {
    icon: process.env.PUBLIC_URL + '/icons/social-services.png',
    title: 'Social Services',
    description:  'Programs support children, youth, the elderly, and the disabled. Revenue funds shelters, rehab, and care centers.',
    link: '/payments'
  }
    ,
    {
        icon: process.env.PUBLIC_URL + '/icons/yield.png',
        title: 'Taxes & Compliance',
        description:  'Tax collection ensures fair contribution to public services. Compliance services educate and enforce revenue laws. Funds support infrastructure, education, and service delivery improvement.',
        link: '/taxes'
    },
    {
        icon: process.env.PUBLIC_URL + '/icons/education.png',
        title: 'Education & Health Services',
        description:  'Support for ECDE, bursaries, and training enhances literacy and skills. Funds build schools, train teachers, and provide learning materials.',
        link: '/education'
    },
    {
        icon: process.env.PUBLIC_URL + '/icons/farming.png',
        title: 'Agriculture & Livestock',
        description:  'Farming and veterinary services ensure food security and rural income. Revenue funds farmer training, vet care, and disease control.',
        link: '/loans'
    },
    {
        icon: process.env.PUBLIC_URL + '/icons/town.png',
        title: 'Property & Land',
        description:  'Land registration, planning, and ownership services reduce disputes and promote development. Revenue from land rates funds roads, drainage, and land offices.',
        link: '/insurance'
    }
];

const FinanceServices = () => {
  return (
    <section className="finance-services">
      <h2 className="section-heading">Services & Information</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              <img src={service.icon} alt={`${service.title} icon`} />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-desc">{service.description}</p>
            <a className="service-link" href={service.link}>
              Read More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FinanceServices;
