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
        <KeywordPurple end>import</KeywordPurple>
        <OpenCurly end />
        {` ${scanDevicesName}`}
        <CloseCurly begin />
        <KeywordPurple> from </KeywordPurple>
        <StringOrange>{magensaBt}</StringOrange>
        <SemiColon />
        <NewLine repetitions={2} />
        <FuncDeclare />
        {space}
        <ConsoleLog 
            logString="Callback Data: "
            logVar={callBackData}
        />
        <NewLine repetitions={2} />
        <FuncDeclare 
            funcName="pairDevice"
            paramName={ false }
            isAsync
        />
        {space}
        <OpenCurly newLine />
        <KeywordPurple>try </KeywordPurple>
        <OpenCurly newLine />
        <Tab />
        <ConstBlue />
        {device}
        <Equals begin />
        <KeywordPurple> await </KeywordPurple>
        <FuncYellow>{scanDevicesName}</FuncYellow>
        <ParenParam semicolon>
            {mainCallback}
        </ParenParam>
        <NewLine repetitions={2} />
        <Tab repetitions={2} />
        <KeywordPurple>await </KeywordPurple>
        {deviceInterface}
        <FuncYellow>openDevice</FuncYellow>
        <ParenParam semicolon />
        <NewLine />
        <CommentGreen>{initializeComment}</CommentGreen>
        <NewLine />
        <Tab repetitions={2} />
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