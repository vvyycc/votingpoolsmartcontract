/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  VotingFactory,
  VotingFactoryInterface,
} from "../../VotingPollFactory.sol/VotingFactory";

const _abi = [
  {
    inputs: [],
    name: "allVotingPoll",
    outputs: [
      {
        internalType: "contract VotingPoll[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "createVotingPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "list_voting_poll",
    outputs: [
      {
        internalType: "contract VotingPoll",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506110ad806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c8063241942cb146200004b57806355fcfb011462000081578063c02bceb014620000a3575b600080fd5b6200006960048036038101906200006391906200039f565b620000c3565b604051620000789190620004e7565b60405180910390f35b6200008b62000103565b6040516200009a9190620004c3565b60405180910390f35b620000c16004803603810190620000bb919062000345565b62000193565b005b60008181548110620000d457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060008054806020026020016040519081016040528092919081815260200182805480156200018957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116200013e575b5050505050905090565b8181604051620001a39062000297565b620001b092919062000504565b604051809103906000f080158015620001cd573d6000803e3d6000fd5b50600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610936806200074283390190565b6000620002bc620002b68462000561565b62000538565b905082815260208101848484011115620002d557600080fd5b620002e284828562000652565b509392505050565b600081359050620002fb816200070d565b92915050565b600082601f8301126200031357600080fd5b813562000325848260208601620002a5565b91505092915050565b6000813590506200033f8162000727565b92915050565b600080604083850312156200035957600080fd5b600083013567ffffffffffffffff8111156200037457600080fd5b620003828582860162000301565b92505060206200039585828601620002ea565b9150509250929050565b600060208284031215620003b257600080fd5b6000620003c2848285016200032e565b91505092915050565b6000620003d9838362000460565b60208301905092915050565b620003f081620005ec565b82525050565b60006200040382620005a7565b6200040f8185620005ca565b93506200041c8362000597565b8060005b8381101562000453578151620004378882620003cb565b97506200044483620005bd565b92505060018101905062000420565b5085935050505092915050565b6200046b816200062a565b82525050565b6200047c816200062a565b82525050565b60006200048f82620005b2565b6200049b8185620005db565b9350620004ad81856020860162000661565b620004b881620006fc565b840191505092915050565b60006020820190508181036000830152620004df8184620003f6565b905092915050565b6000602082019050620004fe600083018462000471565b92915050565b6000604082019050818103600083015262000520818562000482565b9050620005316020830184620003e5565b9392505050565b60006200054462000557565b905062000552828262000697565b919050565b6000604051905090565b600067ffffffffffffffff8211156200057f576200057e620006cd565b5b6200058a82620006fc565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000620005f98262000600565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000637826200063e565b9050919050565b60006200064b8262000600565b9050919050565b82818337600083830152505050565b60005b838110156200068157808201518184015260208101905062000664565b8381111562000691576000848401525b50505050565b620006a282620006fc565b810181811067ffffffffffffffff82111715620006c457620006c3620006cd565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6200071881620005ec565b81146200072457600080fd5b50565b620007328162000620565b81146200073e57600080fd5b5056fe60806040523480156200001157600080fd5b5060405162000936380380620009368339818101604052810190620000379190620002c8565b81600090805190602001906200004f929190620000ee565b506040518060600160405280600160ff168152602001600260ff168152602001600360ff168152506001906003620000899291906200017f565b506000600260006101000a81548160ff02191690831515021790555080600260016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050620004e0565b828054620000fc90620003eb565b90600052602060002090601f0160209004810192826200012057600085556200016c565b82601f106200013b57805160ff19168380011785556200016c565b828001600101855582156200016c579182015b828111156200016b5782518255916020019190600101906200014e565b5b5090506200017b919062000220565b5090565b826003601f016020900481019282156200020d5791602002820160005b83821115620001dc57835183826101000a81548160ff021916908360ff16021790555092602001926001016020816000010492830192600103026200019c565b80156200020b5782816101000a81549060ff0219169055600101602081600001049283019260010302620001dc565b505b5090506200021c919062000220565b5090565b5b808211156200023b57600081600090555060010162000221565b5090565b60006200025662000250846200034b565b62000322565b9050828152602081018484840111156200026f57600080fd5b6200027c848285620003b5565b509392505050565b6000815190506200029581620004c6565b92915050565b600082601f830112620002ad57600080fd5b8151620002bf8482602086016200023f565b91505092915050565b60008060408385031215620002dc57600080fd5b600083015167ffffffffffffffff811115620002f757600080fd5b62000305858286016200029b565b9250506020620003188582860162000284565b9150509250929050565b60006200032e62000341565b90506200033c828262000421565b919050565b6000604051905090565b600067ffffffffffffffff82111562000369576200036862000486565b5b6200037482620004b5565b9050602081019050919050565b60006200038e8262000395565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60005b83811015620003d5578082015181840152602081019050620003b8565b83811115620003e5576000848401525b50505050565b600060028204905060018216806200040457607f821691505b602082108114156200041b576200041a62000457565b5b50919050565b6200042c82620004b5565b810181811067ffffffffffffffff821117156200044e576200044d62000486565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004d18162000381565b8114620004dd57600080fd5b50565b61044680620004f06000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063409e2205146100515780634a79d50c14610081578063632a9a521461009f57806367e404ce146100bd575b600080fd5b61006b600480360381019061006691906101e1565b6100db565b60405161007891906102c8565b60405180910390f35b610089610105565b60405161009691906102a6565b60405180910390f35b6100a7610193565b6040516100b4919061028b565b60405180910390f35b6100c56101a6565b6040516100d29190610270565b60405180910390f35b600181600381106100eb57600080fd5b60209182820401919006915054906101000a900460ff1681565b6000805461011290610387565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610387565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b505050505081565b600260009054906101000a900460ff1681565b600260019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506101db816103f9565b92915050565b6000602082840312156101f357600080fd5b6000610201848285016101cc565b91505092915050565b610213816102ff565b82525050565b61022281610311565b82525050565b6000610233826102e3565b61023d81856102ee565b935061024d818560208601610354565b610256816103e8565b840191505092915050565b61026a81610347565b82525050565b6000602082019050610285600083018461020a565b92915050565b60006020820190506102a06000830184610219565b92915050565b600060208201905081810360008301526102c08184610228565b905092915050565b60006020820190506102dd6000830184610261565b92915050565b600081519050919050565b600082825260208201905092915050565b600061030a8261031d565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015610372578082015181840152602081019050610357565b83811115610381576000848401525b50505050565b6000600282049050600182168061039f57607f821691505b602082108114156103b3576103b26103b9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b6104028161033d565b811461040d57600080fd5b5056fea264697066735822122011658de57d1e75ff489893cf9e2e5e29e5a27f83a756ae84c5d64a6d2938130764736f6c63430008040033a26469706673582212209ef15f986a8f24282fe9fd6fd73e38d356c3fa38c9fe78302b03d2c9aa5a72e664736f6c63430008040033";

type VotingFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VotingFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VotingFactory__factory extends ContractFactory {
  constructor(...args: VotingFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VotingFactory> {
    return super.deploy(overrides || {}) as Promise<VotingFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VotingFactory {
    return super.attach(address) as VotingFactory;
  }
  override connect(signer: Signer): VotingFactory__factory {
    return super.connect(signer) as VotingFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VotingFactoryInterface {
    return new utils.Interface(_abi) as VotingFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VotingFactory {
    return new Contract(address, _abi, signerOrProvider) as VotingFactory;
  }
}