import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image';

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <img src={'/images/s9.jpg'} width={100} height={100} alt='logo'/>
      <Typography
        variant="h5"
        component="h1"
        sx={{ fontWeight: 650, '& span': { color: variant === 'primary' ? 'primary.main' : 'unset' } }}
      >
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
