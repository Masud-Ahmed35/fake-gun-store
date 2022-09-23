import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleGun = (props) => {
    const [modalData, setModalData] = useState({});

    const { gun, countIncrease } = props;
    const { action, img, name, bullet, capacity, category, price } = gun;

    return (
        <div className='mt-7'>
            <div className="card w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-96 h-72 shadow-lg rounded-lg p-7 border-2' src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-warning">{action}</div>
                    </h2>
                    <div className='card-actions justify-between text-sm font-semibold my-4'>
                        <kbd className="kbd">Bullet: {bullet}</kbd>
                        <kbd className="kbd">Capacity: {capacity}</kbd>
                    </div>
                    <div className="card-actions justify-between">
                        {/* <button className="btn btn-outline btn-secondary w-[46%]">See Details</button> */}
                        <label onClick={() => setModalData(gun)} htmlFor="my-modal-3" className="btn modal-button btn-outline btn-secondary w-[46%]">See Details</label>
                        <button onClick={() => countIncrease()} className="btn btn-outline btn-success w-[46%]">Add To Cart</button>
                    </div>
                </div>
            </div>
            {
                modalData && (<Modal modalData={modalData} setModalData={setModalData}></Modal>)
            }
        </div>
    );
};

export default SingleGun;