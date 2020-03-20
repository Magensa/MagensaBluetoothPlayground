import React from 'react';
import { List, Divider, makeStyles } from '@material-ui/core';
import OsInfoListItem from './osInfoListItem';
import DetailsClickItem from './detailsClickItem';
import { fullWidth } from '../../../constants/styleConstants';

const osInfoListStyles = makeStyles({
    listFullWidth: fullWidth
});

export default ({ osName, minBrowserVersion, minOsVersion, behindFlag, detailedInstructions, setModalDetails }) => {

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