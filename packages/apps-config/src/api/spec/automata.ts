// Copyright 2017-2021 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

/* eslint-disable sort-keys */
export default {
  DealId: "AccountId",
  OrderId: "AccountId",
  Attestor: {
    url: "Vec<u8>",
    pubkey: "Vec<u8>",
    attested_geodes: "Vec<AccountId>"
  },
  PriceType: "u128",
  AmountType: "u128",
  OrderPair: {
    first: "Vec<u8>",
    second: "Vec<u8>"
  },
  OrderType: {
    _enum: ["Buy", "Sell"]
  },
  CancelOrMatch: {
    _enum: ["Match", "Cancel"]
  },
  BidT: {
    nodeid: "u128",
    price: "PriceType",
    sum: "AmountType",
    list: "Vec<u128>"
  },
  OrderStatus: {
    _enum: ["Valid", "Canceled", "Finished"]
  },
  OrderInfo: {
    who: "AccountId",
    ordertype: "OrderType",
    pair: "OrderPair",
    amount: "AmountType",
    price: "PriceType",
    left: "AmountType",
    status: "OrderStatus",
    index: "u128",
    time: "BlockNumber",
    fill_index: "Vec<u128>",
    region: "Vec<u8>"
  },
  BidDetailT: {
    id: "u128",
    pair: "OrderPair",
    order_type: "OrderType",
    user: "AccountId",
    price: "PriceType",
    amount: "AmountType",
    time: "BlockNumber"
  },
  RegionT: {
    id: "u64",
    name: "Vec<u8>",
    admin: "AccountId",
    treasure: "AccountId",
    taker_rate: "Permill",
    maker_rate: "Permill",
    pairs: "Vec<OrderPair>"
  },
  PerMill: "u32",
  DepthInfo: {
    buy: "Vec<DepthItem>",
    sell: "Vec<DepthItem>"
  },
  DepthItem: {
    price: "u64",
    total: "u64"
  },
  MultiNodeIndex: {
    index: "u128",
    multi_key: "(OrderPair, OrderType)"
  },
  Node: {
    prev: "Option<u128>",
    next: "Option<u128>",
    data: "Bid"
  },
  NodeIndex: {
    index: "u128"
  },
  BestHeaderT: {
    number: "u64",
    hash: "H256"
  },
  ActionRecord: {
    index: "u64",
    proof: "Vec<u8>",
    header_hash: "H256"
  },
  EthHeader: {
    parent_hash: "H256",
    timestamp: "u64",
    number: "u64",
    author: "H160",
    transactions_root: "H256",
    uncles_hash: "H256",
    extra_data: "Bytes",
    state_root: "H256",
    receipts_root: "H256",
    log_bloom: "Bloom",
    gas_used: "U256",
    gas_limit: "U256",
    difficulty: "U256",
    seal: "Vec<Bytes>",
    the_hash: "Option<H256>"
  },
  Bloom: "[u8; 256]",
  ChainKind: {
    _enum: ["BOOL", "ETH", "CITA"]
  },
  TokenDetail: {
    uid: "u64",
    name: "Vec<u8>",
    address: "Vec<u8>",
    chain: "Vec<u8>",
    precision: "u64",
    extra: "Vec<u8>",
    identity: "Vec<u8>"
  },
  TokenControl: {
    _enum: ["Free", "Lock"]
  },
  WithdrawDetail: {
    uid: "u64",
    actor: "AccountId",
    token: "Vec<u8>",
    value: "u128",
    receiver: "Vec<u8>"
  },
  DepositDetail: {
    uid: "Vec<u8>",
    actor: "Vec<u8>",
    token: "Vec<u8>",
    value: "u128",
    receiver: "AccountId",
    chain: "Vec<u8>"
  },
  PairT: {
    token0: "Vec<u8>",
    token1: "Vec<u8>",
    // the pair address
    address: "AccountId",
    // total liquidity for this token
    totalsupply: "AmountType",
    // total token0 in this reserve
    reserve0: "AmountType",
    // total token1 in this reserve
    reserve1: "AmountType",
    blocktimestamp_last: "u32",
    price0_cumulative_last: "U256",
    price1_cumulative_last: "U256",
    klast: "U256"
  },
  AuthorInfo: {
    previous: "(Vec<H160>, u32)",
    current: "(Vec<H160>, u32)",
    uid: "u64"
  },
  WitnessType: {
    _enum: {
      Admin: "Null",
      Single: "Vec<u8>"
    }
  },
  WitnessProposal: {
    message: "Vec<u8>",
    signatures: "Vec<(H160, Vec<u8>)>",
    ty: "Vec<u8>",
    finalize: "bool",
    end: "bool"
  },
  StatisticsInfo: {
    unreleased: "BTreeSet<u64>",
    maximum: "u64"
  }
};
