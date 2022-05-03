import React, { useState } from 'react'
import PropTypes from 'prop-types';    

export const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('');
    
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        if(value.trim().length > 2) {

            setCategories(categories => [value, ...categories]);
            setValue('');
        }

    }

    return (
        <form onSubmit={ handleForm }>
            <input 
                onChange={ handleInputChange }
                type="text" 
                value={ value }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
