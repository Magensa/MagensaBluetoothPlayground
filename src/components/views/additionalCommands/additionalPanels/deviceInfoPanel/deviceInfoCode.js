import React, { memo } from 'react';
import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow,
    KeywordPurple, 
    ConstBlue,
    Equals,
    OpenCurly,
    Tab,
    NewLine,
    ConsoleLog,
    FormatCatchAndEnd,
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
            isAsync
        />
        <OpenCurly begin />
        <NewLine />
        <Tab />
        <KeywordPurple end>try</KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue />
        {`${deviceInfo} `}
        <Equals end />
        <KeywordPurple end>await</KeywordPurple>
        {`${magTekDevice}${dotInterface}`}
        <FuncYellow>{deviceInfo}</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logVar={deviceInfo}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);