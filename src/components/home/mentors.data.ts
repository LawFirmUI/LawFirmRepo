import type { Mentor } from '@/interfaces/mentor'

export const data: Array<Mentor> = [
  {
    id: 1,
    photo: '/images/risk-man.jpg',
    name: 'Corporate Commercial',
    category: ' ',
    description:'Transactional Advisory.',
    description1:'Insolvency Practice.',
    description2:'Company Secretarial Services.',
    description3:'Due Diligence.', 
    description4:'Banking,Insurance,Finance and Capital Market',
    description5:'Insolvency Practice',
    company: {
      name: '',
      logo: '',
    },
  },
  {
    id: 2,
    photo: '/images/abitration.jpeg',
    name: 'Dispute Resolution',
    category: ' ',
    description:'Adversarial Litigation',
    description1:'Arbitration',
    description2:'Mediation',
    description3:'Negotiation',
    description4:'Quasi-Judicial Bodies',
    description5:'Adversarial Litigation ',
    company: {
      name: '',
      logo: '',
    },
  },
  {
    id: 3,
    photo: '/images/public-sector.jpg',
    name: 'Sectors',
    category: ' ',
    description:'Intellectual Property, Entertainment, Media & Sports',
    description1:'Environmental, Sustainability and Governance',
    description2:'Infrastructure, Construction and Real Estate',
    description3:'Information Technology, Security and Communication',
    description4:'Small Medium Enterprise and Start-ups',
    company: {
      name: '',
      logo: '',
    },
  },
  
]
