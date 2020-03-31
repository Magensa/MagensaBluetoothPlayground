import React from 'react';
import { NewLine } from './newLine';
import { Tab } from './tab';
import { CloseCurly } from './closeCurly';
import { CatchError } from './catchError';

export const FormatCatchAndEnd = _ =>
    <>
        <NewLine />
        <Tab />
        <CloseCurly />
        <NewLine />
        <Tab />
        <CatchError />
        <NewLine />
        <CloseCurly />
    </>
