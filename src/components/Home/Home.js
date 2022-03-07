import React from 'react';
import Category from '../Category/Category';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border: '1px solid black'}}>
            <h3>home product count:{count}</h3>
            <Category count={count}></Category>
        </div>
    );
};

export default Home;