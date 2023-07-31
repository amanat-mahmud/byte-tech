import RootLayout from '@/components/Layouts/RootLayout';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const PcBuilderPage = () => {
    const {processor,motherboard,ram,storage,power,monitor} = useSelector((state) => state.component);
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
                <Link href='/component/power-supply'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{power}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Storage Device</h1>
                <Link href='/component/storage-device'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{storage}</div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Monitor</h1>
                <Link href='/component/monitor'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div>{monitor}</div>
            </div>
            {
                processor && motherboard && ram && storage && power && monitor  ? <button className='btn btn-accent my-6'>Complete build</button> : <button className='btn my-6 text-white' disabled>Complete build</button>
            }
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };