/* eslint-disable prettier/prettier */

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './componets/Banner'
import Header from './componets/Header'
import { GlobalCss } from './styles'
import Product from './componets/Product'
import ProductsList from './componets/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
      <Banner />
      <ProductsList title="Promoções" background="gray" />
      <ProductsList title="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <div className='container'>
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App