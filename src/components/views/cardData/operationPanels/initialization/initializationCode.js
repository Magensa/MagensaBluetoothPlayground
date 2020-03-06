import React, { memo } from 'react';

import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow, 
    CommentGreen, 
    KeywordPurple, 
    ConstBlue,
    StringOrange,
    Equals,
    OpenCurly,
    CloseCurly,
    FuncArrow,
    Tab,
    NewLine,
    ConsoleLog,
    CatchError,
    ParenParam,
    SemiColon,
    FuncDeclare
} from '../../../../sharedComponents/styledCodeSpans';
import { 
    initializeComment,
    magensaBt,
    deviceInterface,
    assingNamespace,
    callBackData,
    scanDevicesName,
    space,
    mainCallback,
    device,
    deviceNamespace
} from '../../../../../constants/messageTemplates/initializationTemplates';


export default memo(_ =>
    <PreWrapper>
        <KeywordPurple>import </KeywordPurple>
        <OpenCurly end />
        {space}
        {scanDevicesName}
        <CloseCurly begin />
        <KeywordPurple> from </KeywordPurple>
        <StringOrange>{magensaBt}</StringOrange>
        <SemiColon />
        <NewLine repititions={2} />
        <FuncDeclare />
        {space}
        <ConsoleLog 
            logString="Callback Data: "
            logVar={callBackData}
        />
        <NewLine repititions={2} />
        <ConstBlue>const </ConstBlue>
        <FuncYellow>pairDevice </FuncYellow>
        <Equals end />
        <ConstBlue>async</ConstBlue>
        <ParenParam />
        {space}
        <FuncArrow end />
        <OpenCurly newLine />
        <KeywordPurple>try </KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue>const </ConstBlue>
        {device}
        <Equals begin />
        <KeywordPurple> await </KeywordPurple>
        <FuncYellow>{scanDevicesName}</FuncYellow>
        <ParenParam semicolon>
            {mainCallback}
        </ParenParam>
        <NewLine repititions={2} />
        <Tab repitions={2} />
        <KeywordPurple>await </KeywordPurple>
        {deviceInterface}
        <FuncYellow>openDevice</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <CommentGreen>{initializeComment}</CommentGreen>
        <NewLine />
        <Tab repitions={2} />
        {deviceNamespace}
        {space}
        <Equals end />
        {assingNamespace}
        <SemiColon />
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <Tab />
        <CatchError />
        <NewLine />
        <CloseCurly />
    </PreWrapper>);