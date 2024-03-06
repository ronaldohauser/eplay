/* eslint-disable prettier/prettier */

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './componets/Banner'
import Header from './componets/Header'
import { GlobalCss } from './styles'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
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
