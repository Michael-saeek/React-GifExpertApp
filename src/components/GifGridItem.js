import React from 'react'

const GifGridItem = ( { img } ) => {


    
    return (
        <>
            {img.map( img => {
                    return (
                        <div key={img.id} className='card'>
                        
                            <img src={img.url} alt=""/>
                        </div>   
                    )
                })
            }
        </>
    )
}

export default GifGridItem
