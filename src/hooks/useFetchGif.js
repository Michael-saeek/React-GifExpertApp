import { useState, useEffect } from "react"
import {gettingGif} from '../helpers/getGifs'



export const useFetchGif = (categories) => {


    const initialState = {
        data: 'cargando',
        loading: true
    }
    const [ state, setState ] = useState(initialState)

    useEffect( () => {

        setState({...initialState})

        setTimeout( () => {

            gettingGif(categories).then( res => setState (
                {data: res, loading: false}
            ))
    
        }, 2000)

    }, [categories])

 

    return state;

}

