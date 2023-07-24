import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Outstanding Clientel',
    content:
      'Number one in 360 client management.',
    user: {
      id: 1,
      name: 'Ransford Owusu Appiah',
      professional: 'Business Consultant',
      photo: 'r1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Quality Legal Service!',
    content:
      'Best guidance and walkthrough legal documents',
    user: {
      id: 1,
      name: 'Jessie Asante',
      professional: 'Manager',
      photo: 'j1.jpg',
    },
  },
 
]
