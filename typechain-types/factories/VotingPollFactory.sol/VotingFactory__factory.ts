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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "NewVotingPoll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Voted",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_VOTES_PER_VOTER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
      {
        internalType: "string",
        name: "options",
        type: "string",
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
        name: "id",
        type: "uint256",
      },
    ],
    name: "getVotingPollF",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votingPollID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "options",
        type: "string",
      },
    ],
    name: "getVotingPollOptions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_votingPollID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "options",
        type: "string",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "votesAvailable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "votes_by_address",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "votingPollCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "votingPolls",
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
  "0x608060405234801561001057600080fd5b506000600481905550612053806100286000396000f3fe60806040523480156200001157600080fd5b5060043610620000a05760003560e01c80637c3b05bd116200006f5780637c3b05bd146200013f578063937e5ab91462000177578063bdb04d1a14620001ad578063c352789814620001e3578063e7e79d37146200020357620000a0565b80632410847514620000a5578063416cef3e14620000c557806359d4365414620000e75780637451e6f3146200011d575b600080fd5b620000c36004803603810190620000bd919062000ae2565b62000225565b005b620000cf62000468565b604051620000de919062000d7f565b60405180910390f35b620001056004803603810190620000ff919062000a8a565b6200046d565b60405162000114919062000c94565b60405180910390f35b62000127620004a0565b60405162000136919062000d7f565b60405180910390f35b6200015d600480360381019062000157919062000a8a565b620004a6565b6040516200016e9392919062000dd0565b60405180910390f35b6200019560048036038101906200018f9190620009d6565b620005c7565b604051620001a4919062000d7f565b60405180910390f35b620001cb6004803603810190620001c5919062000ae2565b620005df565b604051620001da919062000d7f565b60405180910390f35b620002016004803603810190620001fb919062000a02565b620006ff565b005b6200020d6200084a565b6040516200021c919062000d7f565b60405180910390f35b6001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410620002aa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002a19062000d19565b60405180910390fd5b600082118015620002bd57506004548211155b620002ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002f69062000d3b565b60405180910390fd5b600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190620003519062000fab565b91905055506002600083815260200190815260200160002060008154809291906200037c9062000fab565b91905055506001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c366c56c6002600085815260200190815260200160002054836040518363ffffffff1660e01b81526004016200040492919062000d9c565b600060405180830381600087803b1580156200041f57600080fd5b505af115801562000434573d6000803e3d6000fd5b505050507f650d798f3862ff92822acb5de11a760351b122df0cf4e24ef80b0a7ff82e0eb960405160405180910390a15050565b600181565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b6000606060008060045411620004f3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004ea9062000d5d565b60405180910390fd5b6001600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663fa2176df856040518263ffffffff1660e01b815260040162000561919062000d7f565b60006040518083038186803b1580156200057a57600080fd5b505afa1580156200058f573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250810190620005ba919062000b3c565b9250925092509193909250565b60036020528060005260406000206000915090505481565b60008083118015620005f357506004548311155b62000635576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200062c9062000d3b565b60405180910390fd5b6001600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630301047c836040518263ffffffff1660e01b8152600401620006a3919062000cb1565b60206040518083038186803b158015620006bc57600080fd5b505afa158015620006d1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620006f7919062000ab6565b905092915050565b60046000815480929190620007149062000fab565b919050555082826004546040516200072c906200089f565b6200073a9392919062000cd5565b604051809103906000f08015801562000757573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016000600454815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620008196004548262000225565b7fcec0e87e1a987075321d3ef5dcf3330b760698a7d1cc9a86e61d752635785f6960405160405180910390a1505050565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460016200089a919062000e8f565b905090565b610ee0806200113e83390190565b6000620008c4620008be8462000e3d565b62000e14565b905082815260208101848484011115620008dd57600080fd5b620008ea84828562000f30565b509392505050565b600062000909620009038462000e3d565b62000e14565b9050828152602081018484840111156200092257600080fd5b6200092f84828562000f3f565b509392505050565b600081359050620009488162001109565b92915050565b600082601f8301126200096057600080fd5b813562000972848260208601620008ad565b91505092915050565b600082601f8301126200098d57600080fd5b81516200099f848260208601620008f2565b91505092915050565b600081359050620009b98162001123565b92915050565b600081519050620009d08162001123565b92915050565b600060208284031215620009e957600080fd5b6000620009f98482850162000937565b91505092915050565b60008060006060848603121562000a1857600080fd5b600084013567ffffffffffffffff81111562000a3357600080fd5b62000a41868287016200094e565b935050602062000a548682870162000937565b925050604084013567ffffffffffffffff81111562000a7257600080fd5b62000a80868287016200094e565b9150509250925092565b60006020828403121562000a9d57600080fd5b600062000aad84828501620009a8565b91505092915050565b60006020828403121562000ac957600080fd5b600062000ad984828501620009bf565b91505092915050565b6000806040838503121562000af657600080fd5b600062000b0685828601620009a8565b925050602083013567ffffffffffffffff81111562000b2457600080fd5b62000b32858286016200094e565b9150509250929050565b60008060006060848603121562000b5257600080fd5b600062000b6286828701620009bf565b935050602084015167ffffffffffffffff81111562000b8057600080fd5b62000b8e868287016200097b565b925050604062000ba186828701620009bf565b9150509250925092565b62000bb68162000eca565b82525050565b62000bc78162000f08565b82525050565b600062000bda8262000e73565b62000be6818562000e7e565b935062000bf881856020860162000f3f565b62000c038162001057565b840191505092915050565b600062000c1d60188362000e7e565b915062000c2a8262001068565b602082019050919050565b600062000c44601e8362000e7e565b915062000c518262001091565b602082019050919050565b600062000c6b60318362000e7e565b915062000c7882620010ba565b604082019050919050565b62000c8e8162000efe565b82525050565b600060208201905062000cab600083018462000bbc565b92915050565b6000602082019050818103600083015262000ccd818462000bcd565b905092915050565b6000606082019050818103600083015262000cf1818662000bcd565b905062000d02602083018562000bab565b62000d11604083018462000c83565b949350505050565b6000602082019050818103600083015262000d348162000c0e565b9050919050565b6000602082019050818103600083015262000d568162000c35565b9050919050565b6000602082019050818103600083015262000d788162000c5c565b9050919050565b600060208201905062000d96600083018462000c83565b92915050565b600060408201905062000db3600083018562000c83565b818103602083015262000dc7818462000bcd565b90509392505050565b600060608201905062000de7600083018662000c83565b818103602083015262000dfb818562000bcd565b905062000e0c604083018462000c83565b949350505050565b600062000e2062000e33565b905062000e2e828262000f75565b919050565b6000604051905090565b600067ffffffffffffffff82111562000e5b5762000e5a62001028565b5b62000e668262001057565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600062000e9c8262000efe565b915062000ea98362000efe565b92508282101562000ebf5762000ebe62000ff9565b5b828203905092915050565b600062000ed78262000ede565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000f158262000f1c565b9050919050565b600062000f298262000ede565b9050919050565b82818337600083830152505050565b60005b8381101562000f5f57808201518184015260208101905062000f42565b8381111562000f6f576000848401525b50505050565b62000f808262001057565b810181811067ffffffffffffffff8211171562000fa25762000fa162001028565b5b80604052505050565b600062000fb88262000efe565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000fee5762000fed62000ff9565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f566f74657220686173206e6f20766f746573206c6566742e0000000000000000600082015250565b7f566f74696e67506f6c6c204944206973206f7574206f662072616e67652e0000600082015250565b7f546865206c69737420697320656d7074792c20796f752073686f756c6420637260008201527f65617465206120566f74696e67506f6c6c000000000000000000000000000000602082015250565b620011148162000eca565b81146200112057600080fd5b50565b6200112e8162000efe565b81146200113a57600080fd5b5056fe60806040523480156200001157600080fd5b5060405162000ee038038062000ee083398181016040528101906200003791906200023a565b80600081905550826001908051906020019062000056929190620000ea565b5081600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600060038190555033600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050506200048b565b828054620000f8906200037c565b90600052602060002090601f0160209004810192826200011c576000855562000168565b82601f106200013757805160ff191683800117855562000168565b8280016001018555821562000168579182015b82811115620001675782518255916020019190600101906200014a565b5b5090506200017791906200017b565b5090565b5b80821115620001965760008160009055506001016200017c565b5090565b6000620001b1620001ab84620002d2565b620002a9565b905082815260208101848484011115620001ca57600080fd5b620001d784828562000346565b509392505050565b600081519050620001f08162000457565b92915050565b600082601f8301126200020857600080fd5b81516200021a8482602086016200019a565b91505092915050565b600081519050620002348162000471565b92915050565b6000806000606084860312156200025057600080fd5b600084015167ffffffffffffffff8111156200026b57600080fd5b6200027986828701620001f6565b93505060206200028c86828701620001df565b92505060406200029f8682870162000223565b9150509250925092565b6000620002b5620002c8565b9050620002c38282620003b2565b919050565b6000604051905090565b600067ffffffffffffffff821115620002f057620002ef62000417565b5b620002fb8262000446565b9050602081019050919050565b600062000315826200031c565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156200036657808201518184015260208101905062000349565b8381111562000376576000848401525b50505050565b600060028204905060018216806200039557607f821691505b60208210811415620003ac57620003ab620003e8565b5b50919050565b620003bd8262000446565b810181811067ffffffffffffffff82111715620003df57620003de62000417565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620004628162000308565b81146200046e57600080fd5b50565b6200047c816200033c565b81146200048857600080fd5b50565b610a45806200049b6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630301047c146100675780634a79d50c14610097578063632a9a52146100b55780638da5cb5b146100d3578063c366c56c146100f1578063fa2176df1461010d575b600080fd5b610081600480360381019061007c91906104e8565b61013f565b60405161008e9190610708565b60405180910390f35b61009f610167565b6040516100ac91906106a6565b60405180910390f35b6100bd6101f5565b6040516100ca9190610708565b60405180910390f35b6100db6101fb565b6040516100e8919061068b565b60405180910390f35b61010b60048036038101906101069190610552565b610221565b005b61012760048036038101906101229190610529565b6102f0565b60405161013693929190610723565b60405180910390f35b60006002826040516101519190610674565b9081526020016040518091039020549050919050565b600180546101749061085c565b80601f01602080910402602001604051908101604052809291908181526020018280546101a09061085c565b80156101ed5780601f106101c2576101008083540402835291602001916101ed565b820191906000526020600020905b8154815290600101906020018083116101d057829003601f168201915b505050505081565b60035481565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102b1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a8906106e8565b60405180910390fd5b816003819055506002816040516102c89190610674565b908152602001604051809103902060008154809291906102e7906108bf565b91905055505050565b600060606000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610386576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037d906106e8565b60405180910390fd5b60005484146103ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c1906106c8565b60405180910390fd5b60005460016003548180546103de9061085c565b80601f016020809104026020016040519081016040528092919081815260200182805461040a9061085c565b80156104575780601f1061042c57610100808354040283529160200191610457565b820191906000526020600020905b81548152906001019060200180831161043a57829003601f168201915b505050505091509250925092509193909250565b600061047e61047984610786565b610761565b90508281526020810184848401111561049657600080fd5b6104a184828561081a565b509392505050565b600082601f8301126104ba57600080fd5b81356104ca84826020860161046b565b91505092915050565b6000813590506104e2816109f8565b92915050565b6000602082840312156104fa57600080fd5b600082013567ffffffffffffffff81111561051457600080fd5b610520848285016104a9565b91505092915050565b60006020828403121561053b57600080fd5b6000610549848285016104d3565b91505092915050565b6000806040838503121561056557600080fd5b6000610573858286016104d3565b925050602083013567ffffffffffffffff81111561059057600080fd5b61059c858286016104a9565b9150509250929050565b6105af816107de565b82525050565b60006105c0826107b7565b6105ca81856107c2565b93506105da818560208601610829565b6105e381610995565b840191505092915050565b60006105f9826107b7565b61060381856107d3565b9350610613818560208601610829565b80840191505092915050565b600061062c6009836107c2565b9150610637826109a6565b602082019050919050565b600061064f601b836107c2565b915061065a826109cf565b602082019050919050565b61066e81610810565b82525050565b600061068082846105ee565b915081905092915050565b60006020820190506106a060008301846105a6565b92915050565b600060208201905081810360008301526106c081846105b5565b905092915050565b600060208201905081810360008301526106e18161061f565b9050919050565b6000602082019050818103600083015261070181610642565b9050919050565b600060208201905061071d6000830184610665565b92915050565b60006060820190506107386000830186610665565b818103602083015261074a81856105b5565b90506107596040830184610665565b949350505050565b600061076b61077c565b9050610777828261088e565b919050565b6000604051905090565b600067ffffffffffffffff8211156107a1576107a0610966565b5b6107aa82610995565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b60006107e9826107f0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561084757808201518184015260208101905061082c565b83811115610856576000848401525b50505050565b6000600282049050600182168061087457607f821691505b6020821081141561088857610887610937565b5b50919050565b61089782610995565b810181811067ffffffffffffffff821117156108b6576108b5610966565b5b80604052505050565b60006108ca82610810565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156108fd576108fc610908565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4e6f206578697374650000000000000000000000000000000000000000000000600082015250565b7f596f75206e65656420746f207573652074686520666163746f72790000000000600082015250565b610a0181610810565b8114610a0c57600080fd5b5056fea2646970667358221220cf193b55787e43ef5c2e2cb51c43562e08782f7195aa881d1c3fc8553df36ce964736f6c63430008040033a2646970667358221220af23ab67b203cd018d82ed0e114665cc441f98aa3d73c3e5cee5a784ad4a318c64736f6c63430008040033";

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
