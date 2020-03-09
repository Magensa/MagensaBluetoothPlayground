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
    FuncArrow,
    Tab,
    NewLine,
    ConsoleLog,
    CatchError,
    ParenParam,
    FuncDeclare
} from '../../../../sharedComponents/styledCodeSpans';
import { feedToFunctionComment, callBackData, space } from '../../../../../constants/messageTemplates';


export default memo(_ => 
    <PreWrapper>
        <FuncDeclare />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple>if </KeywordPurple>
        <OpenParen />
        <StringOrange>swipeData</StringOrange>
        {space}
        <KeywordPurple>in </KeywordPurple>
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
        <ConstBlue>const </ConstBlue>
        <FuncYellow>cardSwipe </FuncYellow>
        <Equals end={true} />
        <ParenParam />
        <FuncArrow begin={true} />
        <OpenCurly begin={true} />
        <NewLine />
        <Tab />
        <KeywordPurple>try </KeywordPurple>
        <OpenCurly newLine={true} />
        <Tab />
        <ConstBlue>const </ConstBlue>
        <FuncYellow>swipeResp </FuncYellow>
        <Equals />
        <KeywordPurple> await </KeywordPurple>
        {`MagTekDevice.deviceInterface.`}
        <FuncYellow>requestCardSwipe</FuncYellow>
        <ParenParam semicolon={true} />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString={`Request Swipe Response: `}
            logVar={`swipeResp`}
        />
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <Tab />
        <CatchError />
        <NewLine />
        <CloseCurly />
    </PreWrapper>    
);