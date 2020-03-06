import React, { memo, Fragment } from 'react';
import PreWrapper from '../../../../../sharedComponents/preWrapper';
import StartTrxCodeCase from './startTrxCodeCase';
import ObjectProps from './objectProperties';
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
    CatchError,
    SemiColon,
    FuncDeclare,
    Colon
} from '../../../../../sharedComponents/styledCodeSpans';

import { 
    emvOptionsObj, 
    mainCallback, 
    magTekDevice, 
    space, 
    feedToFunctionComment, 
    emvSwitchCases,
    dotInterface
} from '../../../../../../constants/messageTemplates';

const displayMessage = `displayMessage`;
const startTransactionOptions = `startTransactionOptions`;
const startTransactionResp = `startTransactionResp`;

export default memo(_ =>
    <PreWrapper>
        <ConstBlue>const </ConstBlue>
        {mainCallback}
        <Equals begin />
        <OpenParen begin />
        <ConstBlue>function</ConstBlue>
        <OpenParen />
        {space}
        <OpenCurly newLine />
        <Tab />
        <FuncDeclare  />
        <OpenCurly newLine />
        <Tab repitions={2} />
        <KeywordPurple>switch</KeywordPurple>
        <ParenParam>
            <ConstBlue>true</ConstBlue>
        </ParenParam>
        {space}
        <OpenCurly newLine />
        <Tab repitions={3} />

        {emvSwitchCases.map(({ str, consoleStr }) => 
            <Fragment key={str}> 
                <StartTrxCodeCase 
                    propString={str}
                    consoleString={consoleStr}
                />
                <Tab repitions={3} />
            </Fragment>
        )}

        <KeywordPurple>default</KeywordPurple>
        <Colon />
        <NewLine />
        <Tab repitions={4} />
        <ConsoleLog 
            logString="No EMV data returned"
        />
        <NewLine />
        <Tab repitions={2} />
        <CloseCurly newLine />
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
        <Tab repitions={2} />
        <CommentGreen>
            {`//Display device message directly to end user.`}
        </CommentGreen>
        <NewLine />
        <Tab repitions={2} />
        <ConsoleLog 
            logString="Message from device: "
            logVar={displayMessage}
        />
        <NewLine />
        <Tab repitions={2} />
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
        <ConstBlue>const</ConstBlue>
        {`${startTransactionOptions} `}
        <Equals end />
        <OpenCurly newLine />
        {emvOptionsObj.map(({ keyName, val }) =>
            <ObjectProps 
                key={ keyName }
                propName={ keyName }
                propVal={ val }
            />
        )}
        <CloseCurly />
        <SemiColon />
        <NewLine repitions={2}/>
        <FuncDeclare 
            funcName="requestEmv"
            paramName={false}
        />
        <OpenCurly begin />
        <NewLine />
        <Tab />
        <KeywordPurple>try</KeywordPurple>
        <OpenCurly begin />
        <NewLine />
        <Tab repitions={2} />
        <ConstBlue>const</ConstBlue>
        {`${startTransactionResp} `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {` ${magTekDevice}${dotInterface}.`}
        <FuncYellow>startTransaction</FuncYellow>
        <ParenParam>
            {startTransactionOptions}
        </ParenParam>
        <SemiColon />
        <NewLine />
        <Tab repitions={2} />
        <ConsoleLog 
            logString="Start Transaction Response: "
            logVar={startTransactionResp}
        />
        <NewLine />
        <Tab />
        <CloseCurly newLine />
        <Tab />
        <CatchError repitions={2}/>
        <NewLine />
        <CloseCurly />
    </PreWrapper>
);

// const mainCallback = (function() {
//     const mainCallback = (callbackData) => {
//         switch(true) {
//             case ("arqcData" in callbackData):
//                 console.log("ArqcData: ", callbackData);
//                 break;
//             case ("batchData" in callbackData):
//                 console.log("Batch Data: ", callbackData);
//                 break;
//             default:
//                 console.log("No EMV data returned");
//         }
//     }

//     mainCallback.displayCallback = ({ displayMessage }) => {
//         //Display device message directly to end user.
//         console.log("Message from device: ", displayMessage);
//     }

//     return baseCallback
// })();

// /*
//     This callback would be fed to 'scanForDevices' function during initialization
// */

// const startTransactionOptions = {
//     reportVerbosity: "verbose",
//     cardType: "all",
//     timeout: 30,
//     currencyCode: "dollar",
//     authorizedAmount: 1000,
//     transactionType: "purchase"
// };

// const requestEmv = () => {
//     try {
//         const startTransactionResp = await MagTekDevice.deviceInterface.startTransaction(startTransactionOptions);
//         console.log("Start Transaction Response: ", startTransactionResp);
//     }
//     catch(err) {
//         console.error(err);
//     }
// }