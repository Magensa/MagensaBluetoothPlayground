import React, { memo, Fragment } from 'react';
import PreWrapper from '../../../../../sharedComponents/preWrapper';
import StartTrxCodeCase from './startTrxCodeCase';
import {
    FuncYellow,
    CommentGreen,
    KeywordPurple,
    ConstBlue,
    Equals,
    OpenParen,
    CloseParen,
    OpenCurly,
    CloseCurly,
    FuncArrow,
    Tab,
    NewLine,
    ConsoleLog,
    ParenParam,
    FormatCatchAndEnd,
    SemiColon,
    FuncDeclare,
    Colon,
    ObjectProps
} from '../../../../../sharedComponents/styledCodeSpans';

import { 
    emvOptionsObj, 
    mainCallback, 
    magTekDevice, 
    space, 
    feedToFunctionComment, 
    emvSwitchCases,
    dotInterface,
    displayMessage,
    startTransactionOptions,
    startTransactionResp
} from '../../../../../../constants/messageTemplates/startTransactionTemplates';


export default memo(_ =>
    <PreWrapper>
        <ConstBlue />
        {mainCallback}
        <Equals begin />
        <OpenParen begin />
        <ConstBlue>function</ConstBlue>
        <ParenParam />
        {space}
        <OpenCurly newLine />
        <FuncDeclare  />
        {space}
        <OpenCurly newLine />
        <Tab />
        <KeywordPurple>switch</KeywordPurple>
        <ParenParam>
            <ConstBlue>true</ConstBlue>
        </ParenParam>
        {space}
        <OpenCurly newLine />
        <Tab repetitions={2} />

        {emvSwitchCases.map(({ str, consoleStr }) => 
            <Fragment key={str}> 
                <StartTrxCodeCase 
                    propString={str}
                    consoleString={consoleStr}
                />
                <Tab repetitions={3} />
            </Fragment>
        )}

        <KeywordPurple>default</KeywordPurple>
        <Colon />
        <NewLine />
        <Tab repetitions={4} />
        <ConsoleLog 
            logString="No EMV data returned"
        />
        <NewLine />
        <Tab repetitions={2} />
        <CloseCurly />
        <NewLine />
        <Tab />
        <CloseCurly newLine />
        <NewLine />
        <Tab />
        {`${mainCallback}.`}
        <FuncYellow>displayCallback</FuncYellow>
        <Equals begin />
        <OpenParen begin />
        <OpenCurly />
        {` ${displayMessage} `}
        <CloseCurly />
        <CloseParen end />
        <FuncArrow end />
        <OpenCurly newLine />
        <Tab />
        <CommentGreen>
            {`//Display device message directly to end user.`}
        </CommentGreen>
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString="Message from device: "
            logVar={displayMessage}
        />
        <NewLine />
        <Tab />
        <CloseCurly newLine />
        <NewLine />
        <Tab />
        <KeywordPurple>return</KeywordPurple>
        {` ${mainCallback}`}
        <SemiColon />
        <NewLine />
        <CloseCurly />
        <CloseParen />
        <ParenParam />
        <SemiColon />
        <NewLine />
        <CommentGreen>
            {feedToFunctionComment}
        </CommentGreen>
        <NewLine />
        <ConstBlue />
        {`${startTransactionOptions} `}
        <Equals end />
        <OpenCurly />
        <NewLine />
        {emvOptionsObj.map(({ keyName, val }) =>
            <ObjectProps 
                key={ keyName }
                propName={ keyName }
                propVal={ val }
            />
        )}
        <CloseCurly />
        <SemiColon />
        <NewLine repetitions={2} />
        <FuncDeclare 
            funcName="requestEmv"
            paramName={ false }
            isAsync
        />
        <OpenCurly begin />
        <NewLine />
        <Tab />
        <KeywordPurple>try</KeywordPurple>
        <OpenCurly begin />
        <NewLine />
        <Tab repetitions={2} />
        <ConstBlue />
        {`${startTransactionResp} `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {` ${magTekDevice}${dotInterface}`}
        <FuncYellow>startTransaction</FuncYellow>
        <ParenParam>
            {startTransactionOptions}
        </ParenParam>
        <SemiColon />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog 
            logString="Start Transaction Response: "
            logVar={startTransactionResp}
        />
        <FormatCatchAndEnd />
    </PreWrapper>
);