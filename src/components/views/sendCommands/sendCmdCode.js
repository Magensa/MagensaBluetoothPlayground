import React, { Fragment, memo } from 'react';
import PreWrapper from '../../sharedComponents/preWrapper';
import { 
    FuncYellow, 
    KeywordPurple, 
    ConstBlue,
    Equals,
    OpenParen,
    CloseParen,
    OpenCurly,
    Tab,
    Num,
    NewLine,
    ConsoleLog,
    FormatCatchAndEnd,
    ParenParam,
    FuncDeclare,
    Comma
} from '../../sharedComponents/styledCodeSpans';
import { 
    space, 
    magTekDevice, 
    dotInterface, 
    rawCommand, 
    commandResp, 
    readDateCommand 
} from '../../../constants/messageTemplates';

export default memo(_ => 
    <PreWrapper>
        <FuncDeclare 
            funcName="sendCommand"
            paramName={ rawCommand }
            isAsync
        />
        {space}
        <OpenCurly newLine />
        <ConstBlue />
        {rawCommand}
        <Equals begin />
        <OpenParen begin />
        {`${rawCommand} || [`}
        {readDateCommand.map( (eachNum, index) => (index !== 5) ?
            <Fragment key={ index }>
                <Num >{eachNum}</Num>
                <Comma />
                {space}
            </Fragment>
            :
            <Num key={ index }>{eachNum}</Num>
        )}
        {`]`}
        <CloseParen semicolon />
        <NewLine repetitions={2} />
        <Tab />
        <KeywordPurple end>try</KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue />
        {`${commandResp} `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {` ${magTekDevice}${dotInterface}`}
        <FuncYellow>sendCommand</FuncYellow>
        <ParenParam semicolon>
            {rawCommand}
        </ParenParam>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logVar={commandResp}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);