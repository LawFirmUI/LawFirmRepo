import type { User } from './user'

export interface Mentor extends Omit<User, 'professional'> {
  description?: string
  description1?: string
  description2?: string
  description3?: string
  description4?: string
  description5?: string
  category: string
  company?: {
    name: string
    logo: string
  }
}
