import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'
import { useFetchGif } from '../hooks/useFetchGif'


const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGif(category)

    return (

        <>

            {
                loading === true ? <h2>Loading...</h2> :
                <ol className="container-grid">
                    <GifGridItem img={images}/>   
                 </ol>
            }   

        </>  
       
    )
}

GifGrid.propTypes = {
    category: PropTypes.array.isRequired
}

export default GifGrid
