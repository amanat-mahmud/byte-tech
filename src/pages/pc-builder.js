import RootLayout from '@/components/Layouts/RootLayout';
import React from 'react';

const PcBuilderPage = () => {
    return (
        <div>
            Test
        </div>
    );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };