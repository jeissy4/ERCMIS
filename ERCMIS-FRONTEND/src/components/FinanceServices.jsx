import React from 'react';
import './FinanceServices.css';

const services = [
  {
    icon: '../../public/icons/cooperation.png',
    title: 'Business & Trade',
    description:  'Business licensing and regulation create formal jobs and protect consumers. Revenue supports market upgrades, trade training, and enforcement.',
    link: '/investment'
  },
  {
    icon: '../../public/icons/bus.png',
    title: 'Transport & Infrastructure',
    description:  'Roads, street lights, and public transport regulation enable safe movement and economic activity. Fees fund road repairs, signage, and lighting.',
    link: '/reports'
  },
  {
    icon: '../../public/icons/sustainable.png',
    title: 'Environmental & Health Services',
    description: 'Waste management and health inspections keep the community clean and safe. Funds help maintain health centers and sanitation programs.' ,
    link: '/support'
  },
  {
    icon: '../../public/icons/social-services.png',
    title: 'Social Services',
    description:  'Programs support children, youth, the elderly, and the disabled. Revenue funds shelters, rehab, and care centers.',
    link: '/payments'
  }
    ,
    {
        icon: '../../public/icons/yield.png',
        title: 'Taxes & Compliance',
        description:  'Tax collection ensures fair contribution to public services. Compliance services educate and enforce revenue laws. Funds support infrastructure, education, and service delivery improvement.',
        link: '/taxes'
    },
    {
        icon: '../../public/icons/education.png',
        title: 'Education & Health Services',
        description:  'Support for ECDE, bursaries, and training enhances literacy and skills. Funds build schools, train teachers, and provide learning materials.',
        link: '/education'
    },
    {
        icon: '../../public/icons/farming.png',
        title: 'Agriculture & Livestock',
        description:  'Farming and veterinary services ensure food security and rural income. Revenue funds farmer training, vet care, and disease control.',
        link: '/loans'
    },
    {
        icon: '../../public/icons/town.png',
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
