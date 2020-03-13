import { scanForDevices } from 'magensa-bluetooth';
import { useDispatch } from 'react-redux';
import { selectDevice } from '../../../redux/actions';
import useCatchAndDisplay from '../useCatchAndDisplay';
import { unSuccessfulPair } from '../../../constants';

export default ({ trxHandler }) => {
    const pairDeviceDispatch = useDispatch();
    const catchDisplayToUser = useCatchAndDisplay();

    const pairDevice = devicePrefix => async(e) => {
        try {
            const device = (!devicePrefix) ? await scanForDevices(trxHandler) 
                : await scanForDevices(trxHandler, devicePrefix);

            if (device) {
                await device.deviceInterface.openDevice();

                window.MagTekDevice = device;

                pairDeviceDispatch(
                    selectDevice( device )
                );
            }
            else
                catchDisplayToUser( unSuccessfulPair );
        }
        catch(err) {
            catchDisplayToUser(err);
        }
    }

    return pairDevice;
}