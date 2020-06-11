import React from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import usePanelBase from '../../../../customHooks/usePanelBase';
import DeviceInfoCode from './deviceInfoCode';


export default ({ selectedDevice }) => {
    const [ 
        deviceInfoResult, 
        setDeviceInfoResult,
        isLoading, 
        setIsLoading,
        deviceInfoIsMounted
    ] = usePanelBase();
    const catchAndDisplay = useCatchAndDisplay();

    const getDeviceInfo = async() => {
        setDeviceInfoResult("");
        setIsLoading(true);

        try {
            const deviceInfoResp = await selectedDevice.deviceInterface.deviceInfo();
            const resp = JSON.stringify(deviceInfoResp, null, 4);

            if (deviceInfoIsMounted) {
                setDeviceInfoResult(resp);
                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);

            if (deviceInfoIsMounted) { 
                setDeviceInfoResult("");
                setIsLoading(false);
            }
        }
    }

    const cancelGetInfo = _ => {
        setDeviceInfoResult("");
        setIsLoading(false);
    }

    const operationPanelProps = ({
        providedFunc: getDeviceInfo,
        outputVal: deviceInfoResult,
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