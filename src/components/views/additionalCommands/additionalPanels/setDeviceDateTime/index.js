import React from 'react';
import Typography from '@material-ui/core/Typography';
import { OperationPanel, ColoredCode } from '../../../../sharedComponents';
import useCatchAndDisplay from '../../../../customHooks/useCatchAndDisplay';
import usePanelBase from '../../../../customHooks/usePanelBase';
import DateTimeCode from './dateTimeCode';


export default ({ selectedDevice }) => {
    const [ 
        dateTimeResult, 
        setDateTimeResp,
        isLoading, 
        setIsLoading,
        dateTimeIsMounted
    ] = usePanelBase();
    const catchAndDisplay = useCatchAndDisplay();

    const setDateTime = async() => {
        setDateTimeResp("");
        setIsLoading(true);

        try {
            const dateTimeResp = await selectedDevice.deviceInterface.setDeviceDateTime();
            console.log(dateTimeResp);
            const resp = JSON.stringify(dateTimeResp, null, 4);

            if (dateTimeIsMounted) {
                setDateTimeResp(resp);
                setIsLoading(false);
            }
        }
        catch(err) {
            catchAndDisplay(err);

            if (dateTimeIsMounted) { 
                setDateTimeResp("");
                setIsLoading(false);
            }
        }
    }

    const cancelDateTime = _ => {
        setDateTimeResp("");
        setIsLoading(false);
    }

    const operationPanelProps = ({
        providedFunc: setDateTime,
        outputVal: dateTimeResult,
        isLoading: isLoading,
        codeComponent: DateTimeCode,
        btnText: "setDateTime()",
        loadingText: "Setting Device's Date/Time",
        operationTitle: "Set Device Date Time",
        cancelText: "Cancel",
        cancelFunc: cancelDateTime,
        subHeading: "SCRA devices only"
    });                                                                          

    return (
        <OperationPanel  { ...operationPanelProps } >

            <Typography variant='subtitle1' paragraph>
                Below is an example implementation of how to set your paried device's date and time.
            </Typography>
            
            <Typography variant='subtitle2' color="textSecondary">
                When this function is called without a parameter, it will set the time based upon the client's browser <ColoredCode>new Date();</ColoredCode>
                Optionally, this method will accept a specific time, but must be an instance of JavaScript's <ColoredCode>Date</ColoredCode>object.
            </Typography>

        </OperationPanel>
    );
}
