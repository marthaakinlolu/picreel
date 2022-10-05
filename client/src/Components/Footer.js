import React from 'react'
import { Paper, BottomNavigation } from '@mui/material'

export default function Footer() {
    return(
        <Paper sx={{ bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation>
                <small>Martha's © Copyright All rights reserved</small>
            </BottomNavigation>
      </Paper>
    )
}