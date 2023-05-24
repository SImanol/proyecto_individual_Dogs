import './home.css'
import Cards from '../Cards/Cards'
import Order from '../Order/Order'
import Pagination from '../Pagination/pagination'
import { useSelector } from 'react-redux'


const Home = () => {
    
    const dogs = useSelector((state) => state.dogs);
    let cantPage =  dogs.length / 8
    return(
        <div className='home'>
            <div className='order'>
            <Order/>
            </div>
            <Cards />
            <Pagination cantPage= {cantPage}/>
        </div>
    )
}

export default Home