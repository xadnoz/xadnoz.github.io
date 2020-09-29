(window.webpackJsonp=window.webpackJsonp||[]).push([[875],{371:function(e,t,a){"use strict";a.r(t);var n=a(42),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("+--------------------+\n|                    |\n| Substrate/Polkadot |\n|                    |\n+---------+----------+\n          |\n          |\n +--------+---------+\n |                  |\n | Client interface |\n |                  |\n | +--------------+ |\n | | Client DB    | |\n | +--------------+ |\n |                  |\n +--------+---------+\n          |\n          |\n +--------+---------+\n |                  |\n |  Wallet backend  |\n |                  |\n +------------------+\n")])])]),a("h2",{attrs:{id:"_1-tracking-the-chain-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-tracking-the-chain-head"}},[e._v("#")]),e._v(" 1. Tracking the chain head")]),e._v(" "),a("p",[e._v("Track each finalised block by subscribing with the "),a("code",[e._v("chain_subscribeFinalizedHeads")]),e._v(" RPC (or polling the "),a("code",[e._v("chain_getFinalizedHead")]),e._v(" RPC).")]),e._v(" "),a("p",[e._v("That will give you a stream of hashes of the most recent finalised headers.")]),e._v(" "),a("p",[e._v("When a new hash arrives, you can use "),a("code",[e._v("chain_getBlock")]),e._v(" to turn that hash into a block.")]),e._v(" "),a("p",[e._v("If the new block is not an immediate child of the last block you processed, make sure that you iterate over all blocks between them. Because "),a("code",[e._v("chain_getBlock")]),e._v(" can accept only hashes, you will need to use "),a("code",[e._v("chain_getBlockHash")]),e._v(" to convert numbers into hashes and in this way iterate between any two finalised blocks.")]),e._v(" "),a("h2",{attrs:{id:"_2-decoding-blocks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-decoding-blocks"}},[e._v("#")]),e._v(" 2. Decoding blocks")]),e._v(" "),a("p",[e._v("You will need to decode blocks from the basic data into useful fields.")]),e._v(" "),a("p",[e._v("All block data is encoded using the basic SCALE codec described in detail "),a("a",{attrs:{href:"https://substrate.dev/docs/en/overview/low-level-data-format",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(". SCALE provides only the low-level underlying format however. Details of its fields and internal structure may alter between different chains and even different blocks of the same chain.")]),e._v(" "),a("p",[e._v("For Genesis Polkadot, the header format is a five-field structure:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("struct Block:\n    parent_hash: Hash\n    number: Compact Number\n    state_root: Hash\n    extrinsics_root: Hash\n    digest: Vec<DigestItem>\n    extrinsics: Vec<Extrinsic>\n")])])]),a("p",[e._v("This relies on "),a("code",[e._v("Hash")]),e._v(", which is a fixed length 32-byte value or "),a("code",[e._v("[u8; 32]")]),e._v(" in SCALE. It also relies on "),a("code",[e._v("DigestItem")]),e._v(", an enumeration type:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("enum DigestItem:\n    ChangesTrieRoot: Hash\n    PreRuntime: ConsensusItem\n    Consensus: ConsensusItem\n    Seal: ConsensusItem\n    Other: Vec<u8>\nstruct ConsensusItem:\n    id: [u8; 4]\n    data: Vec<u8>\n")])])]),a("p",[e._v("It also relies on "),a("code",[e._v("Extrinsic")]),e._v(". An "),a("em",[e._v("extrinsic")]),e._v(" is a generalisation of a transaction and other (unsigned) external information. It is a highly extensible type which doesn't have a fixed format per se. To ensure future format compatibility, metadata concerning the extrinsic format is provided through an RPC "),a("code",[e._v("state_getMetadata")]),e._v(".")]),e._v(" "),a("p",[e._v("The metadata itself is provided encoded in SCALE. Its format is:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("struct Metadata:\n    magic: u32\n    version: u8\n    modules: Vec<Module>\nstruct Module:\n    name: String\n    prefix: String\n    storage: Option Vec<Storage>\n    calls: Option Vec<Call>\n    events: Option Vec<Event>\n    constants: Vec<Constant>\nenum StorageHasher:\n    Blake2_128\n    Blake2_256\n    Twox128\n    Twox256\n    Twox64Concat\nstruct Constant:\n    name: String\n    type: Type\n    value: Vec<u8>\n    documentation: Vec<String>\nstruct Storage:\n    name: String\n    modifier: StorageModifier\n    type: StorageType\n    default: Vec<u8>\n    documentation: Vec<String>\nenum StorageModifier:\n    Optional\n    Default\nenum StorageType:\n    Plain: Type\n    Map: StorageMapType\n    DoubleMap: StorageDoubleMapType\nstruct StorageMapType:\n    hasher: StorageHasher\n    key: Type\n    value: Type\n    iterable: bool\nstruct StorageDoubleMapType:\n    hasher: StorageHasher\n    first_key: Type\n    second_key: Type\n    value: Type\n    iterable: bool\nstruct Call:\n    name: String\n    arguments: Vec<CallArg>\n    documentation: Vec<String>\nstruct CallArg:\n    name: String\n    type: Type\nstruct Event:\n    name: String\n    arguments: Vec<Type>\n    documentation: Vec<String>\n")])])]),a("p",[a("code",[e._v("Type")]),e._v(" is just a "),a("code",[e._v("String")]),e._v(", but the contents of the string are to be interpreted as the name of a type.")]),e._v(" "),a("p",[e._v("Substrate chains (actually, specifically Substrate chains built using the SRML) such as Polkadot are composed of various "),a("em",[e._v("modules")]),e._v(". Each module can be imagined a little bit like a smart contract, with various kinds of transactions (or, in Substrate terms, "),a("em",[e._v("extrinsics")]),e._v("), data items that persist between transactions and blocks, events and constant parameters. The metadata encodes all of these things, allowing your client code to both create particular transactions or interpret what has happened on the chain, even between different Substrate blockchains or over many different upgrades or forks of the same chain.")]),e._v(" "),a("p",[e._v("There are two modules a wallet needs to be aware of: Balances and Indices. Balances allows you to send and receive funds between different accounts. Indices allows you to interpret user addresses.")]),e._v(" "),a("h2",{attrs:{id:"_3-working-with-ss58-and-account-addresses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-working-with-ss58-and-account-addresses"}},[e._v("#")]),e._v(" 3. Working with SS58 and account addresses")]),e._v(" "),a("p",[e._v("In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit) "),a("em",[e._v("AccountId")]),e._v(". This is simply the public key for the x25519 cryptography used by Substrate.")]),e._v(" "),a("p",[e._v("However, to keep the addresses small, we index every account with a non-zero balance on Polkadot and use just this "),a("em",[e._v("index")]),e._v(" to identify the account. This index is much smaller than the 32-byte "),a("em",[e._v("AccountId")]),e._v(", and can usually be encoded in just a couple of bytes.")]),e._v(" "),a("p",[e._v("Where Bitcoin has the Check58 address format and Ethereum used the "),a("code",[e._v("0x...")]),e._v(' hex format, Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to handle many different cryptographies and chains. It has much in common with Bitcoin\'s Check58 format such as a version prefix, a hash-based checksum suffix and base-58 encoding. Further information on it can be found here [TODO]. Of the many supported "version codes", only one particular family of subformats is especially important for Polkadot support in wallets.')]),e._v(" "),a("p",[e._v("The SS58 format is a base-58 encoding (using the same alphabet as Bitcoin) of a version prefix (which is one byte and always "),a("code",[e._v("0x00")]),e._v(" for Polkadot and "),a("code",[e._v("0x02")]),e._v(" for Kusama) followed by one or more payload bytes and ending with one or more checksum bytes:")]),e._v(" "),a("p",[a("code",[e._v("0x00 <payload bytes> <checksum bytes>")])]),e._v(" "),a("p",[a("strong",[e._v("An address does not have a fixed length.")]),e._v(" Depending on the length, the payload may have a different meaning and there could be a different ratio of payload to checksum bytes. Here is a table to consult to determine how to interpret an address of a particular size:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Total bytes")]),e._v(" "),a("th",[e._v("Version bytes")]),e._v(" "),a("th",[e._v("Payload bytes")]),e._v(" "),a("th",[e._v("Checksum bytes")]),e._v(" "),a("th",[e._v("Payload type")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("3")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Index")])]),e._v(" "),a("tr",[a("td",[e._v("4")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Index")])]),e._v(" "),a("tr",[a("td",[e._v("6")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("4")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Index")])]),e._v(" "),a("tr",[a("td",[e._v("35")]),e._v(" "),a("td",[e._v("1")]),e._v(" "),a("td",[e._v("32")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("AccountId")])])])]),e._v(" "),a("p",[e._v("NOTE: This table contains only the most common commbinations; SS58 includes several more uncommon ones. For maximum compatibility then implement according to the full SS58 specification.")]),e._v(" "),a("p",[e._v("Once decoded into the fields, then the version should be checked to be "),a("code",[e._v("0x00")]),e._v(". The checksum should then be verified as being equivalent to the beginning of the Blake2-256 hash of the SS58 data, not including the checksum itself. If the checksum is one byte, then only the first byte of the hash is checked. If it is two bytes, then the first two bytes of the hash are checked.")]),e._v(" "),a("p",[e._v("Finally, in the case of an indexed address, the index should be decoded into a 32-byte account identifier. This can be done by inspecting the storage of the Indices module.")]),e._v(" "),a("h3",{attrs:{id:"looking-up-an-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#looking-up-an-index"}},[e._v("#")]),e._v(" Looking up an index")]),e._v(" "),a("p",[e._v("Looking up an index is a bit fiddly, since it involves looking up some storage and decoding and interpreting it.")]),e._v(" "),a("p",[e._v("The specific storage item that we care about is "),a("code",[e._v("EnumSet")]),e._v(" in the "),a("code",[e._v("Indices")]),e._v(" module. Inspecting the storage is done through the "),a("code",[e._v("state_getStorage")]),e._v(' RPC, to which a key must be supplied. The key encodes the entire "query". In general, the metadata should be consulted on how to generate the key. To do this, we first find the '),a("code",[e._v("Module")]),e._v(" whose name is "),a("code",[e._v("Indices")]),e._v(", then find the entry in that module's "),a("code",[e._v("storage")]),e._v(" field of the "),a("code",[e._v("Storage")]),e._v(" item with the name "),a("code",[e._v("EnumSet")]),e._v(". This item contains all the information we need to construct and interpret the query.")]),e._v(" "),a("p",[e._v("For Polkadot, we find that the item has a "),a("code",[e._v("type")]),e._v(" of "),a("code",[e._v("Map")]),e._v(" whose associate value is a "),a("code",[e._v("StorageMapType")]),e._v(" whose "),a("code",[e._v("hasher")]),e._v(" is "),a("code",[e._v("Blake2_256")]),e._v(", whose "),a("code",[e._v("key")]),e._v(" is "),a("code",[e._v("T::AccountIndex")]),e._v(" (equivalent to a "),a("code",[e._v("u32")]),e._v(" for Polkadot) and whose "),a("code",[e._v("value")]),e._v(" is "),a("code",[e._v("Vec<T::AccountId>")]),e._v(".")]),e._v(" "),a("p",[e._v("This means that if our index, encoded by SCALE as a "),a("code",[e._v("u32")]),e._v(", is "),a("code",[e._v("<INDEX>")]),e._v(", then our storage key is determined through the Blake2 256 hash of the string "),a("code",[e._v("Indices EnumSet<INDEX>")]),e._v(". In fact, accounts are stored in batches of 64, so to look up a particular index, we don't query by the account index but rather the index of its batch. This just means we first need to divide the index by 64 before encoding.")]),e._v(" "),a("p",[e._v("This will return a SCALE-encoded "),a("code",[e._v("Vec<T::AccountId>")]),e._v(" ("),a("code",[e._v("T::AccountId")]),e._v(" may be defined in SCALE as "),a("code",[e._v("[u8; 32]")]),e._v(" or a 32-byte fixed quantity) of up the batch that contains the account we are interested in. To get the "),a("code",[e._v("AccountId")]),e._v(" item, just take the "),a("code",[e._v("index % 64")]),e._v("th item from the vector. If that item doesn't exist (or you get an empty storage item), then the account index is invalid.")]),e._v(" "),a("p",[e._v("Otherwise, you have your account ID and it can be displayed to the user along with its identicon and balance.")]),e._v(" "),a("h2",{attrs:{id:"_4-working-with-balances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-working-with-balances"}},[e._v("#")]),e._v(" 4. Working with balances")]),e._v(" "),a("p",[e._v("In Polkadot, account balances can be looked up within the "),a("code",[e._v("Balances")]),e._v(" module using the metadata in a manner not dissimilar to looking up an account index. In this case, we need to query the "),a("code",[e._v("FreeBalance")]),e._v(" item in storage. Here, the "),a("code",[e._v("StorageMapType")]),e._v(" is similar, except that the "),a("code",[e._v("key")]),e._v(" is of type "),a("code",[e._v("T::AccountId")]),e._v(" (the 32-byte quantity) and the "),a("code",[e._v("value")]),e._v(" is "),a("code",[e._v("BalanceOf<T>")]),e._v(", which for the purposes of Polkadot is a "),a("code",[e._v("u128")]),e._v(" (128-bit value). The hash function is the same Blake2 256, so the full storage key would be given by the Blake2 256 hash of the string "),a("code",[e._v("Balances FreeBalance<ID>")]),e._v(" where "),a("code",[e._v("<ID>")]),e._v(" is the 32-byte "),a("code",[e._v("AccountId")]),e._v(".")]),e._v(" "),a("p",[e._v("NOTE: "),a("code",[e._v("FreeBalance")]),e._v(" gives the total balance controlled by that account, but does not account for temporarily locked portions of balance, such as those locked for staking, voting or vesting. This information can be queried from the chain, but it is outside the scope of this document.")]),e._v(" "),a("p",[e._v("The balance encodes the DOT token with 12 decimal places. To get the actual number of DOTs, you need to divide the 128-bit balance by 1,000,000,000,000 (10**12). For completeness, The exact denominations of the Polkadot currency are:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Balance value")]),e._v(" "),a("th",[e._v("Name")])])]),e._v(" "),a("tbody",[a("tr",[a("td"),e._v(" "),a("td")]),e._v(" "),a("tr",[a("td",[e._v("1")]),e._v(" "),a("td",[e._v("Planck 10")])])])]),e._v(" "),a("p",[a("strong",[e._v("3 | Point 10")]),e._v("6 | Microdot (UDOT) 10"),a("strong",[e._v("9 | Millidot (MDOT) 10")]),e._v("12 | Dot (DOT) 10**15 | Blob")]),e._v(" "),a("h3",{attrs:{id:"transferring-balances"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transferring-balances"}},[e._v("#")]),e._v(" Transferring balances")]),e._v(" "),a("p",[e._v("To transfer a balance, a transaction must be constructed and sent. In constructing a transaction, there are two key parts: the general part of the transaction and the module-specific "),a("code",[e._v("function")]),e._v(" part of the transaction with the latter generally needing information from the chain's metadata must generally.")]),e._v(" "),a("p",[e._v("In general, Polkadot's transactions are encoded as "),a("em",[e._v("signed")]),e._v(" "),a("code",[e._v("Extrinsic")]),e._v("s in SCALE. To facilitate forward compatibility, extrinsics are double-encoded, so the initial encoding is passed back into SCALE (as a "),a("code",[e._v("Vec<u8>")]),e._v(") and the output of that is used. This has the effect of adding a small length prefix onto it allowing systems that cannot interpret the transaction data itself to still be able to pass them around as opaque packets of data.")]),e._v(" "),a("p",[e._v("The SCALE format is given by "),a("code",[e._v("Extrinsic")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("struct Extrinsic:\n    tx: Option TransactionInfo\n    function: Function\nstruct TransactionInfo:\n    sender: Address\n    sig: [u8; 64]\n    era: Era\n    nonce: Compact Nonce\n    tip: Compact Balance\nstruct TransactionPayload:\n    function: Function\n    era: Era\n    nonce: Nonce\n    tip: Balance\n    checkpoint_hash: Hash\n")])])]),a("p",[e._v("For a transaction, the optional "),a("code",[e._v("tx")]),e._v(" is always used. The "),a("code",[e._v("Address")]),e._v(" type is a specially encoded SCALE type, allowing an account to be presented either as an account index or as a 32-byte account ID, whichever is more convenient. The format is described here in the SCALE [TODO]. Assuming you wish to present a 32-byte account ID, then it can be expressed as an "),a("code",[e._v("Address")]),e._v(" merely by prefixing the "),a("code",[e._v("0xff")]),e._v(" byte.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("sig")]),e._v(" field must contain a 25519-family signature of the SCALE-encoded "),a("code",[e._v("SigPayload")]),e._v(". The key used to sign the payload must correspond to the "),a("code",[e._v("sender")]),e._v(' account. Schnorr/Ristretto 25519 ("sr25519") is the recommended signing format to use.')]),e._v(" "),a("p",[e._v('Era is a one or two byte item, again with a special SCALE encoding format and it encodes the period (as a range of blocks) for which this transaction should be considered valid. It is an important safeguard against certain transaction replay attacks and should generally be used, however a simple wallet implementation that has no plans to reuse accounts after they become empty could ignore it. To ignore it and make the transaction "immortal", use an encoded '),a("code",[e._v("Era")]),e._v(" of just one byte: "),a("code",[e._v("0x00")]),e._v(". However, if an account is removed from storage and a user re-funds an address, then previous immortal transactions could be replayed. Therefore, you may want to prevent account reaping and use mortal transactions to be safe.")]),e._v(" "),a("p",[e._v("The nonce is the number of transactions send so far by the sender account, much like in Ethereum. It is of type "),a("code",[e._v("Nonce")]),e._v(", logically equivalent to a "),a("code",[e._v("u64")]),e._v(". To get the correct value, the appropriate storage item must be queried, much like when querying an account's balance. In this case, it is the "),a("code",[e._v("System")]),e._v(" module's "),a("code",[e._v("AccountNonce")]),e._v(" item; thus the storage key required is the Blake2 256 hash of the string "),a("code",[e._v("System AccountNonce<ID>")]),e._v(" where "),a("code",[e._v("<ID>")]),e._v(" is the 32-byte "),a("code",[e._v("AccountId")]),e._v(". It will return a "),a("code",[e._v("Nonce")]),e._v(" which may be decoded and used here.")]),e._v(" "),a("p",[e._v("NOTE: The nonce retrieved from storage does not take into account "),a("em",[e._v("pending")]),e._v(" transactions. If you are sending more than one transaction from a single account at a time, then you will need to increment and track this value manually.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("tip")]),e._v(" is a "),a("code",[e._v("Balance")]),e._v(" (logically equivalent to the "),a("code",[e._v("u128")]),e._v(" type in SCALE), which denotes some additional fees paid to the block author for prioritized inclusion at busy times. It will typically be zero.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("checkpoint_hash")]),e._v(' is the hash of the "checkpoint block", which is to say the first block of the era specified by the '),a("code",[e._v("era")]),e._v(' field. If just making the transaction "immortal", then the genesis hash of the blockchain should be used. This can be determined through the RPC '),a("code",[e._v("chain_getBlockHash(0)")]),e._v(".")]),e._v(" "),a("p",[e._v("Finally, the "),a("code",[e._v("function")]),e._v(" is a "),a("code",[e._v("Function")]),e._v(" type (sometimes known as a "),a("code",[e._v("Call")]),e._v(" or "),a("code",[e._v("Proposal")]),e._v(" in certain contexts) which describes what action shall be dispatched. It must be constructed according to metadata. In this case, we want our transaction to effect the "),a("code",[e._v("transfer")]),e._v(" function in the "),a("code",[e._v("Balances")]),e._v(" module, to transfer a balance from one account to another. It is important to check the index of the Balances module itself in the list of modules. In this case, it is the 6th item, or index 5. It is also necessary to inspect the "),a("code",[e._v("calls")]),e._v(" field of the Balances "),a("code",[e._v("Module")]),e._v(" in the metadata, and determine what index in the list of calls the transfer function is. As it happens, it is first in the list, and thus has an index of 0.")]),e._v(" "),a("p",[e._v("Finally, we need to know what parameters to this function are expected in order to construct the rest of the transaction. This is provided in the "),a("code",[e._v("Call")]),e._v(" item of the metadata that we just located. Two parameters are expected:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dest")]),e._v(" with a type of "),a("code",[e._v("<T::Lookup as StaticLookup>::Source")]),e._v(" (aka "),a("code",[e._v("Address")]),e._v("); and")]),e._v(" "),a("li",[a("code",[e._v("value")]),e._v(" with a type of "),a("code",[e._v("Compact<T::Balance>")]),e._v(" (aka "),a("code",[e._v("Compact Balance")]),e._v(").")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("function")]),e._v(" "),a("em",[e._v("in this case")]),e._v(" (i.e. specifically and only for the Balance transfer transaction on Polkadot as of right now) would be the struct:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("struct BalanceTransferFunction:\n    module_index: u8\n    call_index: u8\n    dest: Address\n    value: Compact Balance\n")])])]),a("p",[e._v("where "),a("code",[e._v("module_index")]),e._v(" is "),a("code",[e._v("0x05")]),e._v(" and "),a("code",[e._v("call_index")]),e._v(" is "),a("code",[e._v("0x00")]),e._v(". "),a("code",[e._v("dest")]),e._v(" is similar to "),a("code",[e._v("sender")]),e._v(" and may be provided as either an account index or a 32-byte account ID, whichever is more convenient. If providing as an account ID, then it can be formed into an address simply by prefixing the byte "),a("code",[e._v("0xff")]),e._v(" to it.")]),e._v(" "),a("p",[e._v("The amount to be transferred (not including any fees payable to the system) is given by "),a("code",[e._v("value")]),e._v(", and must be a SCALE compact-encoded number.")]),e._v(" "),a("h3",{attrs:{id:"submitting-and-checking-transactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#submitting-and-checking-transactions"}},[e._v("#")]),e._v(" Submitting and checking transactions")]),e._v(" "),a("p",[e._v("Once a transaction has been crafted, you will need to submit it for inclusion in the chain and eventually want to verify that it has indeed been included.")]),e._v(" "),a("p",[e._v("This can be done in two ways: one is to use the simple RPC "),a("code",[e._v("author_submitExtrinsic")]),e._v(", which will return the transaction's hash. Once submitted, you can keep checking transactions in finalised blocks manually (since you are tracking the finalised heads anyway) until you see the transaction you submitted, at which point you know it is in the chain.")]),e._v(" "),a("p",[e._v("The other way is to use the pub/sub RPC "),a("code",[e._v("author_submitAndWatchExtrinsic")]),e._v(". Again, you provide the SCALE-encoded transaction, but here you receive a subscription ID. You will be notified over the RPC as the transaction gets validated, broadcast and included in the chain with separate messages that are pushed.")]),e._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("This concludes the article. Here you should have a good idea of how to interact with a Substrate/Polkadot node in order to track the finalised chain head, to decode SS58 addresses, check account information like balances & nonces and to construct, submit and track transactions. You've also learnt a little about the SCALE codec, the Substrate metadata system and how to build future-proof and generic Substrate-based systems.")]),e._v(" "),a("p",[e._v("If you have any questions, please come ask in "),a("a",{attrs:{href:"https://riot.im/app/#/room/#substrate-technical:matrix.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Substrate Technical"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[a("em",[e._v("The original source of this page was published "),a("a",{attrs:{href:"https://hackmd.io/@gavwood/r1jTRX2Zr",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);