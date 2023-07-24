import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import { AllInclusiveRounded, Business, Mediation, Visibility } from '@mui/icons-material'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Mission',
    description: 'The mission of the Firm is to represent our clients humanly and with excellence. We educate, advise, litigate for Africa development. We do this through our comitment to knowledgr, communication and partnerships',
    icon: <Business />,
  },
  {
    title: 'Promise',
    description: 'Every interaction and interface with us must be a productive engagement and leave you with an excellent customer experience',
    icon: <Mediation/>,
  },
  {
    title: 'Vision',
    description: 'To be a recognized global thought leader in Law, Governance and Ethics',
    icon: <Visibility />,
  },
  {
    title: 'Values & Culture',
    description: '1.Respect for thinking and diversity. Completely honest in all dealings. A deliberate pursuite of excellence. We are accountable for our promises. We form meaningful, long-lasting and mutually beneficial parterships',
    icon: <AllInclusiveRounded />,
  },
 
]
