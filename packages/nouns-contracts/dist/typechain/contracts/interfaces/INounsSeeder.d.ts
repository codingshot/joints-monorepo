import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace INounsSeeder {
    type SeedStruct = {
        background: BigNumberish;
        body: BigNumberish;
        accessory: BigNumberish;
        head: BigNumberish;
        glasses: BigNumberish;
    };
    type SeedStructOutput = [number, number, number, number, number] & {
        background: number;
        body: number;
        accessory: number;
        head: number;
        glasses: number;
    };
}
export interface INounsSeederInterface extends utils.Interface {
    functions: {
        "generateSeed(uint256,address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "generateSeed"): FunctionFragment;
    encodeFunctionData(functionFragment: "generateSeed", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "generateSeed", data: BytesLike): Result;
    events: {};
}
export interface INounsSeeder extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsSeederInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        generateSeed(nounId: BigNumberish, descriptor: string, overrides?: CallOverrides): Promise<[INounsSeeder.SeedStructOutput]>;
    };
    generateSeed(nounId: BigNumberish, descriptor: string, overrides?: CallOverrides): Promise<INounsSeeder.SeedStructOutput>;
    callStatic: {
        generateSeed(nounId: BigNumberish, descriptor: string, overrides?: CallOverrides): Promise<INounsSeeder.SeedStructOutput>;
    };
    filters: {};
    estimateGas: {
        generateSeed(nounId: BigNumberish, descriptor: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        generateSeed(nounId: BigNumberish, descriptor: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
