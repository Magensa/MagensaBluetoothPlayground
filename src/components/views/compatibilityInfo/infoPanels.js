import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Typography
} from '@material-ui/core';
import LogoCard from './logoCard';

import ChromeLogo from './logos/chromeLogo';
import EdgeLogo from './logos/edgeLogo';
import OperaLogo from './logos/operaLogo';
import AndroidLogo from './logos/androidLogo';
import SamsungInternetLogo from './logos/samsungInternetLogo';


let displayItems = [
    {
        id: "desktop",
        header: "Desktop Browser Compatibility List",
        content: [
            {
                keyId: 1,
                title: "Google Chrome",
                LogoComponent: ChromeLogo,
                versionText: ">=56",
                osSupport: [
                    {
                        osName: "macOS",
                        minBrowserVersion: "56",
                        minOsVersion: "OS X Yosemite",
                        behindFlag: ""
                    },
                    {
                        osName: "Windows",
                        minBrowserVersion: "70",
                        minOsVersion: "10 1703",
                        behindFlag: ""
                    },
                    {
                        osName: "Linux",
                        minBrowserVersion: "56",
                        minOsVersion: "Kernel 3.19 BlueZ 5.41",
                        behindFlag: "chrome://flags/#enable-experimental-web-platform-features"
                    }
                ]
            },
            {
                keyId: 3,
                title: "Opera",
                LogoComponent: OperaLogo,
                versionText: ">=43",
                osSupport: [
                    {
                        osName: "macOS",
                        minBrowserVersion: "56",
                        minOsVersion: "OS X Yosemite",
                        behindFlag: ""
                    },
                    {
                        osName: "Windows",
                        minBrowserVersion: "70",
                        minOsVersion: "10 1703",
                        behindFlag: ""
                    },
                    {
                        osName: "Linux",
                        minBrowserVersion: "56",
                        minOsVersion: "Kernel 3.19 BlueZ 5.41",
                        behindFlag: "chrome://flags/#enable-experimental-web-platform-features"
                    }
                ]
            },
            {
                keyId: 2,
                title: "Microsoft Edge",
                LogoComponent: EdgeLogo,
                versionText: ">=79",
                osSupport: ["Apple", "Linux", "Windows"]
            }
        ]
    },
    {
        id: "mobile",
        header: "Mobile Browser Compatibility List",
        content: [
            {
                keyId: 4,
                title: "Samsung Browser",
                LogoComponent: SamsungInternetLogo,
                osSupport: [
                    {
                        osName: "Android",
                        minBrowserVersion: "6.2",
                        minOsVersion: "6.0 Marshmallow",
                        behindFlag: false
                    }
                ]
            },
            {
                keyId: 5,
                title: "Android Browser",
                LogoComponent: AndroidLogo,
                osSupport: [
                    {
                        osName: "Android",
                        minBrowserVersion: "76",
                        minOsVersion: "6.0 Marshmallow",
                        behindFlag: false
                    }
                ]
            }
        ]
    }
];

export default _ => 
    <Grid container spacing={4} direction='column'>

        {displayItems.map(({ id, header, content }) => (
            <Grid item key={id}>
                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${id}-info-content`}
                        id={`${id}-info-header`}
                    >
                        <Typography variant="subtitle1">
                            {header}
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails
                        id={`${id}-info-content`}
                    >

                        {content.map( eachContent => (
                            <LogoCard
                                key={ eachContent.keyId } 
                                cardContent={ eachContent } 
                            />
                        ))}

                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        ))}      
    </Grid>