import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGuns = ({ countIncrease }) => {

    const [guns, setGuns] = useState([]);

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    return (
        <div>
            <h1 className='text-center text-4xl font-extrabold mt-7 italic'>Welcome To The Dark World!!!</h1>
            <p className='text-center w-3/4 mx-auto my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate mollitia, vitae, suscipit rerum deserunt ducimus deleniti quos recusandae voluptatem perferendis sapiente. Velit, obcaecati autem. Asperiores quod ratione tempora itaque.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-[90%] mx-auto'>
                {
                    guns.map(gun => <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>)
                }
            </div>
        </div>
    );
};

export default AllGuns;