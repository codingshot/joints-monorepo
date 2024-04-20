import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsAuctionHouse, NounsAuctionHouseInterface } from "../../contracts/NounsAuctionHouse";
declare type NounsAuctionHouseConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsAuctionHouse__factory extends ContractFactory {
    constructor(...args: NounsAuctionHouseConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsAuctionHouse>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsAuctionHouse;
    connect(signer: Signer): NounsAuctionHouse__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506118ab806100206000396000f3fe60806040526004361061011f5760003560e01c80638456cb59116100a0578063ce9c7c0d11610064578063ce9c7c0d1461034f578063db2e1eed1461036f578063ec91f2a414610385578063f25efffc1461039b578063f2fde38b146103b057600080fd5b80638456cb59146102bb57806387f49f54146102d05780638da5cb5b146102f0578063a4d0a17e1461030e578063b296024d1461032357600080fd5b80635c975abb116100e75780635c975abb146101dc578063659dd2b4146101ff5780637120334b14610212578063715018a6146102325780637d9f6db51461024757600080fd5b80630fb5a6b4146101245780632de45f181461014d57806336ebdb38146101855780633f4ba83a146101a75780633fc8cef3146101bc575b600080fd5b34801561013057600080fd5b5061013a60ce5481565b6040519081526020015b60405180910390f35b34801561015957600080fd5b5060c95461016d906001600160a01b031681565b6040516001600160a01b039091168152602001610144565b34801561019157600080fd5b506101a56101a036600461152b565b6103d0565b005b3480156101b357600080fd5b506101a561044c565b3480156101c857600080fd5b5060ca5461016d906001600160a01b031681565b3480156101e857600080fd5b5060335460ff166040519015158152602001610144565b6101a561020d36600461154d565b6104a5565b34801561021e57600080fd5b506101a561022d36600461154d565b6107a7565b34801561023e57600080fd5b506101a5610806565b34801561025357600080fd5b5060cf5460d05460d15460d25460d35461028394939291906001600160a01b03811690600160a01b900460ff1686565b6040805196875260208701959095529385019290925260608401526001600160a01b03166080830152151560a082015260c001610144565b3480156102c757600080fd5b506101a561083a565b3480156102dc57600080fd5b506101a56102eb36600461157b565b61086c565b3480156102fc57600080fd5b506097546001600160a01b031661016d565b34801561031a57600080fd5b506101a561094e565b34801561032f57600080fd5b5060cd5461033d9060ff1681565b60405160ff9091168152602001610144565b34801561035b57600080fd5b506101a561036a36600461154d565b6109cd565b34801561037b57600080fd5b5061013a60cc5481565b34801561039157600080fd5b5061013a60cb5481565b3480156103a757600080fd5b506101a5610a2c565b3480156103bc57600080fd5b506101a56103cb3660046115de565b610aa9565b6097546001600160a01b031633146104035760405162461bcd60e51b81526004016103fa906115fb565b60405180910390fd5b60cd805460ff191660ff83169081179091556040519081527fec5ccd96cc77b6219e9d44143df916af68fc169339ea7de5008ff15eae13450d906020015b60405180910390a150565b6097546001600160a01b031633146104765760405162461bcd60e51b81526004016103fa906115fb565b61047e610b44565b60d1541580610496575060d354600160a01b900460ff165b156104a3576104a3610bd7565b565b6002606554036104c75760405162461bcd60e51b81526004016103fa90611630565b60026065556040805160c08101825260cf5480825260d054602083015260d1549282019290925260d254606082015260d3546001600160a01b0381166080830152600160a01b900460ff16151560a08201529082146105685760405162461bcd60e51b815260206004820152601760248201527f4e6f756e206e6f7420757020666f722061756374696f6e00000000000000000060448201526064016103fa565b806060015142106105ad5760405162461bcd60e51b815260206004820152600f60248201526e105d58dd1a5bdb88195e1c1a5c9959608a1b60448201526064016103fa565b60cc543410156105ff5760405162461bcd60e51b815260206004820152601f60248201527f4d7573742073656e64206174206c65617374207265736572766550726963650060448201526064016103fa565b60cd5460208201516064916106199160ff9091169061167d565b6106239190611694565b816020015161063291906116b6565b3410156106a9576040805162461bcd60e51b81526020600482015260248101919091527f4d7573742073656e64206d6f7265207468616e206c617374206269642062792060448201527f6d696e426964496e6372656d656e7450657263656e7461676520616d6f756e7460648201526084016103fa565b60808101516001600160a01b038116156106cb576106cb818360200151610d2e565b3460d05560d380546001600160a01b0319163317905560cb546060830151600091906106f89042906116c9565b10905080156107195760cb5461070e90426116b6565b6060840181905260d2555b8251604080513381523460208201528315158183015290517f1159164c56f277e6fc99c11731bd380e0347deb969b75523398734c252706ea39181900360600190a2801561079c57825160608401516040519081527f6e912a3a9105bdd2af817ba5adc14e6c127c1035b5b648faa29ca0d58ab8ff4e9060200160405180910390a25b505060016065555050565b6097546001600160a01b031633146107d15760405162461bcd60e51b81526004016103fa906115fb565b60cb8190556040518181527f1b55d9f7002bda4490f467e326f22a4a847629c0f2d1ed421607d318d25b410d90602001610441565b6097546001600160a01b031633146108305760405162461bcd60e51b81526004016103fa906115fb565b6104a36000610e23565b6097546001600160a01b031633146108645760405162461bcd60e51b81526004016103fa906115fb565b6104a3610e75565b600054610100900460ff1680610885575060005460ff16155b6108a15760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff161580156108c3576000805461ffff19166101011790555b6108cb610ef0565b6108d3610f6b565b6108db610fca565b6108e3610e75565b60c980546001600160a01b03808a166001600160a01b03199283161790925560ca80549289169290911691909117905560cb85905560cc84905560cd805460ff851660ff1990911617905560ce8290558015610945576000805461ff00191690555b50505050505050565b60335460ff166109975760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103fa565b6002606554036109b95760405162461bcd60e51b81526004016103fa90611630565b60026065556109c6611031565b6001606555565b6097546001600160a01b031633146109f75760405162461bcd60e51b81526004016103fa906115fb565b60cc8190556040518181527f6ab2e127d7fdf53b8f304e59d3aab5bfe97979f52a85479691a6fab27a28a6b290602001610441565b600260655403610a4e5760405162461bcd60e51b81526004016103fa90611630565b600260655560335460ff1615610a995760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103fa565b610aa1611031565b6109c6610bd7565b6097546001600160a01b03163314610ad35760405162461bcd60e51b81526004016103fa906115fb565b6001600160a01b038116610b385760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fa565b610b4181610e23565b50565b60335460ff16610b8d5760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016103fa565b6033805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60c960009054906101000a90046001600160a01b03166001600160a01b0316631249c58b6040518163ffffffff1660e01b81526004016020604051808303816000875af1925050508015610c48575060408051601f3d908101601f19168201909252610c459181019061172a565b60015b610c8757610c54611743565b806308c379a003610c7b5750610c6861179a565b80610c735750610c7d565b610b41610e75565b505b3d6000803e3d6000fd5b60ce544290600090610c9990836116b6565b6040805160c08101825285815260006020808301829052828401879052606083018590526080830182905260a090920181905260cf87905560d05560d185905560d283905560d380546001600160a81b0319169055815185815290810183905291925084917fd6eddd1118d71820909c1197aa966dbc15ed6f508554252169cc3d5ccac756ca910160405180910390a2505050565b610d3882826112e6565b610e1f5760ca60009054906101000a90046001600160a01b03166001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015610d8c57600080fd5b505af1158015610da0573d6000803e3d6000fd5b505060ca5460405163a9059cbb60e01b81526001600160a01b03878116600483015260248201879052909116935063a9059cbb925060440190506020604051808303816000875af1158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d9190611824565b505b5050565b609780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60335460ff1615610ebb5760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b60448201526064016103fa565b6033805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610bba3390565b600054610100900460ff1680610f09575060005460ff16155b610f255760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff16158015610f47576000805461ffff19166101011790555b610f4f611366565b610f576113d0565b8015610b41576000805461ff001916905550565b600054610100900460ff1680610f84575060005460ff16155b610fa05760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff16158015610fc2576000805461ffff19166101011790555b610f57611445565b600054610100900460ff1680610fe3575060005460ff16155b610fff5760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff16158015611021576000805461ffff19166101011790555b611029611366565b610f576114b5565b6040805160c08101825260cf54815260d054602082015260d15491810182905260d254606082015260d3546001600160a01b0381166080830152600160a01b900460ff16151560a0820152906000036110c35760405162461bcd60e51b815260206004820152601460248201527320bab1ba34b7b7103430b9b713ba103132b3bab760611b60448201526064016103fa565b8060a00151156111155760405162461bcd60e51b815260206004820181905260248201527f41756374696f6e2068617320616c7265616479206265656e20736574746c656460448201526064016103fa565b80606001514210156111695760405162461bcd60e51b815260206004820152601860248201527f41756374696f6e206861736e277420636f6d706c65746564000000000000000060448201526064016103fa565b60d3805460ff60a01b1916600160a01b17905560808101516001600160a01b03166111f95760c9548151604051630852cd8d60e31b81526001600160a01b03909216916342966c68916111c29160040190815260200190565b600060405180830381600087803b1580156111dc57600080fd5b505af11580156111f0573d6000803e3d6000fd5b5050505061126d565b60c954608082015182516040516323b872dd60e01b81523060048201526001600160a01b03928316602482015260448101919091529116906323b872dd90606401600060405180830381600087803b15801561125457600080fd5b505af1158015611268573d6000803e3d6000fd5b505050505b6020810151156112965761129661128c6097546001600160a01b031690565b8260200151610d2e565b80516080820151602080840151604080516001600160a01b039094168452918301527fc9f72b276a388619c6d185d146697036241880c36654b1a3ffdad07c24038d99910160405180910390a250565b6040805160008082526020820190925281906001600160a01b038516906175309085906040516113169190611846565b600060405180830381858888f193505050503d8060008114611354576040519150601f19603f3d011682016040523d82523d6000602084013e611359565b606091505b5090925050505b92915050565b600054610100900460ff168061137f575060005460ff16155b61139b5760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff16158015610f57576000805461ffff19166101011790558015610b41576000805461ff001916905550565b600054610100900460ff16806113e9575060005460ff16155b6114055760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff16158015611427576000805461ffff19166101011790555b6033805460ff191690558015610b41576000805461ff001916905550565b600054610100900460ff168061145e575060005460ff16155b61147a5760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff1615801561149c576000805461ffff19166101011790555b60016065558015610b41576000805461ff001916905550565b600054610100900460ff16806114ce575060005460ff16155b6114ea5760405162461bcd60e51b81526004016103fa906116dc565b600054610100900460ff1615801561150c576000805461ffff19166101011790555b610f5733610e23565b803560ff8116811461152657600080fd5b919050565b60006020828403121561153d57600080fd5b61154682611515565b9392505050565b60006020828403121561155f57600080fd5b5035919050565b6001600160a01b0381168114610b4157600080fd5b60008060008060008060c0878903121561159457600080fd5b863561159f81611566565b955060208701356115af81611566565b945060408701359350606087013592506115cb60808801611515565b915060a087013590509295509295509295565b6000602082840312156115f057600080fd5b813561154681611566565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761136057611360611667565b6000826116b157634e487b7160e01b600052601260045260246000fd5b500490565b8082018082111561136057611360611667565b8181038181111561136057611360611667565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60006020828403121561173c57600080fd5b5051919050565b600060033d111561175c5760046000803e5060005160e01c5b90565b601f8201601f1916810167ffffffffffffffff8111828210171561179357634e487b7160e01b600052604160045260246000fd5b6040525050565b600060443d10156117a85790565b6040516003193d81016004833e81513d67ffffffffffffffff81602484011181841117156117d857505050505090565b82850191508151818111156117f05750505050505090565b843d870101602082850101111561180a5750505050505090565b6118196020828601018761175f565b509095945050505050565b60006020828403121561183657600080fd5b8151801515811461154657600080fd5b6000825160005b81811015611867576020818601810151858301520161184d565b50600092019182525091905056fea2646970667358221220c908be7ddd17a4c7aab78e4356f36d263f8c8aa69fda8cc4d58f7df29ded116b64736f6c63430008130033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): NounsAuctionHouseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsAuctionHouse;
}
export {};