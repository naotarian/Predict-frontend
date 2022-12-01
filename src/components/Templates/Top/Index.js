import RaceCard from '@/components/Organisms/RaceCard'
import Grid from '@mui/material/Grid'
//NextModules
import Link from 'next/link'
const Index = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Link href="/forecast">
            <a>
              <RaceCard />
            </a>
          </Link>
        </Grid>
        <Grid item xs={12} md={3}>
          <RaceCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <RaceCard />
        </Grid>
        <Grid item xs={12} md={3}>
          <RaceCard />
        </Grid>
      </Grid>
    </>
  )
}
export default Index
