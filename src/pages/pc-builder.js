import RootLayout from '@/components/Layouts/RootLayout';
import Link from 'next/link';
import React from 'react';

const PcBuilderPage = () => {
    return (
        <div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Processor</h1>
                <Link href='/component/processor'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div></div>
            </div>
            <div>
            <div className='flex'>
                <h1 className='text-3xl font-bold items-center'>Motherboard</h1>
                <Link href='/component/motherboard'><button className="btn btn-accent">Choose</button></Link>
            </div>
            <div></div>
            </div>
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };