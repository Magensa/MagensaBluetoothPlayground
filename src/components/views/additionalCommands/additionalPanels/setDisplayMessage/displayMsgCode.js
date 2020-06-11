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
    FuncDeclare,
    ObjectProps,
    CloseCurly,
    SemiColon
} from '../../../../sharedComponents/styledCodeSpans';

import { 
    deviceDotInterface,
    displayMsgObj
} from '../../../../../constants/messageTemplates';

const displayResp = `displayResp`;

export default memo(_ => 
    <PreWrapper>
        <ConstBlue />
        {`displayOptions `}
        <Equals end />
        <OpenCurly />
        <NewLine />
        {displayMsgObj.map(({ keyName, val }) =>
            <ObjectProps 
                key={ keyName }
                propName={ keyName }
                propVal={ val }
            />
        )}
        <CloseCurly />
        <SemiColon />
        <NewLine repetitions={2}/>

        <FuncDeclare 
            funcName="setDisplay"
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
        {`${displayResp} `}
        <Equals end />
        <KeywordPurple end>await</KeywordPurple>
        {`${deviceDotInterface}`}
        <FuncYellow>setDisplayMessage</FuncYellow>
        <ParenParam semicolon>displayOptions</ParenParam>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logVar={displayResp}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);