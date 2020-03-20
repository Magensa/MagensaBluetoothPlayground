import React from 'react';
import PropTypes from 'prop-types';
import {
    KeywordPurple,
    ConstBlue,
    StringOrange,
    OpenParen,
    CloseParen,
    Tab,
    NewLine,
    ConsoleLog,
    SemiColon,
    Colon
} from '../../../../../sharedComponents/styledCodeSpans';
import { space, callBackData } from '../../../../../../constants/messageTemplates';


const StartTrxCodeCase = ({ propString, consoleString }) => 
    <>
        <KeywordPurple>case</KeywordPurple>
        {space}
        <OpenParen />
        <StringOrange>{propString}</StringOrange>
        {space}
        <ConstBlue>in</ConstBlue>
        {space}
        {callBackData}
        <CloseParen />
        <Colon />
        <NewLine />
        <Tab repetitions={4} />
        <ConsoleLog
            logString={ consoleString }
            logVar={ callBackData }
        />
        <NewLine />
        <Tab repetitions={4} />
        <KeywordPurple>break</KeywordPurple>
        <SemiColon />
        <NewLine />
    </>;

StartTrxCodeCase.propTypes = {
    propString: PropTypes.string.isRequired
}

export default StartTrxCodeCase;