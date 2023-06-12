import React from 'react';
import profileGroup from '../public/assets/profile-group.svg';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';

const TopBanner: React.FC = () => {
  return (
    <SectionWrapper id='topBanner'>
      <div className="flex w-full h-full" >
        <div className="flex-1 flex flex-col items-center justify-center pl-8 mt-56">
          <div className="neobrutalist-title">
            <h1 className="text-4xl font-bold">Under Maintenance</h1>
          </div>
          <div className="neobrutalist-title">
            <h2 className="text-2xl ">Rukaria.com is currently under maintenance</h2>
          </div>
          <div className="neobrutalist-title">
            <h2 className="text-2xl ">
              Please contact Jane Rukaria Law at 
              <a href="mailto: jane@rukaria.com" className="text-blue-400"> jane@rukaria.com</a>
              </h2>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TopBanner;