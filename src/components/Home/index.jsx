import { Link } from 'react-router-dom';
import Header from '../Header';
import './index.css'


const Home = ()=>(

    <div className='home-cont'>
        <Header/>
        <div className='home-content-cont'>
            <h1 className='home-heading' >Discover Your Next Career Move with Skillify</h1>
            <p className='home-para'>Discover your dream job effortlessly. Explore diverse opportunities, connect with leading employers, and kickstart your career journey today!</p>
            <Link to="/jobs">
            <button className='btn btn-primary home-btn'>Find Jobs</button>
            </Link>

        </div>

    </div>
)




export default Home;