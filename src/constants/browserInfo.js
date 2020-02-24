import ChromeLogo from './logos/chromeLogo';
import EdgeLogo from './logos/edgeLogo';
import OperaLogo from './logos/operaLogo';
import SamsungInternetLogo from './logos/samsungInternetLogo';

const displayItems = [
    {
        id: "chrome",
        title: "Google Chrome",
        LogoComponent: ChromeLogo,
        versionText: ">=56",
        osSupport: [
            {
                osId: 1,
                osName: "macOS",
                minBrowserVersion: "56",
                minOsVersion: "OS X Yosemite"
            },
            {
                osId: 2,
                osName: "Windows",
                minBrowserVersion: "70",
                minOsVersion: "10 1703"
            },
            {
                osId: 3,
                osName: "Linux",
                minBrowserVersion: "56",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "chrome://flags/#enable-experimental-web-platform-features"
            },
            {
                osId: 4,
                osName: "Android",
                minBrowserVersion: "79",
                minOsVersion: "6.0 Marshmallow"
            }
        ]
    },
    {
        id: "opera",
        title: "Opera",
        LogoComponent: OperaLogo,
        versionText: ">=43",
        osSupport: [
            {
                osId: 5,
                osName: "macOS",
                minBrowserVersion: ">=43",
                minOsVersion: "OS X Yosemite"
            },
            {
                osId: 6,
                osName: "Windows",
                minBrowserVersion: ">=65",
                minOsVersion: "10 1703"
            },
            {
                osId: 7,
                osName: "Linux",
                minBrowserVersion: ">=43",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "opera://flags/#enable-web-bluetooth"
            },
            {
                osId: 8,
                osName: "Android",
                minBrowserVersion: ">=46 (Opera Mobile)",
                minOsVersion: "6.0 Marshmallow"
            }
        ]
    },
    {
        id: "edge",
        title: "Microsoft Edge",
        LogoComponent: EdgeLogo,
        versionText: ">=79",
        osSupport: [
            {
                osId: 9,
                osName: "macOS",
                minBrowserVersion: "79",
                minOsVersion: "OS X Yosemite"
            },
            {
                osId: 10,
                osName: "Windows",
                minBrowserVersion: "79",
                minOsVersion: "10 1703"
            },
            {
                osId: 11,
                osName: "Linux",
                minBrowserVersion: "79",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "edge://flags/#enable-experimental-web-platform-features"
            }
        ]
    },
    {
        id: "samsungBrowser",
        title: "Samsung Browser",
        LogoComponent: SamsungInternetLogo,
        versionText: ">=6.4",
        osSupport: [
            {
                osId: 12,
                osName: "Android",
                minBrowserVersion: "6.4",
                minOsVersion: "6.0 Marshmallow"
            }
        ]
    }
]

export { displayItems };