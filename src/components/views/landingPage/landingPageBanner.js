import React from 'react';
import DesktopBanner from './desktopBanner';
import MobilePageBanner from './mobilePageBanner';
import useScreenSize from '../../customHooks/useScreenSize';


export default _ => {
    const { spacing, isExtraLarge, isSmallScreen } = useScreenSize();

    return (!isSmallScreen) ? 
        <DesktopBanner 
            spacing={ spacing } 
            isExtraLarge={ isExtraLarge } 
        />
        :
        <MobilePageBanner />
};