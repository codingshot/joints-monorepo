import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsToken, NounsTokenInterface } from "../../contracts/NounsToken";
declare type NounsTokenConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsToken__factory extends ContractFactory {
    constructor(...args: NounsTokenConstructorParams);
    deploy(_noundersDAO: string, _minter: string, _descriptor: string, _seeder: string, _proxyRegistry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsToken>;
    getDeployTransaction(_noundersDAO: string, _minter: string, _descriptor: string, _seeder: string, _proxyRegistry: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsToken;
    connect(signer: Signer): NounsToken__factory;
    static readonly bytecode = "0x610100604052602e60a08181529062003d6360c03960159062000023908262000219565b503480156200003157600080fd5b5060405162003d9138038062003d918339810160408190526200005491620002fe565b604051806040016040528060058152602001644e6f756e7360d81b815250604051806040016040528060048152602001632727aaa760e11b815250620000a9620000a36200012060201b60201c565b62000124565b6001620000b7838262000219565b506002620000c6828262000219565b5050600f80546001600160a01b03199081166001600160a01b03988916179091556010805482169688169690961790955550601180548516938616939093179092556012805490931690841617909155166080526200037e565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200019f57607f821691505b602082108103620001c057634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200021457600081815260208120601f850160051c81016020861015620001ef5750805b601f850160051c820191505b818110156200021057828155600101620001fb565b5050505b505050565b81516001600160401b0381111562000235576200023562000174565b6200024d816200024684546200018a565b84620001c6565b602080601f8311600181146200028557600084156200026c5750858301515b600019600386901b1c1916600185901b17855562000210565b600085815260208120601f198616915b82811015620002b65788860151825594840194600190910190840162000295565b5085821015620002d55787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6001600160a01b0381168114620002fb57600080fd5b50565b600080600080600060a086880312156200031757600080fd5b85516200032481620002e5565b60208701519095506200033781620002e5565b60408701519094506200034a81620002e5565b60608701519093506200035d81620002e5565b60808701519092506200037081620002e5565b809150509295509295909350565b6080516139c2620003a16000396000818161061b0152611c6301526139c26000f3fe608060405234801561001057600080fd5b506004361061030c5760003560e01c80636fcfff451161019d578063c1b8e4e1116100e9578063e8a3d485116100a2578063f0503e801161007c578063f0503e8014610719578063f1127ed8146107a7578063f2fde38b1461080e578063fca3b5aa1461082157600080fd5b8063e8a3d485146106eb578063e9580e91146106f3578063e985e9c51461070657600080fd5b8063c1b8e4e114610663578063c3cda52014610677578063c87b56dd1461068a578063c8fc0c231461069d578063d50b31eb146106b1578063e7a324dc146106c457600080fd5b80638da5cb5b11610156578063b4b5ea5711610130578063b4b5ea5714610603578063b50cbd9f14610616578063b88d4fde1461063d578063baedc1c41461065057600080fd5b80638da5cb5b146105d757806395d89b41146105e8578063a22cb465146105f057600080fd5b80636fcfff451461052e57806370a0823114610569578063715018a61461057c57806376daebe114610584578063782d6fe11461058c5780637ecebe00146105b757600080fd5b8063303e74df1161025c578063587cde1e116102155780635f295a67116101ef5780635f295a67146104ed5780636352211e146104f5578063655932a414610508578063684931ed1461051b57600080fd5b8063587cde1e146104b45780635ac1e3bb146104c75780635c19a95c146104da57600080fd5b8063303e74df14610446578063313ce5671461045957806341b5d0de1461047357806342842e0e1461047b57806342966c681461048e5780634f6ccce7146104a157600080fd5b8063095ea7b3116102c95780631e688e10116102a35780631e688e10146103e557806320606b70146103f957806323b872dd146104205780632f745c591461043357600080fd5b8063095ea7b3146103b45780631249c58b146103c757806318160ddd146103dd57600080fd5b806301b9a3971461031157806301ffc9a714610326578063058df0ab1461034e57806306fdde03146103615780630754617214610376578063081812fc146103a1575b600080fd5b61032461031f366004612ead565b610834565b005b610339610334366004612ee0565b61090d565b60405190151581526020015b60405180910390f35b61032461035c366004612ead565b610938565b6103696109e0565b6040516103459190612f4d565b601054610389906001600160a01b031681565b6040516001600160a01b039091168152602001610345565b6103896103af366004612f60565b610a72565b6103246103c2366004612f79565b610b07565b6103cf610c1c565b604051908152602001610345565b6009546103cf565b60125461033990600160a01b900460ff1681565b6103cf7f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a86681565b61032461042e366004612fa5565b610ce9565b6103cf610441366004612f79565b610d1a565b601154610389906001600160a01b031681565b610461600081565b60405160ff9091168152602001610345565b610324610db0565b610324610489366004612fa5565b610e69565b61032461049c366004612f60565b610e84565b6103cf6104af366004612f60565b610f10565b6103896104c2366004612ead565b610fa3565b6103696104d5366004612f60565b610fd5565b6103246104e8366004612ead565b611091565b6103246110af565b610389610503366004612f60565b611164565b600f54610389906001600160a01b031681565b601254610389906001600160a01b031681565b61055461053c366004612ead565b600d6020526000908152604090205463ffffffff1681565b60405163ffffffff9091168152602001610345565b6103cf610577366004612ead565b6111db565b610324611262565b610324611298565b61059f61059a366004612f79565b61134d565b6040516001600160601b039091168152602001610345565b6103cf6105c5366004612ead565b600e6020526000908152604090205481565b6000546001600160a01b0316610389565b6103696115ed565b6103246105fe366004612fe6565b6115fc565b61059f610611366004612ead565b6116c0565b6103897f000000000000000000000000000000000000000000000000000000000000000081565b61032461064b3660046130d1565b61173d565b61032461065e366004613151565b611775565b60125461033990600160a81b900460ff1681565b61032461068536600461319a565b6117af565b610369610698366004612f60565b611aad565b60125461033990600160b01b900460ff1681565b6103246106bf366004612ead565b611b24565b6103cf7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf81565b610369611be9565b61059f610701366004612ead565b611c11565b6103396107143660046131fc565b611c3d565b61076e610727366004612f60565b60136020526000908152604090205465ffffffffffff8082169166010000000000008104821691600160601b8204811691600160901b8104821691600160c01b9091041685565b6040805165ffffffffffff968716815294861660208601529285169284019290925283166060830152909116608082015260a001610345565b6107ea6107b536600461322a565b600c60209081526000928352604080842090915290825290205463ffffffff811690600160201b90046001600160601b031682565b6040805163ffffffff90931683526001600160601b03909116602083015201610345565b61032461081c366004612ead565b611d12565b61032461082f366004612ead565b611daa565b6000546001600160a01b031633146108675760405162461bcd60e51b815260040161085e90613261565b60405180910390fd5b601254600160a81b900460ff16156108b85760405162461bcd60e51b815260206004820152601460248201527311195cd8dc9a5c1d1bdc881a5cc81b1bd8dad95960621b604482015260640161085e565b601180546001600160a01b0319166001600160a01b0383169081179091556040519081527f6e66ab22238a5471005895947c8f57db923c2a9c9c73180eff80864c21295c1b906020015b60405180910390a150565b60006001600160e01b0319821663780e9d6360e01b1480610932575061093282611e6f565b92915050565b600f546001600160a01b031633146109925760405162461bcd60e51b815260206004820152601e60248201527f53656e646572206973206e6f7420746865206e6f756e646572732044414f0000604482015260640161085e565b600f80546001600160a01b0319166001600160a01b0383169081179091556040519081527f3a0b923617f180781f3530e464cb4a8b9393e69f47607e4eb28d61cd87ce968c90602001610902565b6060600180546109ef90613296565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1b90613296565b8015610a685780601f10610a3d57610100808354040283529160200191610a68565b820191906000526020600020905b815481529060010190602001808311610a4b57829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b0316610aeb5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161085e565b506000908152600560205260409020546001600160a01b031690565b6000610b1282611164565b9050806001600160a01b0316836001600160a01b031603610b7f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161085e565b336001600160a01b0382161480610b9b5750610b9b8133611c3d565b610c0d5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161085e565b610c178383611ebf565b505050565b6010546000906001600160a01b03163314610c745760405162461bcd60e51b815260206004820152601860248201527729b2b73232b91034b9903737ba103a34329036b4b73a32b960411b604482015260640161085e565b61071c60145411158015610c945750600a601454610c9291906132e6565b155b15610cc457600f5460148054610cc2926001600160a01b0316916000610cb983613310565b91905055611f2d565b505b60105460148054610ce4926001600160a01b0316916000610cb983613310565b905090565b610cf33382612129565b610d0f5760405162461bcd60e51b815260040161085e90613329565b610c17838383612200565b6000610d25836111db565b8210610d875760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161085e565b506001600160a01b03919091166000908152600760209081526040808320938352929052205490565b6000546001600160a01b03163314610dda5760405162461bcd60e51b815260040161085e90613261565b601254600160a81b900460ff1615610e2b5760405162461bcd60e51b815260206004820152601460248201527311195cd8dc9a5c1d1bdc881a5cc81b1bd8dad95960621b604482015260640161085e565b6012805460ff60a81b1916600160a81b1790556040517f593e31e306c198bef259d839f7c6dc4ff7fc10c07f76fab193a210b03704105f90600090a1565b610c178383836040518060200160405280600081525061173d565b6010546001600160a01b03163314610ed95760405162461bcd60e51b815260206004820152601860248201527729b2b73232b91034b9903737ba103a34329036b4b73a32b960411b604482015260640161085e565b610ee281612399565b60405181907f806be94a2ac8b92d74e99aa8add5a8e54528a01ec914a9e00d201a6480ed986390600090a250565b6000610f1b60095490565b8210610f7e5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161085e565b60098281548110610f9157610f9161337a565b90600052602060002001549050919050565b6001600160a01b038082166000908152600b60205260408120549091168015610fcc5780610fce565b825b9392505050565b6000818152600360205260409020546060906001600160a01b031661100c5760405162461bcd60e51b815260040161085e90613390565b601154600083815260136020526040908190209051630638ac2760e41b81526001600160a01b039092169163638ac2709161104c918691906004016133db565b600060405180830381865afa158015611069573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109329190810190613420565b6001600160a01b0381166110a25750335b6110ac338261242e565b50565b6000546001600160a01b031633146110d95760405162461bcd60e51b815260040161085e90613261565b601254600160b01b900460ff16156111265760405162461bcd60e51b815260206004820152601060248201526f14d95959195c881a5cc81b1bd8dad95960821b604482015260640161085e565b6012805460ff60b01b1916600160b01b1790556040517ff59561f22794afcfb1e6be5c4733f5449fd167252a96b74bb06d341fb0dac7ed90600090a1565b6000818152600360205260408120546001600160a01b0316806109325760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161085e565b60006001600160a01b0382166112465760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161085e565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b0316331461128c5760405162461bcd60e51b815260040161085e90613261565b61129660006124ae565b565b6000546001600160a01b031633146112c25760405162461bcd60e51b815260040161085e90613261565b601254600160a01b900460ff161561130f5760405162461bcd60e51b815260206004820152601060248201526f135a5b9d195c881a5cc81b1bd8dad95960821b604482015260640161085e565b6012805460ff60a01b1916600160a01b1790556040517f192417b3f16b1ce69e0c59b0376549666650245ffc05e4b2569089dda8589b6690600090a1565b60004382106113c45760405162461bcd60e51b815260206004820152603760248201527f455243373231436865636b706f696e7461626c653a3a6765745072696f72566f60448201527f7465733a206e6f74207965742064657465726d696e6564000000000000000000606482015260840161085e565b6001600160a01b0383166000908152600d602052604081205463ffffffff16908190036113f5576000915050610932565b6001600160a01b0384166000908152600c60205260408120849161141a600185613497565b63ffffffff9081168252602082019290925260400160002054161161148d576001600160a01b0384166000908152600c602052604081209061145d600184613497565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b031691506109329050565b6001600160a01b0384166000908152600c6020908152604080832083805290915290205463ffffffff168310156114c8576000915050610932565b6000806114d6600184613497565b90505b8163ffffffff168163ffffffff1611156115a857600060026114fb8484613497565b61150591906134bb565b61150f9083613497565b6001600160a01b0388166000908152600c6020908152604080832063ffffffff858116855290835292819020815180830190925254928316808252600160201b9093046001600160601b03169181019190915291925087900361157c576020015194506109329350505050565b805163ffffffff16871115611593578193506115a1565b61159e600183613497565b92505b50506114d9565b506001600160a01b0385166000908152600c6020908152604080832063ffffffff909416835292905220546001600160601b03600160201b9091041691505092915050565b6060600280546109ef90613296565b336001600160a01b038316036116545760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161085e565b3360008181526006602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6001600160a01b0381166000908152600d602052604081205463ffffffff16806116eb576000610fce565b6001600160a01b0383166000908152600c602052604081209061170f600184613497565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03169392505050565b6117473383612129565b6117635760405162461bcd60e51b815260040161085e90613329565b61176f848484846124fe565b50505050565b6000546001600160a01b0316331461179f5760405162461bcd60e51b815260040161085e90613261565b60156117ab8282613524565b5050565b60007f8cad95687ba82c2ce50e74f7b754645e5117c3a5bec8151c0726d5857980a8666117da6109e0565b805190602001206117e84690565b60408051602080820195909552808201939093526060830191909152306080808401919091528151808403909101815260a0830182528051908401207fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60c08401526001600160a01b038b1660e084015261010083018a90526101208084018a90528251808503909101815261014084019092528151919093012061190160f01b610160830152610162820183905261018282018190529192506000906101a20160408051601f198184030181528282528051602091820120600080855291840180845281905260ff8a169284019290925260608301889052608083018790529092509060019060a0016020604051602081039080840390855afa158015611914573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119965760405162461bcd60e51b815260206004820152603660248201527f455243373231436865636b706f696e7461626c653a3a64656c656761746542796044820152755369673a20696e76616c6964207369676e617475726560501b606482015260840161085e565b6001600160a01b0381166000908152600e602052604081208054916119ba83613310565b919050558914611a275760405162461bcd60e51b815260206004820152603260248201527f455243373231436865636b706f696e7461626c653a3a64656c656761746542796044820152715369673a20696e76616c6964206e6f6e636560701b606482015260840161085e565b87421115611a965760405162461bcd60e51b815260206004820152603660248201527f455243373231436865636b706f696e7461626c653a3a64656c6567617465427960448201527514da59ce881cda59db985d1d5c9948195e1c1a5c995960521b606482015260840161085e565b611aa0818b61242e565b505050505b505050505050565b6000818152600360205260409020546060906001600160a01b0316611ae45760405162461bcd60e51b815260040161085e90613390565b601154600083815260136020526040908190209051633cfdafd360e01b81526001600160a01b0390921691633cfdafd39161104c918691906004016133db565b6000546001600160a01b03163314611b4e5760405162461bcd60e51b815260040161085e90613261565b601254600160b01b900460ff1615611b9b5760405162461bcd60e51b815260206004820152601060248201526f14d95959195c881a5cc81b1bd8dad95960821b604482015260640161085e565b601280546001600160a01b0319166001600160a01b0383169081179091556040519081527fb3025222d01ce9a26c7f9d52bc3bfd0352366bd90a793c273fbfe1c81e0e288e90602001610902565b60606015604051602001611bfd91906135e4565b604051602081830303815290604052905090565b6000610932611c1f836111db565b6040518060600160405280603d8152602001613919603d9139612531565b60405163c455279160e01b81526001600160a01b038381166004830152600091818416917f0000000000000000000000000000000000000000000000000000000000000000169063c455279190602401602060405180830381865afa158015611caa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611cce9190613673565b6001600160a01b031603611ce457506001610932565b6001600160a01b0380841660009081526006602090815260408083209386168352929052205460ff16610fce565b6000546001600160a01b03163314611d3c5760405162461bcd60e51b815260040161085e90613261565b6001600160a01b038116611da15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161085e565b6110ac816124ae565b6000546001600160a01b03163314611dd45760405162461bcd60e51b815260040161085e90613261565b601254600160a01b900460ff1615611e215760405162461bcd60e51b815260206004820152601060248201526f135a5b9d195c881a5cc81b1bd8dad95960821b604482015260640161085e565b601080546001600160a01b0319166001600160a01b0383169081179091556040519081527fad0f299ec81a386c98df0ac27dae11dd020ed1b56963c53a7292e7a3a314539a90602001610902565b60006001600160e01b031982166380ac58cd60e01b1480611ea057506001600160e01b03198216635b5e139f60e01b145b8061093257506301ffc9a760e01b6001600160e01b0319831614610932565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611ef482611164565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60125460115460405163422e2e9960e01b8152600481018490526001600160a01b0391821660248201526000928392169063422e2e999060440160a060405180830381865afa158015611f84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611fa891906136ab565b60008481526013602090815260408083208451815486850151878501516060808a015160809a8b015165ffffffffffff9687166bffffffffffffffffffffffff199096169590951766010000000000009487168502176bffffffffffffffffffffffff60601b1916600160601b938716840265ffffffffffff60901b191617600160901b91871682021765ffffffffffff60c01b198116600160c01b968816870290811798899055895160a081018b529188169088161781529387048616988401989098529085048416958201959095529483048216938501939093529190041692810192909252549091506120a8906001600160a01b03168585612560565b827f1106ee9d020bfbb5ee34cf5535a5fbf024a011bd130078088cbf124ab3092478826040516121199190815165ffffffffffff9081168252602080840151821690830152604080840151821690830152606080840151821690830152608092830151169181019190915260a00190565b60405180910390a2509092915050565b6000818152600360205260408120546001600160a01b03166121a25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161085e565b60006121ad83611164565b9050806001600160a01b0316846001600160a01b031614806121e85750836001600160a01b03166121dd84610a72565b6001600160a01b0316145b806121f857506121f88185611c3d565b949350505050565b826001600160a01b031661221382611164565b6001600160a01b03161461227b5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161085e565b6001600160a01b0382166122dd5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161085e565b6122e88383836126d2565b6122f3600082611ebf565b6001600160a01b038316600090815260046020526040812080546001929061231c908490613739565b90915550506001600160a01b038216600090815260046020526040812080546001929061234a90849061374c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206138f983398151915291a4505050565b60006123a482611164565b90506123b2816000846126d2565b6123bd600083611ebf565b6001600160a01b03811660009081526004602052604081208054600192906123e6908490613739565b909155505060008281526003602052604080822080546001600160a01b0319169055518391906001600160a01b038416906000805160206138f9833981519152908390a45050565b600061243983610fa3565b6001600160a01b038481166000818152600b602052604080822080546001600160a01b031916888616908117909155905194955093928516927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a460006124a184611c11565b905061176f8284836126f5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b612509848484612200565b612515848484846128a1565b61176f5760405162461bcd60e51b815260040161085e9061375f565b600081600160601b84106125585760405162461bcd60e51b815260040161085e9190612f4d565b509192915050565b6001600160a01b0382166125b65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161085e565b6000818152600360205260409020546001600160a01b03161561261b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161085e565b612627600083836126d2565b6001600160a01b038216600090815260046020526040812080546001929061265090849061374c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03868116919091179091559051839291861691906000805160206138f9833981519152908290a480826001600160a01b0316846001600160a01b03166000805160206138f983398151915260405160405180910390a4505050565b6126dd8383836129a2565b610c176126e984610fa3565b6126f284610fa3565b60015b816001600160a01b0316836001600160a01b03161415801561272057506000816001600160601b0316115b15610c17576001600160a01b038316156127e5576001600160a01b0383166000908152600d602052604081205463ffffffff1690816127605760006127ac565b6001600160a01b0385166000908152600c6020526040812090612784600185613497565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03165b905060006127d3828560405180606001604052806037815260200161395660379139612a5a565b90506127e186848484612a9c565b5050505b6001600160a01b03821615610c17576001600160a01b0382166000908152600d602052604081205463ffffffff16908161282057600061286c565b6001600160a01b0384166000908152600c6020526040812090612844600185613497565b63ffffffff168152602081019190915260400160002054600160201b90046001600160601b03165b90506000612893828560405180606001604052806036815260200161387f60369139612c94565b9050611aa585848484612a9c565b60006001600160a01b0384163b1561299757604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906128e59033908990889088906004016137b1565b6020604051808303816000875af1925050508015612920575060408051601f3d908101601f1916820190925261291d918101906137ee565b60015b61297d573d80801561294e576040519150601f19603f3d011682016040523d82523d6000602084013e612953565b606091505b5080516000036129755760405162461bcd60e51b815260040161085e9061375f565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506121f8565b506001949350505050565b6001600160a01b0383166129fd576129f881600980546000838152600a60205260408120829055600182018355919091527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af0155565b612a20565b816001600160a01b0316836001600160a01b031614612a2057612a208382612ce1565b6001600160a01b038216612a3757610c1781612d7e565b826001600160a01b0316826001600160a01b031614610c1757610c178282612e2d565b6000836001600160601b0316836001600160601b031611158290612a915760405162461bcd60e51b815260040161085e9190612f4d565b506121f8838561380b565b6000612ac0436040518060800160405280604481526020016138b560449139612e71565b905060008463ffffffff16118015612b1a57506001600160a01b0385166000908152600c6020526040812063ffffffff831691612afe600188613497565b63ffffffff908116825260208201929092526040016000205416145b15612b8e576001600160a01b0385166000908152600c602052604081208391612b44600188613497565b63ffffffff168152602081019190915260400160002080546001600160601b0392909216600160201b026fffffffffffffffffffffffff0000000019909216919091179055612c3f565b60408051808201825263ffffffff80841682526001600160601b0380861660208085019182526001600160a01b038b166000908152600c82528681208b8616825290915294909420925183549451909116600160201b026fffffffffffffffffffffffffffffffff19909416911617919091179055612c0e84600161382b565b6001600160a01b0386166000908152600d60205260409020805463ffffffff191663ffffffff929092169190911790555b604080516001600160601b038086168252841660208201526001600160a01b038716917fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724910160405180910390a25050505050565b600080612ca18486613848565b9050846001600160601b0316816001600160601b031610158390612cd85760405162461bcd60e51b815260040161085e9190612f4d565b50949350505050565b60006001612cee846111db565b612cf89190613739565b600083815260086020526040902054909150808214612d4b576001600160a01b03841660009081526007602090815260408083208584528252808320548484528184208190558352600890915290208190555b5060009182526008602090815260408084208490556001600160a01b039094168352600781528383209183525290812055565b600954600090612d9090600190613739565b6000838152600a602052604081205460098054939450909284908110612db857612db861337a565b906000526020600020015490508060098381548110612dd957612dd961337a565b6000918252602080832090910192909255828152600a90915260408082208490558582528120556009805480612e1157612e11613868565b6001900381819060005260206000200160009055905550505050565b6000612e38836111db565b6001600160a01b039093166000908152600760209081526040808320868452825280832085905593825260089052919091209190915550565b600081600160201b84106125585760405162461bcd60e51b815260040161085e9190612f4d565b6001600160a01b03811681146110ac57600080fd5b600060208284031215612ebf57600080fd5b8135610fce81612e98565b6001600160e01b0319811681146110ac57600080fd5b600060208284031215612ef257600080fd5b8135610fce81612eca565b60005b83811015612f18578181015183820152602001612f00565b50506000910152565b60008151808452612f39816020860160208601612efd565b601f01601f19169290920160200192915050565b602081526000610fce6020830184612f21565b600060208284031215612f7257600080fd5b5035919050565b60008060408385031215612f8c57600080fd5b8235612f9781612e98565b946020939093013593505050565b600080600060608486031215612fba57600080fd5b8335612fc581612e98565b92506020840135612fd581612e98565b929592945050506040919091013590565b60008060408385031215612ff957600080fd5b823561300481612e98565b91506020830135801515811461301957600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561306357613063613024565b604052919050565b600067ffffffffffffffff82111561308557613085613024565b50601f01601f191660200190565b60006130a66130a18461306b565b61303a565b90508281528383830111156130ba57600080fd5b828260208301376000602084830101529392505050565b600080600080608085870312156130e757600080fd5b84356130f281612e98565b9350602085013561310281612e98565b925060408501359150606085013567ffffffffffffffff81111561312557600080fd5b8501601f8101871361313657600080fd5b61314587823560208401613093565b91505092959194509250565b60006020828403121561316357600080fd5b813567ffffffffffffffff81111561317a57600080fd5b8201601f8101841361318b57600080fd5b6121f884823560208401613093565b60008060008060008060c087890312156131b357600080fd5b86356131be81612e98565b95506020870135945060408701359350606087013560ff811681146131e257600080fd5b9598949750929560808101359460a0909101359350915050565b6000806040838503121561320f57600080fd5b823561321a81612e98565b9150602083013561301981612e98565b6000806040838503121561323d57600080fd5b823561324881612e98565b9150602083013563ffffffff8116811461301957600080fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c908216806132aa57607f821691505b6020821081036132ca57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601260045260246000fd5b6000826132f5576132f56132d0565b500690565b634e487b7160e01b600052601160045260246000fd5b600060018201613322576133226132fa565b5060010190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6020808252602b908201527f4e6f756e73546f6b656e3a2055524920717565727920666f72206e6f6e65786960408201526a39ba32b73a103a37b5b2b760a91b606082015260800190565b9182525465ffffffffffff8082166020840152603082901c81166040840152606082811c821690840152609082901c8116608084015260c091821c1660a08301520190565b60006020828403121561343257600080fd5b815167ffffffffffffffff81111561344957600080fd5b8201601f8101841361345a57600080fd5b80516134686130a18261306b565b81815285602083850101111561347d57600080fd5b61348e826020830160208601612efd565b95945050505050565b63ffffffff8281168282160390808211156134b4576134b46132fa565b5092915050565b600063ffffffff808416806134d2576134d26132d0565b92169190910492915050565b601f821115610c1757600081815260208120601f850160051c810160208610156135055750805b601f850160051c820191505b81811015611aa557828155600101613511565b815167ffffffffffffffff81111561353e5761353e613024565b6135528161354c8454613296565b846134de565b602080601f831160018114613587576000841561356f5750858301515b600019600386901b1c1916600185901b178555611aa5565b600085815260208120601f198616915b828110156135b657888601518255948401946001909101908401613597565b50858210156135d45787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b66697066733a2f2f60c81b8152600060076000845461360281613296565b6001828116801561361a576001811461363357613666565b60ff198416888701528215158302880186019450613666565b8860005260208060002060005b8581101561365b5781548b82018a0152908401908201613640565b505050858389010194505b5092979650505050505050565b60006020828403121561368557600080fd5b8151610fce81612e98565b805165ffffffffffff811681146136a657600080fd5b919050565b600060a082840312156136bd57600080fd5b60405160a0810181811067ffffffffffffffff821117156136e0576136e0613024565b6040526136ec83613690565b81526136fa60208401613690565b602082015261370b60408401613690565b604082015261371c60608401613690565b606082015261372d60808401613690565b60808201529392505050565b81810381811115610932576109326132fa565b80820180821115610932576109326132fa565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906137e490830184612f21565b9695505050505050565b60006020828403121561380057600080fd5b8151610fce81612eca565b6001600160601b038281168282160390808211156134b4576134b46132fa565b63ffffffff8181168382160190808211156134b4576134b46132fa565b6001600160601b038181168382160190808211156134b4576134b46132fa565b634e487b7160e01b600052603160045260246000fdfe455243373231436865636b706f696e7461626c653a3a5f6d6f766544656c6567617465733a20616d6f756e74206f766572666c6f7773455243373231436865636b706f696e7461626c653a3a5f7772697465436865636b706f696e743a20626c6f636b206e756d62657220657863656564732033322062697473ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef455243373231436865636b706f696e7461626c653a3a766f746573546f44656c65676174653a20616d6f756e7420657863656564732039362062697473455243373231436865636b706f696e7461626c653a3a5f6d6f766544656c6567617465733a20616d6f756e7420756e646572666c6f7773a264697066735822122000f596bae245545e225620fdb8b0a5e6acc9a4b54807f90d04458bf6e3baf6c664736f6c63430008130033516d5a69316e3739467157743274544c7743716979366e4c4d36784c475273455051354a6d52654a514b4e4e7a58";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): NounsTokenInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsToken;
}
export {};
