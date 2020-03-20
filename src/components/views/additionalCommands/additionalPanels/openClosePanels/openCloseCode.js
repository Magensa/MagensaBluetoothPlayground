import React, { memo } from 'react';

import PreWrapper from '../../../../sharedComponents/preWrapper';
import { 
    FuncYellow, 
    KeywordPurple, 
    ConstBlue,
    Equals,
    OpenCurly,
    CloseCurly,
    Tab,
    NewLine,
    ConsoleLog,
    CatchError,
    ParenParam,
    FuncDeclare,
    SemiColon
} from '../../../../sharedComponents/styledCodeSpans';

import {
    dotInterface,
    magTekDevice
} from '../../../../../constants/messageTemplates';

export default memo(({ definitionName }) =>
    <PreWrapper>
        <FuncDeclare
            funcName={ definitionName }
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
        {`${definitionName}Resp `}
        <Equals end />
        <KeywordPurple>await</KeywordPurple>
        {` ${magTekDevice}${dotInterface}`}
        <FuncYellow>{definitionName}</FuncYellow>
        <ParenParam />
        <SemiColon />
        <NewLine />
        <Tab repetitions={2} />
        <ConsoleLog logVar={`${definitionName}Resp`} />
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