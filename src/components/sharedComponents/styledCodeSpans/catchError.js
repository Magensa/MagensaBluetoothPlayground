import React from 'react';
import { KeywordPurple } from './keywordPurple';
import { ParenParam } from './parenParam';
import { OpenCurly } from './openCurly';
import { Tab } from './tab';
import { ConsoleLog } from './consoleLog';
import { NewLine } from './newLine';
import { CloseCurly } from './closeCurly';

const CatchError = ({ repitions = 1 }) => {
    const err = `err`;

    return (
        <>
            <KeywordPurple>catch</KeywordPurple>
            <ParenParam>
                {err}
            </ParenParam>
            {` `}
            <OpenCurly newLine={true} />
            <Tab repitions={ repitions } />
            <ConsoleLog 
                isError={true}
                logVar={err}
            />
            <NewLine />
            <Tab repitions={repitions}/>
            <CloseCurly />
        </> 
    );
}

export { CatchError };    