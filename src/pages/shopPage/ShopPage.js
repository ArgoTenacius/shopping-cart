import data from '../../component/Data'
import { Main } from '../../component/main/Main'

const ShopPage = (addOn) => {
  return (
    <section>
      <Main data={data} addOn={addOn}/>
    </section>
  )
}

export default ShopPage