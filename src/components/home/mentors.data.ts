import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/s5.jpg',
    name: 'Corporate Commercial',
    category: ' ',
    description:'Transactional Advisory.',
    description1:'Insolvency Practice.',
    description2:'Company Secretarial Services.',
    description3:'Due Diligence.', 
    description4:'Banking,Insurance,Finance and Capital Market',
    description5:'Insolvency Practice',
    company: {
      name: 'Grab',
      logo: '/images/companies/grab.png',
    },
  },
  {
    id: 2,
    photo: '/images/s6.jpg',
    name: 'Dispute Resolution',
    category: ' ',
    description:'Adversarial Litigation',
    description1:'Arbitration',
    description2:'Mediation',
    description3:'Negotiation',
    description4:'Quasi-Judicial Bodies',
    description5:'Adversarial Litigation ',
    company: {
      name: 'Google',
      logo: '/images/companies/google.png',
    },
  },
  {
    id: 3,
    photo: '/images/s7.jpg',
    name: 'Sectors',
    category: ' ',
    description:'Intellectual Property, Entertainment, Media & Sports',
    description1:'Environmental, Sustainability and Governance',
    description2:'Infrastructure, Construction and Real Estate',
    description3:'Information Technology, Security and Communication',
    description4:'Small Medium Enterprise and Start-ups',
    company: {
      name: 'Airbnb',
      logo: '/images/companies/airbnb.png',
    },
  },
  
]
