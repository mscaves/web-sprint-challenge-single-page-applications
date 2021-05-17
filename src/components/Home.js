import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
   return(
        <div>
            <Link to='/pizza' id='order-pizza'>Why Dontcha Order some Pizza Pie? Huh?</Link>
        </div>
    );
}