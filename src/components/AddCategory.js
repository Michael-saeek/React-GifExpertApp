import PropTypes from 'prop-types'
import { useState } from 'react'

const AddCategory = ({estado, setEstado}) => {
    const [ value, setValue ] = useState([])

    /*
    const handleAddCategories = () => {
        
        if(value === []) {
            alert('No fue enviado ningun valor ')
        } else {
            setEstado([...estado, value])
            setTimeout(() => {
                setValue([])
            }, 100)
        }
    }
    */

    const handleInputChange = (e) => {
        const { value } = e.target      
        setValue(value)  
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setEstado([value])
        console.log(value)
        setTimeout(() => {
            setValue([])
        }, 100)

      

    }


    return (
        <>
            <form className="Form-input" onSubmit={handleSubmit}> 
                <input 
                value={value}
                name="addCategory"
                onChange={handleInputChange}
                placeholder='Ingrese la categoria a agregar !'
                />
            </form>
            
        </>
    )
}

AddCategory.propTypes = {
    estado: PropTypes.array,
    setEstado: PropTypes.func.isRequired
}

export default AddCategory
