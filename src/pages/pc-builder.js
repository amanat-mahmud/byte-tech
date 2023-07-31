import RootLayout from '@/components/Layouts/RootLayout';
import { emptyAllComponents } from '@/redux/features/component/componentSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PcBuilderPage = () => {
    const dispatch = useDispatch()
    const {processor,motherboard,ram,storageDevice,powerSupply,monitor} = useSelector((state) => state.component);
    return (
        <div className='m-6'>
            <div>
            <div className='flex my-4'>
                <h1 className='text-3xl font-bold items-center'>Processor</h1>
                <Link href='/component/processor'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{processor}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Motherboard</h1>
                <Link href='/component/motherboard'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{motherboard}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Ram</h1>
                <Link href='/component/ram'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{ram}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Power Supply</h1>
                <Link href='/component/powerSupply'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{powerSupply}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Storage Device</h1>
                <Link href='/component/storageDevice'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{storageDevice}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Monitor</h1>
                <Link href='/component/monitor'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{monitor}</div>
            </div>
            {
                processor && motherboard && ram && storageDevice && powerSupply && monitor  ? <button className='btn btn-accent my-6' onClick={()=>dispatch(emptyAllComponents())}>Complete build</button> : <button className='btn my-6 text-white' disabled>Complete build</button>
            }
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };