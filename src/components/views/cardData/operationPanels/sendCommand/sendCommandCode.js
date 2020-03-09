import React, { Fragment, memo } from 'react';
import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow, 
    KeywordPurple, 
    ConstBlue,
    Equals,
    OpenParen,
    CloseParen,
    OpenCurly,
    CloseCurly,
    Tab,
    Num,
    NewLine,
    ConsoleLog,
    CatchError,
    ParenParam,
    FuncDeclare,
    Comma
} from '../../../../sharedComponents/styledCodeSpans';
import { space, magTekDevice, dotInterface } from '../../../../../constants/messageTemplates';

const rawCommand = `rawCommand`;
const commandResp = `commandResp`;

const readDateCommand = ["0x49", "0x06", "0x00", "0x00", "0x03", "0x0D"];

export default memo(_ => 
    <PreWrapper>
        <FuncDeclare 
            funcName="sendDeviceCommand"
            paramName={ rawCommand }
        />
        {space}
        <OpenCurly newLine />
        <ConstBlue>const</ConstBlue>
        {` ${rawCommand} `}
        <Equals end />
        <OpenParen />
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
        <KeywordPurple>try</KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue>const</ConstBlue>
        {` ${commandResp} `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {`${magTekDevice}${dotInterface}`}
        <FuncYellow>sendCommand</FuncYellow>
        <ParenParam semicolon>
            {rawCommand}
        </ParenParam>
        <NewLine />
        <Tab />
        <ConsoleLog 
            logVar={commandResp}
        />
        <NewLine />
        <CloseCurly newLine />
        <CatchError repetitions={2}/>
        <NewLine />
        <CloseCurly />
    </PreWrapper>    
);

// const sendDeviceCommand = (rawCommand) => {
//     const rawCommand = (rawCommand || [0x49, 0x06, 0x00, 0x00, 0x03, 0x0D]);

//     try {
//         const commandResp = await magTekDevice.deviceInterface.sendCommand(rawCommand);
//         console.log(commandResp);
//     }
//     catch(err) {
//         console.error(err);
//     }
// }