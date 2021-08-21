import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'
import Footer from './components/Footer'


const GifExpertApp = () => {

    const initialState = ''
    const [ categories, setCategories ] = useState([initialState])


    return (
        <main className="container-main">
       
            <header className="header">
                <h2>App Consuming Giphy </h2>
                <AddCategory estado={categories} setEstado={setCategories}/>
            </header>
      
            <GifGrid category={categories} /> 
       
            <Footer />
       
        </main>
    )

}

export default GifExpertApp
