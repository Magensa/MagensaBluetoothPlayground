import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Typography,
    List,
    ListItem
} from '@material-ui/core';
import { OperationPanel } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import useConnectionFlag from '../../../../customHooks/useConnectionFlag';
import OpenCloseCode from './openCloseCode';

let openDeviceIsMounted = true;


const OpenCloseTemplate = ({ selectedDevice, isOpenDevice }) => {
    const [ openCloseResp, setOpenCloseResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const catchAndDisplay = useCatchAndDisplay();
    const fireConnectionFlag = useConnectionFlag();

    const openCloseDevice = async() => {
        setOpenCloseResp("");
        setIsLoading(true);

        try {
            const openDeviceResp = (isOpenDevice) ? 
                await selectedDevice.deviceInterface.openDevice() 
                : await selectedDevice.deviceInterface.closeDevice();

            if (openDeviceIsMounted) {
                setOpenCloseResp(
                    JSON.stringify(openDeviceResp, null, 4)
                );

                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);

            if (openDeviceIsMounted) { 
                setOpenCloseResp("");
                setIsLoading(false);
            }
        }

        fireConnectionFlag();
    }

    useEffect(() => {
        openDeviceIsMounted = true;
        return () => (openDeviceIsMounted = false);
    }, []);

    const cancelOpenClose = _ => {
        setIsLoading(false);
        setOpenCloseResp("");
        fireConnectionFlag();
    }

    const CodeComponentToRender = _ => 
        <OpenCloseCode definitionName={(isOpenDevice) ? "openDevice" : "closeDevice"} />

    const operationPanelProps = ({
        providedFunc: openCloseDevice,
        outputVal: openCloseResp,
        isLoading: isLoading,
        codeComponent: CodeComponentToRender,
        btnText: (isOpenDevice) ? "openDevice()" : "closeDevice()",
        loadingText: (isOpenDevice) ? "Opening Device..." : "Closing Device...",
        operationTitle: (isOpenDevice) ? "Open Device" : "Close Device",
        cancelText: "Cancel",
        cancelFunc: cancelOpenClose
    });

    return (
        <OperationPanel  { ...operationPanelProps } >
            <Typography variant='subtitle1'>
                Below is an example implementation of how to {(isOpenDevice ? "open" : "close")} your paired device.  There are no input parameters for this function.
                There are three possible outcomes when calling this function:
            </Typography>

            <List dense disablePadding>
                <ListItem>Success (success object returned)</ListItem>
                <ListItem>Handled Exception (status object returned, detailing the failure encountered)</ListItem>
                <ListItem>Unhandled Exception (Failure upstream from the library that threw an exception, and is rethrown to the caller)</ListItem>
            </List>

        </OperationPanel>
    );
}

OpenCloseTemplate.propTypes = {
    selectedDevice: PropTypes.object.isRequired,
    isOpenDevice: PropTypes.bool
}

export default OpenCloseTemplate;