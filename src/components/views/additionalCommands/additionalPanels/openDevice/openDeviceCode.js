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
        <FuncDeclare />
    </PreWrapper>);