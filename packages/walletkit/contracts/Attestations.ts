import Web3 from 'web3'
import { Attestations as AttestationsType } from '../types/Attestations'
export default async function getInstance(web3: Web3, account: string | null = null) {
  const contract = (new web3.eth.Contract(
    [
      {
        constant: true,
        inputs: [
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'validatorAddressFromCurrentSet',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'initialized',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'sender',
            type: 'address',
          },
          {
            name: 'blsKey',
            type: 'bytes',
          },
          {
            name: 'blsPop',
            type: 'bytes',
          },
        ],
        name: 'checkProofOfPossession',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'registry',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'numberValidatorsInCurrentSet',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'selectIssuersWaitBlocks',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'owner',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'isOwner',
        outputs: [
          {
            name: '',
            type: 'bool',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getEpochNumber',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'registryAddress',
            type: 'address',
          },
        ],
        name: 'setRegistry',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'attestationExpiryBlocks',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        name: 'attestationRequestFees',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'getEpochSize',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: '',
            type: 'address',
          },
          {
            name: '',
            type: 'address',
          },
        ],
        name: 'pendingWithdrawals',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'aNumerator',
            type: 'uint256',
          },
          {
            name: 'aDenominator',
            type: 'uint256',
          },
          {
            name: 'bNumerator',
            type: 'uint256',
          },
          {
            name: 'bDenominator',
            type: 'uint256',
          },
          {
            name: 'exponent',
            type: 'uint256',
          },
          {
            name: '_decimals',
            type: 'uint256',
          },
        ],
        name: 'fractionMulExp',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'identifier',
            type: 'bytes32',
          },
          {
            indexed: true,
            name: 'account',
            type: 'address',
          },
          {
            indexed: false,
            name: 'attestationsRequested',
            type: 'uint256',
          },
          {
            indexed: false,
            name: 'attestationRequestFeeToken',
            type: 'address',
          },
        ],
        name: 'AttestationsRequested',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'identifier',
            type: 'bytes32',
          },
          {
            indexed: true,
            name: 'account',
            type: 'address',
          },
          {
            indexed: true,
            name: 'issuer',
            type: 'address',
          },
          {
            indexed: false,
            name: 'attestationRequestFeeToken',
            type: 'address',
          },
        ],
        name: 'AttestationIssuerSelected',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'identifier',
            type: 'bytes32',
          },
          {
            indexed: true,
            name: 'account',
            type: 'address',
          },
          {
            indexed: true,
            name: 'issuer',
            type: 'address',
          },
        ],
        name: 'AttestationCompleted',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'account',
            type: 'address',
          },
          {
            indexed: true,
            name: 'token',
            type: 'address',
          },
          {
            indexed: false,
            name: 'amount',
            type: 'uint256',
          },
        ],
        name: 'Withdrawal',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'AttestationExpiryBlocksSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'token',
            type: 'address',
          },
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'AttestationRequestFeeSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            name: 'value',
            type: 'uint256',
          },
        ],
        name: 'SelectIssuersWaitBlocksSet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'registryAddress',
            type: 'address',
          },
        ],
        name: 'RegistrySet',
        type: 'event',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: 'previousOwner',
            type: 'address',
          },
          {
            indexed: true,
            name: 'newOwner',
            type: 'address',
          },
        ],
        name: 'OwnershipTransferred',
        type: 'event',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'registryAddress',
            type: 'address',
          },
          {
            name: '_attestationExpiryBlocks',
            type: 'uint256',
          },
          {
            name: '_selectIssuersWaitBlocks',
            type: 'uint256',
          },
          {
            name: 'attestationRequestFeeTokens',
            type: 'address[]',
          },
          {
            name: 'attestationRequestFeeValues',
            type: 'uint256[]',
          },
        ],
        name: 'initialize',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'attestationsRequested',
            type: 'uint256',
          },
          {
            name: 'attestationRequestFeeToken',
            type: 'address',
          },
        ],
        name: 'request',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
        ],
        name: 'selectIssuers',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'v',
            type: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'complete',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'index',
            type: 'uint256',
          },
        ],
        name: 'revoke',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'token',
            type: 'address',
          },
        ],
        name: 'withdraw',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getUnselectedRequest',
        outputs: [
          {
            name: '',
            type: 'uint32',
          },
          {
            name: '',
            type: 'uint32',
          },
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getAttestationIssuers',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getAttestationStats',
        outputs: [
          {
            name: '',
            type: 'uint32',
          },
          {
            name: '',
            type: 'uint32',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifiersToLookup',
            type: 'bytes32[]',
          },
        ],
        name: 'batchGetAttestationStats',
        outputs: [
          {
            name: '',
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'address[]',
          },
          {
            name: '',
            type: 'uint64[]',
          },
          {
            name: '',
            type: 'uint64[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
          {
            name: 'issuer',
            type: 'address',
          },
        ],
        name: 'getAttestationState',
        outputs: [
          {
            name: '',
            type: 'uint8',
          },
          {
            name: '',
            type: 'uint32',
          },
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
        ],
        name: 'getCompletableAttestations',
        outputs: [
          {
            name: '',
            type: 'uint32[]',
          },
          {
            name: '',
            type: 'address[]',
          },
          {
            name: '',
            type: 'uint256[]',
          },
          {
            name: '',
            type: 'bytes',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'token',
            type: 'address',
          },
        ],
        name: 'getAttestationRequestFee',
        outputs: [
          {
            name: '',
            type: 'uint256',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: 'token',
            type: 'address',
          },
          {
            name: 'fee',
            type: 'uint256',
          },
        ],
        name: 'setAttestationRequestFee',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_attestationExpiryBlocks',
            type: 'uint256',
          },
        ],
        name: 'setAttestationExpiryBlocks',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          {
            name: '_selectIssuersWaitBlocks',
            type: 'uint256',
          },
        ],
        name: 'setSelectIssuersWaitBlocks',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
          {
            name: 'account',
            type: 'address',
          },
          {
            name: 'v',
            type: 'uint8',
          },
          {
            name: 'r',
            type: 'bytes32',
          },
          {
            name: 's',
            type: 'bytes32',
          },
        ],
        name: 'validateAttestationCode',
        outputs: [
          {
            name: '',
            type: 'address',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          {
            name: 'identifier',
            type: 'bytes32',
          },
        ],
        name: 'lookupAccountsForIdentifier',
        outputs: [
          {
            name: '',
            type: 'address[]',
          },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
    '0x853B1de909261BD134c0b2b296080d911De1B254'
  ) as unknown) as AttestationsType
  contract.options.from = account || (await web3.eth.getAccounts())[0]
  return contract
}