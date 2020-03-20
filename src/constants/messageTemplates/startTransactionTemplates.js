import { 
    mainCallback, 
    magTekDevice, 
    space, 
    feedToFunctionComment, 
    dotInterface
} from './index';

export const displayMessage = `displayMessage`;
export const startTransactionOptions = `startTransactionOptions`;
export const startTransactionResp = `startTransactionResp`;

export const emvSwitchCases = [{
    str: "arqcData",
    consoleStr: "ArqcData: "
},
{
    str: "batchData",
    consoleStr: "Batch Data: "
}];

export const emvOptionsObj = [
    {
        keyName: "reportVerbosity",
        val: "verbose"
    },
    {
        keyName: "cardType",
        val: "all"
    },
    {
        keyName: "timeout",
        val: 30
    },
    {
        keyName: "currencyCode",
        val: "dollar"
    },
    {
        keyName: "authorizedAmount",
        val: 1000
    },
    {
        keyName: "transactionType",
        val: "purchase"
    }
];

export {
    mainCallback,
    magTekDevice,
    space,
    feedToFunctionComment,
    dotInterface
}