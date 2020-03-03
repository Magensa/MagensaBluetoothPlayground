import React, { memo } from 'react';
import { 
    FuncYellow, 
    CommentGreen, 
    KeywordPurple, 
    ConstBlue,
    StringOrange
} from '../../../sharedComponents/styledCodeSpans';

import { 
    initializeComment, 
    magensaBt, 
    initializeDeclaration, 
    initializeDeclaration1, 
    initializeDeclaration2, 
    initializeDeclaration3, 
    initializeDeclaration4, 
    initializeDeclaration5,
    initializeDeclaration6,
    initializeDeclaration7,
    initializeSuffix,
    initializeSuffix1
} from '../../../../constants/messageTemplates'
import PreWrapper from '../../../sharedComponents/preWrapper';


export default memo(_ =>
    <PreWrapper>
            <KeywordPurple>import</KeywordPurple>{` { scanForDevices } `}<KeywordPurple>from</KeywordPurple>
            <StringOrange>{magensaBt}</StringOrange>
            <ConstBlue>const </ConstBlue>
            <FuncYellow>mainCallback</FuncYellow>
            {initializeDeclaration}
            <StringOrange>"Callback Data: "</StringOrange>
            {initializeDeclaration1}
            <ConstBlue>const </ConstBlue>
            <FuncYellow>pairDevice</FuncYellow>
            {initializeDeclaration2}
            <ConstBlue>async</ConstBlue>
            {initializeDeclaration3}
            <KeywordPurple>try </KeywordPurple>
            {initializeDeclaration4}
            <ConstBlue>const </ConstBlue>
            {initializeDeclaration5}
            <KeywordPurple>await </KeywordPurple>
            {initializeDeclaration6}
            <KeywordPurple>await </KeywordPurple>
            {initializeDeclaration7}
            <CommentGreen>{initializeComment}</CommentGreen>
            {initializeSuffix}
            <KeywordPurple>catch</KeywordPurple>
            {initializeSuffix1}
    </PreWrapper>);