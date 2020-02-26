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
                minOsVersion: "OS X Yosemite",
                osLogo: "/images/apple_logo.png",
                logoAlt: "apple-logo"
            },
            {
                osId: 2,
                osName: "Windows",
                minBrowserVersion: "70",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo",
                trim: 2
            },
            {
                osId: 3,
                osName: "Linux",
                minBrowserVersion: "56",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "chrome://flags/#enable-experimental-web-platform-features",
                osLogo: "/images/linux_tux_logo.png",
                logoAlt: "linux-logo",
                trim: 1
            },
            {
                osId: 4,
                osName: "Android",
                minBrowserVersion: "79",
                minOsVersion: "6.0 Marshmallow",
                osLogo: "/images/android_logo.png",
                logoAlt: "android-logo"
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
                minBrowserVersion: "43",
                minOsVersion: "OS X Yosemite",
                osLogo: "/images/apple_logo.png",
                logoAlt: "apple-logo1"
            },
            {
                osId: 6,
                osName: "Windows",
                minBrowserVersion: "65",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo1",
                trim: 2
            },
            {
                osId: 7,
                osName: "Linux",
                minBrowserVersion: "43",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "opera://flags/#enable-web-bluetooth",
                osLogo: "/images/linux_tux_logo.png",
                logoAlt: "linux-logo1",
                trim: 1
            },
            {
                osId: 8,
                osName: "Android",
                minBrowserVersion: "46 (Opera Mobile)",
                minOsVersion: "6.0 Marshmallow",
                osLogo: "/images/android_logo.png",
                logoAlt: "android-logo1",
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
                minOsVersion: "OS X Yosemite",
                osLogo: "/images/apple_logo.png",
                logoAlt: "apple-logo2"
            },
            {
                osId: 10,
                osName: "Windows",
                minBrowserVersion: "79",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo2",
                trim: 2
            },
            {
                osId: 11,
                osName: "Linux",
                minBrowserVersion: "79",
                minOsVersion: "Kernel 3.19 BlueZ 5.41",
                behindFlag: "edge://flags/#enable-experimental-web-platform-features",
                osLogo: "/images/linux_tux_logo.png",
                logoAlt: "linux-logow",
                trim: 1
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
                minOsVersion: "6.0 Marshmallow",
                osLogo: "/images/android_logo.png",
                logoAlt: "android-logo"
            }
        ]
    }
]

export { displayItems };