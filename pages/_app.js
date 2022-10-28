import '../styles/globals.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {

  return (
    <div className='py-24 px-12 lg:px-48'>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
