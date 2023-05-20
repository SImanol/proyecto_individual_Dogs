import Cards from '../Cards/Cards'
import SearchBar from '../SearchBar/SearchBar'
import Order from '../Order/Order'


const Home = () => {
    
    return(
        <div>
            <div>
            <SearchBar/>
            <Order/>
            </div>
            <Cards />
        </div>
    )
}

export default Home