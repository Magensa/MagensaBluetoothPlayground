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
import { feedToFunctionComment, callBackData, deviceDotInterface } from '../../../../../constants/messageTemplates';


export default memo(_ => 
    <PreWrapper>
        <FuncDeclare />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>if</KeywordPurple>
        <OpenParen />
        <StringOrange>{`swipeData`}</StringOrange>
        <ConstBlue>{` in `}</ConstBlue>
        {callBackData}
        <CloseParen end={true} />
        <OpenCurly newLine={true} />
        <Tab />
        <CommentGreen>{`//Handle swipe data.`}</CommentGreen>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog logVar={`${callBackData}.swipeData`}/>
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <CloseCurly />
        <NewLine />
        <CommentGreen>{feedToFunctionComment}</CommentGreen>
        <NewLine />
        <FuncDeclare 
            funcName="cardSwipe"
            paramName={ false }
            isAsync
        />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple end>try</KeywordPurple>
        <OpenCurly newLine={true} />
        <Tab />
        <ConstBlue />
        {`swipeResp `}
        <Equals end/>
        <KeywordPurple end>await</KeywordPurple>
        {deviceDotInterface}
        <FuncYellow>requestCardSwipe</FuncYellow>
        <ParenParam semicolon={true} />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString={`Request Swipe Response: `}
            logVar={`swipeResp`}
        />
        <FormatCatchAndEnd />
    </PreWrapper>    
);