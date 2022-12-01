import WrapperGrid from '@/components/Atoms/WrapperGrid'
import Template from '@/components/Templates/Forecast/Index'
import Header from '../components/Parts/Template/Header'
const forecast = () => {
  return (
    <>
      <Header />
      <WrapperGrid template={<Template />} />
    </>
  )
}
export default forecast
