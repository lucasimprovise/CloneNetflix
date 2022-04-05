import './home.scss'

import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
          <Featured type="movie"/>

        </div>
    )
}

export default Home
