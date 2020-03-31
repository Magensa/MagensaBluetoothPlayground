import React, { memo } from 'react';
import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow,
    KeywordPurple, 
    ConstBlue,
    StringOrange,
    Equals,
    OpenParen,
    CloseParen,
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
    dotInterface, 
    clearSession, 
    clearResp, 
    clearSessionScra 
} from '../../../../../constants/messageTemplates/clearSessionTemplates';

export default memo(_ => 
    <PreWrapper>
        <FuncDeclare 
            funcName={clearSession}
            paramName={false}
            isAsync
        />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>try</KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue />
        {`${clearResp} `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {` ${magTekDevice}${dotInterface}`}
        <FuncYellow>{clearSession}</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <Tab repetitions={2}/>
        <ConsoleLog 
            logVar={ 
                <>
                    <NewLine />
                    <Tab repetitions={3} />
                    <OpenParen />
                    {`${clearResp} || `}
                    <StringOrange>{clearSessionScra}</StringOrange>
                    <CloseParen end />
                    <NewLine />
                    <Tab repetitions={2} />
                </>
            }
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);