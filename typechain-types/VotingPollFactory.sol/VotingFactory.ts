/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface VotingFactoryInterface extends utils.Interface {
  functions: {
    "MAX_VOTES_PER_VOTER()": FunctionFragment;
    "createVotingPoll(string,address,string)": FunctionFragment;
    "getVotingPollF(uint256)": FunctionFragment;
    "getVotingPollOptions(uint256,string)": FunctionFragment;
    "vote(uint256,string)": FunctionFragment;
    "votesAvailable()": FunctionFragment;
    "votes_by_address(address)": FunctionFragment;
    "votingPollCount()": FunctionFragment;
    "votingPolls(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MAX_VOTES_PER_VOTER"
      | "createVotingPoll"
      | "getVotingPollF"
      | "getVotingPollOptions"
      | "vote"
      | "votesAvailable"
      | "votes_by_address"
      | "votingPollCount"
      | "votingPolls"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_VOTES_PER_VOTER",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createVotingPoll",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingPollF",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingPollOptions",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "votesAvailable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votes_by_address",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "votingPollCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "votingPolls",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_VOTES_PER_VOTER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createVotingPoll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingPollF",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingPollOptions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votesAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votes_by_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPollCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingPolls",
    data: BytesLike
  ): Result;

  events: {
    "NewVotingPoll()": EventFragment;
    "Voted()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewVotingPoll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Voted"): EventFragment;
}

export interface NewVotingPollEventObject {}
export type NewVotingPollEvent = TypedEvent<[], NewVotingPollEventObject>;

export type NewVotingPollEventFilter = TypedEventFilter<NewVotingPollEvent>;

export interface VotedEventObject {}
export type VotedEvent = TypedEvent<[], VotedEventObject>;

export type VotedEventFilter = TypedEventFilter<VotedEvent>;

export interface VotingFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VotingFactoryInterface;

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
    MAX_VOTES_PER_VOTER(overrides?: CallOverrides): Promise<[BigNumber]>;

    createVotingPoll(
      title: string,
      voter: string,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getVotingPollF(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, BigNumber]>;

    getVotingPollOptions(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    vote(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    votesAvailable(overrides?: CallOverrides): Promise<[BigNumber]>;

    votes_by_address(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    votingPollCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPolls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  MAX_VOTES_PER_VOTER(overrides?: CallOverrides): Promise<BigNumber>;

  createVotingPoll(
    title: string,
    voter: string,
    options: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getVotingPollF(
    id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, string, BigNumber]>;

  getVotingPollOptions(
    _votingPollID: BigNumberish,
    options: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  vote(
    _votingPollID: BigNumberish,
    options: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  votesAvailable(overrides?: CallOverrides): Promise<BigNumber>;

  votes_by_address(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  votingPollCount(overrides?: CallOverrides): Promise<BigNumber>;

  votingPolls(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    MAX_VOTES_PER_VOTER(overrides?: CallOverrides): Promise<BigNumber>;

    createVotingPoll(
      title: string,
      voter: string,
      options: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getVotingPollF(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, string, BigNumber]>;

    getVotingPollOptions(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: CallOverrides
    ): Promise<void>;

    votesAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    votes_by_address(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingPollCount(overrides?: CallOverrides): Promise<BigNumber>;

    votingPolls(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewVotingPoll()"(): NewVotingPollEventFilter;
    NewVotingPoll(): NewVotingPollEventFilter;

    "Voted()"(): VotedEventFilter;
    Voted(): VotedEventFilter;
  };

  estimateGas: {
    MAX_VOTES_PER_VOTER(overrides?: CallOverrides): Promise<BigNumber>;

    createVotingPoll(
      title: string,
      voter: string,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getVotingPollF(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingPollOptions(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    vote(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    votesAvailable(overrides?: CallOverrides): Promise<BigNumber>;

    votes_by_address(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingPollCount(overrides?: CallOverrides): Promise<BigNumber>;

    votingPolls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_VOTES_PER_VOTER(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createVotingPoll(
      title: string,
      voter: string,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getVotingPollF(
      id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotingPollOptions(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    vote(
      _votingPollID: BigNumberish,
      options: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    votesAvailable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votes_by_address(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingPollCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPolls(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
