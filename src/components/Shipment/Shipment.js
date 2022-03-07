import React, { useContext } from 'react';
import { CategoryContext } from '../../App';


const Shipment = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h3>shipment product count:{category}</h3>
            <button onClick = {() => setCategory(category + 1)}>Increase</button>
            
        </div>
    );
};

export default Shipment;