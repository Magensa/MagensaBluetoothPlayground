import ChromeLogo from './logos/chromeLogo';
import EdgeLogo from './logos/edgeLogo';
import OperaLogo from './logos/operaLogo';
import SamsungInternetLogo from './logos/samsungInternetLogo';

const displayItems = [
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
                        minOsVersion: "OS X Yosemite"
                    },
                    {
                        osName: "Windows",
                        minBrowserVersion: "70",
                        minOsVersion: "10 1703"
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
                        minBrowserVersion: "43",
                        minOsVersion: "OS X Yosemite"
                    },
                    {
                        osName: "Windows",
                        minBrowserVersion: "65",
                        minOsVersion: "10 1703"
                    },
                    {
                        osName: "Linux",
                        minBrowserVersion: "43",
                        minOsVersion: "Kernel 3.19 BlueZ 5.41",
                        behindFlag: "opera://flags/#enable-web-bluetooth"
                    }
                ]
            },
            {
                keyId: 2,
                title: "Microsoft Edge",
                LogoComponent: EdgeLogo,
                versionText: ">=79",
                osSupport: [
                    {
                        osName: "macOS",
                        minBrowserVersion: "79",
                        minOsVersion: "OS X Yosemite"
                    },
                    {
                        osName: "Windows",
                        minBrowserVersion: "79",
                        minOsVersion: "10 1703"
                    },
                    {
                        osName: "Linux",
                        minBrowserVersion: "79",
                        minOsVersion: "Kernel 3.19 BlueZ 5.41",
                        behindFlag: "edge://flags/#enable-experimental-web-platform-features"
                    }
                ]
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
                versionText: ">=6.4",
                osSupport: [
                    {
                        osName: "Android",
                        minBrowserVersion: "6.4",
                        minOsVersion: "6.0 Marshmallow"
                    }
                ]
            },
            {
                keyId: 5,
                title: "Google Chrome",
                LogoComponent: ChromeLogo,
                versionText: ">=79",
                osSupport: [
                    {
                        osName: "Android",
                        minBrowserVersion: "79",
                        minOsVersion: "6.0 Marshmallow"
                    }
                ]
            },
            {
                keyId: 3,
                title: "Opera Mobile",
                LogoComponent: OperaLogo,
                versionText: ">=46",
                osSupport: [
                    {
                        osName: "Android",
                        minBrowserVersion: "79",
                        minOsVersion: "6.0 Marshmallow"
                    }
                ]
            },
        ]
    }
];

export { displayItems };