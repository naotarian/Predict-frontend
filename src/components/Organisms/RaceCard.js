import * as React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
)
const RaceCard = () => {
  return (
    <Card sx={{ width: 'fit-content' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          2022-12-04(日) 15:40 ~
        </Typography>
        <Typography
          variant="h5"
          component="div"
          style={{ whiteSpace: 'nowrap' }}>
          チャンピオンズカップ
          <span style={{ fontSize: '1rem' }}>(G&#8544;)</span>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          中山11R ダ1800m
        </Typography>
        <Typography variant="body2">下半期のJRAダート王決定戦</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">予想を見る</Button>
      </CardActions>
    </Card>
  )
}
export default RaceCard
