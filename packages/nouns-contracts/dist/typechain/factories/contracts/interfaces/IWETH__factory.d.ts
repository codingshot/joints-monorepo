import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IWETH, IWETHInterface } from "../../../contracts/interfaces/IWETH";
export declare class IWETH__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IWETHInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IWETH;
}
