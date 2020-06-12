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
    deviceDotInterface
} from '../../../../../constants/messageTemplates';

const dateTimeResp = `dateTimeResp`;

export default memo(_ => 
    <PreWrapper>
        <FuncDeclare 
            funcName="setDateTime"
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
        {`${dateTimeResp} `}
        <Equals end />
        <KeywordPurple end>await</KeywordPurple>
        {`${deviceDotInterface}`}
        <FuncYellow>setDeviceDateTime</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logVar={dateTimeResp}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);