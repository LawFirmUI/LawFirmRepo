import { PaletteOptions } from '@mui/material'
import { grey, common, yellow } from '@mui/material/colors'

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#FDE6A8', //'#fdfdfd',
    paper: common.white,
  },
  text: {
    primary: grey[900],
    secondary: '#717171', // grey[700],
    disabled: '#ffaf35',
  },
}

export default palette
