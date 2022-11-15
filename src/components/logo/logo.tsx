import React, { FC } from 'react'
import { Box, Typography } from '@mui/material'
//@ts-ignore

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick, variant }) => {
  return (
    <Box onClick={onClick}>
      <Typography variant="h2" component="h1" sx={{ fontWeight: 700, fontFamily: 'CalistogaRegular' }} className="logo">
        Kleuize
      </Typography>
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
