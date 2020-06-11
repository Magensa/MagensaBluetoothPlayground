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
    FuncDeclare,
    ObjectProps,
    SemiColon
} from '../../../../sharedComponents/styledCodeSpans';
import { feedToFunctionComment, callBackData, deviceDotInterface, tipCashbackObj } from '../../../../../constants/messageTemplates';


export default memo(_ => 
    <PreWrapper>
        <FuncDeclare />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>if</KeywordPurple>
        <OpenParen />
        <StringOrange>{`tipCashbackReport`}</StringOrange>
        <ConstBlue>{` in `}</ConstBlue>
        {callBackData}
        <CloseParen end={true} />
        <OpenCurly newLine={true} />
        <Tab />
        <CommentGreen>{`//Handle tip or cashback data.`}</CommentGreen>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog logVar={`${callBackData}.tipCashbackReport`}/>
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <CloseCurly />
        <NewLine />
        <CommentGreen>{feedToFunctionComment}</CommentGreen>
        <NewLine />
        <ConstBlue />
        {`tipOptions `}
        <Equals end />
        <OpenCurly />
        <NewLine />
        {tipCashbackObj.map(({ keyName, val }) =>
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
            funcName="requestTip"
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
        {deviceDotInterface}
        <FuncYellow>clearSession</FuncYellow>
        <ParenParam semicolon={true} />
        <NewLine />
        <Tab repetitions={2}/>
        <ConstBlue />
        {`tipResp `}
        <Equals end/>
        <KeywordPurple end>await</KeywordPurple>
        {deviceDotInterface}
        <FuncYellow>requestTipOrCashback</FuncYellow>
        <ParenParam semicolon={true}>tipOptions</ParenParam>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString={`Request Tip Response: `}
            logVar={`tipResp`}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);