/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface VotingPollInterface extends utils.Interface {
  functions: {
    "options(uint256)": FunctionFragment;
    "sender()": FunctionFragment;
    "title()": FunctionFragment;
    "vote()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "options" | "sender" | "title" | "vote"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "options",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "sender", values?: undefined): string;
  encodeFunctionData(functionFragment: "title", values?: undefined): string;
  encodeFunctionData(functionFragment: "vote", values?: undefined): string;

  decodeFunctionResult(functionFragment: "options", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sender", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "title", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface VotingPoll extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingPollInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<[number]>;

    sender(overrides?: CallOverrides): Promise<[string]>;

    title(overrides?: CallOverrides): Promise<[string]>;

    vote(overrides?: CallOverrides): Promise<[boolean]>;
  };

  options(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

  sender(overrides?: CallOverrides): Promise<string>;

  title(overrides?: CallOverrides): Promise<string>;

  vote(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<number>;

    sender(overrides?: CallOverrides): Promise<string>;

    title(overrides?: CallOverrides): Promise<string>;

    vote(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    sender(overrides?: CallOverrides): Promise<BigNumber>;

    title(overrides?: CallOverrides): Promise<BigNumber>;

    vote(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sender(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    title(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vote(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
