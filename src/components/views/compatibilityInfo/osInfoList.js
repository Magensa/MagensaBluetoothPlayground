import React from 'react';
import PropTypes from 'prop-types';
import { List, Divider, makeStyles } from '@material-ui/core';
import OsInfoListItem from './osInfoListItem';
import DetailsClickItem from './detailsClickItem';
import { fullWidth } from '../../../constants/styleConstants';

const osInfoListStyles = makeStyles({
    listFullWidth: fullWidth
});

const OsInfoList = ({ osName, minBrowserVersion, minOsVersion, behindFlag, detailedInstructions, setModalDetails }) => {

    const { listFullWidth } = osInfoListStyles();

    return (
        <List className={ listFullWidth }>
            <Divider />
            <OsInfoListItem
                listFullWidth={ listFullWidth }
            >
                <em>Browser version: </em>{`>=${minBrowserVersion}`}
            </OsInfoListItem>
           
            <OsInfoListItem
                listFullWidth={ listFullWidth }
            >
                <em>{`${osName} version: `}</em>{`>=${minOsVersion}`}
            </OsInfoListItem>

            {behindFlag &&
                <OsInfoListItem
                    listFullWidth={ listFullWidth }
                >
                    <em>WebBluetooth is behind flag: </em>{`${behindFlag}`}
                </OsInfoListItem>
            }

            {detailedInstructions &&
                <DetailsClickItem
                    listFullWidth={ listFullWidth }
                    clickHandler={ setModalDetails(detailedInstructions) }
                />
            }

        </List>
    );
}

OsInfoList.propTypes = {
    osName: PropTypes.string.isRequired, 
    minBrowserVersion: PropTypes.string.isRequired, 
    minOsVersion: PropTypes.string.isRequired, 
    behindFlag: PropTypes.string, 
    detailedInstructions: PropTypes.object.isRequired, 
    setModalDetails: PropTypes.func.isRequired
}

export default OsInfoList;