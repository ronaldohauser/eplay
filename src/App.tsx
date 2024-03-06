/* eslint-disable prettier/prettier */
import Banner from './componets/Banner'
import Header from './componets/Header'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <div className='container'>
        <Header />
      </div>
      <Banner />
    </>
  )
}

export default App
