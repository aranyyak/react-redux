import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Header = (props) => {
    const [Category, setCategory] = useContext(CategoryContext)

    return (
        <div>
            <h3>header product count: {Category}</h3>
            <button onClick={() => setCategory(Category + 1)}>increase</button>
        </div>
    );
};

export default Header;