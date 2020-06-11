import React, { memo } from 'react';
import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow, 
    CommentGreen, 
    KeywordPurple, 
    ConstBlue,
    StringOrange,
    Equals,
    OpenParen,
    CloseParen,
    OpenCurly,
    CloseCurly,
    Tab,
    NewLine,
    ConsoleLog,
    FormatCatchAndEnd,
    ParenParam,
    FuncDeclare
} from '../../../../sharedComponents/styledCodeSpans';
import { feedToFunctionComment, callBackData } from '../../../../../constants/messageTemplates';


export default memo(_ => 
    <PreWrapper>
        <FuncDeclare />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>if</KeywordPurple>
        <OpenParen />
        <StringOrange>{`pinData`}</StringOrange>
        <ConstBlue>{` in `}</ConstBlue>
        {callBackData}
        <CloseParen end={true} />
        <OpenCurly newLine={true} />
        <Tab />
        <CommentGreen>{`//Handle PIN data.`}</CommentGreen>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog logVar={`${callBackData}.pinData`}/>
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <CloseCurly />
        <NewLine />
        <CommentGreen>{feedToFunctionComment}</CommentGreen>
        <NewLine />
        <FuncDeclare 
            funcName="requestPin"
            paramName={ false }
            isAsync
        />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>try</KeywordPurple>
        <OpenCurly newLine={true} />
        <Tab />
        <KeywordPurple end>await</KeywordPurple>
        {`MagTekDevice.deviceInterface.`}
        <FuncYellow>clearSession</FuncYellow>
        <ParenParam semicolon={true} />
        <NewLine />
        <Tab repetitions={2}/>
        <ConstBlue />
        {`pinResp `}
        <Equals end/>
        <KeywordPurple end>await</KeywordPurple>
        {`MagTekDevice.deviceInterface.`}
        <FuncYellow>requestTipOrCashback</FuncYellow>
        <ParenParam semicolon={true}>tipOptions</ParenParam>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString={`Request PIN Response: `}
            logVar={`pinResp`}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);