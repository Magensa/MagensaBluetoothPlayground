import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import IsDeviceOpenCode from './isDeviceOpenCode';


export default ({ selectedDevice }) => {
    const [ isOpenResp, setIsOpenResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);

    const isDeviceOpen = () => {
        setIsOpenResp("");
        setIsLoading(true);

        const isDeviceOpenResp = selectedDevice.deviceInterface.isDeviceOpen();
        let resp = isDeviceOpenResp.toString();

        setIsOpenResp(resp);
        setIsLoading(false);
    }

    const operationPanelProps = ({
        providedFunc: isDeviceOpen,
        outputVal: isOpenResp,
        isLoading: isLoading,
        codeComponent: IsDeviceOpenCode,
        btnText: "isDeviceOpen()",
        operationTitle:"Is Device Open",
        loadingText: "Is Device Open Query"
    });

    return (
        <OperationPanel  { ...operationPanelProps } >

            <Typography variant='subtitle1' paragraph>
                Use this function to query the current open status of your paired device.
            </Typography>
            
            <Typography variant='subtitle2' color="textSecondary">
                This is the only synchronous function in the <ColoredCode>deviceInterface.</ColoredCode>The output will be a boolean denoting if the device is open.
                Below you will find a simple implementation of how to utilize this function.
            </Typography>

        </OperationPanel>
    );
}