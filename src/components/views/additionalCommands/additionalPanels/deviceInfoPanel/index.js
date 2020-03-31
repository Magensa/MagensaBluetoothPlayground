import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import DeviceInfoCode from './deviceInfoCode';

let deviceInfoIsMounted = true;


export default ({ selectedDevice }) => {
    const [ deviceInfoResp, setDeviceInfoResp ] = useState(() => "");
    const [ isLoading, setIsLoading ] = useState(() => false);
    const catchAndDisplay = useCatchAndDisplay();

    const getDeviceInfo = async() => {
        setDeviceInfoResp("");
        setIsLoading(true);

        try {
            const deviceInfoResp = await selectedDevice.deviceInterface.deviceInfo();
            let resp = JSON.stringify(deviceInfoResp, null, 4);

            if (deviceInfoIsMounted) {
                setDeviceInfoResp(resp);
                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);

            if (deviceInfoIsMounted) { 
                setDeviceInfoResp("");
                setIsLoading(false);
            }
        }
    }

    useEffect(() => {
        deviceInfoIsMounted = true;
        return () => (deviceInfoIsMounted = false);
    }, []);

    const cancelGetInfo = _ => {
        setDeviceInfoResp("");
        setIsLoading(false);
    }

    const operationPanelProps = ({
        providedFunc: getDeviceInfo,
        outputVal: deviceInfoResp,
        isLoading: isLoading,
        codeComponent: DeviceInfoCode,
        btnText: "getDeviceInfo()",
        loadingText: "Retrieving Device Info",
        operationTitle:"Get Device Info",
        cancelText: "Cancel",
        cancelFunc: cancelGetInfo
    });

    return (
        <OperationPanel  { ...operationPanelProps } >

            <Typography variant='subtitle1' paragraph>
                Below is an example implementation of how to retrieve information for your paried device.
            </Typography>
            
            <Typography variant='subtitle2' color="textSecondary">
                The properties of the <ColoredCode>deviceInfo</ColoredCode>object will vary depending on the device.
            </Typography>

        </OperationPanel>
    );
}