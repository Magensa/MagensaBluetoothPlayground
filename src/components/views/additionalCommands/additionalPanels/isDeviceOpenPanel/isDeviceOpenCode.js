import React, { memo } from 'react';
import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow,
    ConstBlue,
    Equals,
    OpenCurly,
    Tab,
    NewLine,
    ConsoleLog,
    CloseCurly,
    ParenParam,
    FuncDeclare
} from '../../../../sharedComponents/styledCodeSpans';

import { 
    magTekDevice, 
    dotInterface
} from '../../../../../constants/messageTemplates';

const getDeviceInfo = `getDeviceInfo`;
const deviceInfo = `deviceInfo`;

export default memo(_ => 
    <PreWrapper>
        <FuncDeclare 
            funcName={getDeviceInfo}
            paramName={false}
        />
        <OpenCurly begin />
        <NewLine />
        <Tab />
        <ConstBlue />
        {`${deviceInfo} `}
        <Equals end />
        {`${magTekDevice}${dotInterface}`}
        <FuncYellow>{deviceInfo}</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <Tab />
        <ConsoleLog 
            logVar={deviceInfo}
        />
        <NewLine />
        <CloseCurly />
    </PreWrapper>    
);