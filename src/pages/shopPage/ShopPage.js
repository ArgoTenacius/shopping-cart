import data from '../../component/Data'
import { Main } from '../../component/main/Main'
import './shopPage.css'

const ShopPage = (addOn) => {
  return (
    <section className='shopPage'>
      <Main data={data} addOn={addOn}/>
    </section>
  )
}

export default ShopPage