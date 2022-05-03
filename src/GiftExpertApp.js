import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifsGrid } from './components/GifsGrid';

const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['MK']);

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories={ setCategories } />
            <br />
            {
                categories.map(category => ( <GifsGrid key={ category } category={ category } /> ))
            }

        </>
    );
}

export default GiftExpertApp;