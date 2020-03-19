import ChromeLogo from './logos/chromeLogo';
import EdgeLogo from './logos/edgeLogo';
import OperaLogo from './logos/operaLogo';
import SamsungInternetLogo from './logos/samsungInternetLogo';
import { device } from './messageTemplates/initializationTemplates';

const bluetooth = "Bluetooth";
const importantPairNote = "NOTE: It is very important that the pair window should prompt you for a pair code.";
const unsuccessfulPairNote = `If the ${device} pairs without a pair code - this is an unsuccessful pair`;
const oneTimeOperationNote = osName => `Once this process is completed, it does not need to be repeated, unless you unpair your ${device} from ${osName}.`;
const discoveryMode = num => `${num}. Ensure your ${device} is in 'discovery' mode:`;

const devicePairMode = [
    `PinPad ${device}s - tap the power button to power on the ${device}.`,
    `SCRA ${device}s - tap button to power on ${device}. Once it is on, hold down button for 2.5 seconds (light will turn blue, and flash).`,
];

const windowsInstructions = {
    detailsTitle: `Pair ${bluetooth} ${device} with Windows, prior to utilizing Web${bluetooth}.`,
    details: [
        "1. Click 'Start', followed by 'Settings' (gear icon).",
        `2. Click 'Devices', '${bluetooth} & other ${device}s'.`,
        `3. Ensure the ${bluetooth} toggle is turned 'On', then click the '+ Add ${bluetooth} or other ${device}' button.`,
        discoveryMode(4),
        devicePairMode,
        `5. Click '${bluetooth}' from the 'Add a ${device}' window. Locate your ${device} and click on it.`,
        `${importantPairNote} The pair code is '000000' (six zeros). If the ${device} pairs without a pair code - this is an unsuccessful pair, and you must remove it and start these instructions over again. You can remove a pairing from the '${bluetooth} & other devices' window by locating your device under 'Other devices', click on it, then select 'Remove Device'`,
        oneTimeOperationNote("Windows")
    ]
}

const macInstructions = {
    detailsTitle: `Prompt a passcode entry upon initial ${device} pair.`,
    details: [
        `1. Open your preferred (compatible) browser and navigate to a site the utilizes Web${bluetooth} (this Magensa ${bluetooth} Playground, is a good example).`,
        discoveryMode(2),
        devicePairMode,
        `3. When the pair window appears (such as when you click the 'Pair Device' button on the home page of this playground), select your ${device} from the window.`,
        "4. You should be prompted for the pair code - enter the pair code ('000000' - six zeros) and click 'Connect'",
        `5. Your ${device} is now paired with your macOS, and you will not have to repeat this initial pair process again.`,
        `${importantPairNote} ${unsuccessfulPairNote}.` + " If this happens, please refresh the page and try these steps again to obtain a pair prompt.",
        oneTimeOperationNote("macOS")
    ]
}

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
                logoAlt: "apple-logo",
                detailedInstructions: macInstructions
            },
            {
                osId: 2,
                osName: "Windows",
                minBrowserVersion: "70",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo",
                trim: 2,
                detailedInstructions: windowsInstructions
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
                logoAlt: "apple-logo1",
                detailedInstructions: macInstructions
            },
            {
                osId: 6,
                osName: "Windows",
                minBrowserVersion: "65",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo1",
                trim: 2,
                detailedInstructions: windowsInstructions
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
                logoAlt: "apple-logo2",
                detailedInstructions: macInstructions
            },
            {
                osId: 10,
                osName: "Windows",
                minBrowserVersion: "79",
                minOsVersion: "10 1703",
                osLogo: "/images/windows_logo.png",
                logoAlt: "windows-logo2",
                trim: 2,
                detailedInstructions: windowsInstructions
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