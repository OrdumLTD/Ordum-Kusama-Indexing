import type {Result, Option} from './support'

export type OriginCaller = OriginCaller_system | OriginCaller_Council | OriginCaller_TechnicalCommittee | OriginCaller_Origins | OriginCaller_ParachainsOrigin | OriginCaller_XcmPallet | OriginCaller_Void

export interface OriginCaller_system {
    __kind: 'system'
    value: RawOrigin
}

export interface OriginCaller_Council {
    __kind: 'Council'
    value: Type_152
}

export interface OriginCaller_TechnicalCommittee {
    __kind: 'TechnicalCommittee'
    value: Type_153
}

export interface OriginCaller_Origins {
    __kind: 'Origins'
    value: Origin
}

export interface OriginCaller_ParachainsOrigin {
    __kind: 'ParachainsOrigin'
    value: Type_155
}

export interface OriginCaller_XcmPallet {
    __kind: 'XcmPallet'
    value: Type_157
}

export interface OriginCaller_Void {
    __kind: 'Void'
    value: Void
}

export type Bounded = Bounded_Legacy | Bounded_Inline | Bounded_Lookup

export interface Bounded_Legacy {
    __kind: 'Legacy'
    hash: Uint8Array
}

export interface Bounded_Inline {
    __kind: 'Inline'
    value: Uint8Array
}

export interface Bounded_Lookup {
    __kind: 'Lookup'
    hash: Uint8Array
    len: number
}

export type DispatchTime = DispatchTime_At | DispatchTime_After

export interface DispatchTime_At {
    __kind: 'At'
    value: number
}

export interface DispatchTime_After {
    __kind: 'After'
    value: number
}

export type Type_621 = Type_621_Ongoing | Type_621_Approved | Type_621_Rejected | Type_621_Cancelled | Type_621_TimedOut | Type_621_Killed

export interface Type_621_Ongoing {
    __kind: 'Ongoing'
    value: Type_622
}

export interface Type_621_Approved {
    __kind: 'Approved'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_621_Rejected {
    __kind: 'Rejected'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_621_Cancelled {
    __kind: 'Cancelled'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_621_TimedOut {
    __kind: 'TimedOut'
    value: [number, (Deposit | undefined), (Deposit | undefined)]
}

export interface Type_621_Killed {
    __kind: 'Killed'
    value: number
}

export type RawOrigin = RawOrigin_Root | RawOrigin_Signed | RawOrigin_None

export interface RawOrigin_Root {
    __kind: 'Root'
}

export interface RawOrigin_Signed {
    __kind: 'Signed'
    value: Uint8Array
}

export interface RawOrigin_None {
    __kind: 'None'
}

export type Type_152 = Type_152_Members | Type_152_Member | Type_152__Phantom

export interface Type_152_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_152_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_152__Phantom {
    __kind: '_Phantom'
}

export type Type_153 = Type_153_Members | Type_153_Member | Type_153__Phantom

export interface Type_153_Members {
    __kind: 'Members'
    value: [number, number]
}

export interface Type_153_Member {
    __kind: 'Member'
    value: Uint8Array
}

export interface Type_153__Phantom {
    __kind: '_Phantom'
}

export type Origin = Origin_StakingAdmin | Origin_Treasurer | Origin_FellowshipAdmin | Origin_GeneralAdmin | Origin_AuctionAdmin | Origin_LeaseAdmin | Origin_ReferendumCanceller | Origin_ReferendumKiller | Origin_SmallTipper | Origin_BigTipper | Origin_SmallSpender | Origin_MediumSpender | Origin_BigSpender | Origin_WhitelistedCaller | Origin_FellowshipInitiates | Origin_Fellows | Origin_FellowshipExperts | Origin_FellowshipMasters | Origin_Fellowship1Dan | Origin_Fellowship2Dan | Origin_Fellowship3Dan | Origin_Fellowship4Dan | Origin_Fellowship5Dan | Origin_Fellowship6Dan | Origin_Fellowship7Dan | Origin_Fellowship8Dan | Origin_Fellowship9Dan

export interface Origin_StakingAdmin {
    __kind: 'StakingAdmin'
}

export interface Origin_Treasurer {
    __kind: 'Treasurer'
}

export interface Origin_FellowshipAdmin {
    __kind: 'FellowshipAdmin'
}

export interface Origin_GeneralAdmin {
    __kind: 'GeneralAdmin'
}

export interface Origin_AuctionAdmin {
    __kind: 'AuctionAdmin'
}

export interface Origin_LeaseAdmin {
    __kind: 'LeaseAdmin'
}

export interface Origin_ReferendumCanceller {
    __kind: 'ReferendumCanceller'
}

export interface Origin_ReferendumKiller {
    __kind: 'ReferendumKiller'
}

export interface Origin_SmallTipper {
    __kind: 'SmallTipper'
}

export interface Origin_BigTipper {
    __kind: 'BigTipper'
}

export interface Origin_SmallSpender {
    __kind: 'SmallSpender'
}

export interface Origin_MediumSpender {
    __kind: 'MediumSpender'
}

export interface Origin_BigSpender {
    __kind: 'BigSpender'
}

export interface Origin_WhitelistedCaller {
    __kind: 'WhitelistedCaller'
}

export interface Origin_FellowshipInitiates {
    __kind: 'FellowshipInitiates'
}

export interface Origin_Fellows {
    __kind: 'Fellows'
}

export interface Origin_FellowshipExperts {
    __kind: 'FellowshipExperts'
}

export interface Origin_FellowshipMasters {
    __kind: 'FellowshipMasters'
}

export interface Origin_Fellowship1Dan {
    __kind: 'Fellowship1Dan'
}

export interface Origin_Fellowship2Dan {
    __kind: 'Fellowship2Dan'
}

export interface Origin_Fellowship3Dan {
    __kind: 'Fellowship3Dan'
}

export interface Origin_Fellowship4Dan {
    __kind: 'Fellowship4Dan'
}

export interface Origin_Fellowship5Dan {
    __kind: 'Fellowship5Dan'
}

export interface Origin_Fellowship6Dan {
    __kind: 'Fellowship6Dan'
}

export interface Origin_Fellowship7Dan {
    __kind: 'Fellowship7Dan'
}

export interface Origin_Fellowship8Dan {
    __kind: 'Fellowship8Dan'
}

export interface Origin_Fellowship9Dan {
    __kind: 'Fellowship9Dan'
}

export type Type_155 = Type_155_Parachain

export interface Type_155_Parachain {
    __kind: 'Parachain'
    value: number
}

export type Type_157 = Type_157_Xcm | Type_157_Response

export interface Type_157_Xcm {
    __kind: 'Xcm'
    value: V1MultiLocation
}

export interface Type_157_Response {
    __kind: 'Response'
    value: V1MultiLocation
}

export type Void = never

export interface Type_622 {
    track: number
    origin: OriginCaller
    proposal: Bounded
    enactment: DispatchTime
    submitted: number
    submissionDeposit: Deposit
    decisionDeposit: (Deposit | undefined)
    deciding: (DecidingStatus | undefined)
    tally: Tally
    inQueue: boolean
    alarm: ([number, [number, number]] | undefined)
}

export interface Deposit {
    who: Uint8Array
    amount: bigint
}

export interface V1MultiLocation {
    parents: number
    interior: V1Junctions
}

export interface DecidingStatus {
    since: number
    confirming: (number | undefined)
}

export interface Tally {
    ayes: bigint
    nays: bigint
    support: bigint
}

export type V1Junctions = V1Junctions_Here | V1Junctions_X1 | V1Junctions_X2 | V1Junctions_X3 | V1Junctions_X4 | V1Junctions_X5 | V1Junctions_X6 | V1Junctions_X7 | V1Junctions_X8

export interface V1Junctions_Here {
    __kind: 'Here'
}

export interface V1Junctions_X1 {
    __kind: 'X1'
    value: V1Junction
}

export interface V1Junctions_X2 {
    __kind: 'X2'
    value: [V1Junction, V1Junction]
}

export interface V1Junctions_X3 {
    __kind: 'X3'
    value: [V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X4 {
    __kind: 'X4'
    value: [V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X5 {
    __kind: 'X5'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X6 {
    __kind: 'X6'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X7 {
    __kind: 'X7'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export interface V1Junctions_X8 {
    __kind: 'X8'
    value: [V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction, V1Junction]
}

export type V1Junction = V1Junction_Parachain | V1Junction_AccountId32 | V1Junction_AccountIndex64 | V1Junction_AccountKey20 | V1Junction_PalletInstance | V1Junction_GeneralIndex | V1Junction_GeneralKey | V1Junction_OnlyChild | V1Junction_Plurality

export interface V1Junction_Parachain {
    __kind: 'Parachain'
    value: number
}

export interface V1Junction_AccountId32 {
    __kind: 'AccountId32'
    network: V0NetworkId
    id: Uint8Array
}

export interface V1Junction_AccountIndex64 {
    __kind: 'AccountIndex64'
    network: V0NetworkId
    index: bigint
}

export interface V1Junction_AccountKey20 {
    __kind: 'AccountKey20'
    network: V0NetworkId
    key: Uint8Array
}

export interface V1Junction_PalletInstance {
    __kind: 'PalletInstance'
    value: number
}

export interface V1Junction_GeneralIndex {
    __kind: 'GeneralIndex'
    value: bigint
}

export interface V1Junction_GeneralKey {
    __kind: 'GeneralKey'
    value: Uint8Array
}

export interface V1Junction_OnlyChild {
    __kind: 'OnlyChild'
}

export interface V1Junction_Plurality {
    __kind: 'Plurality'
    id: V0BodyId
    part: V0BodyPart
}

export type V0NetworkId = V0NetworkId_Any | V0NetworkId_Named | V0NetworkId_Polkadot | V0NetworkId_Kusama

export interface V0NetworkId_Any {
    __kind: 'Any'
}

export interface V0NetworkId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0NetworkId_Polkadot {
    __kind: 'Polkadot'
}

export interface V0NetworkId_Kusama {
    __kind: 'Kusama'
}

export type V0BodyId = V0BodyId_Unit | V0BodyId_Named | V0BodyId_Index | V0BodyId_Executive | V0BodyId_Technical | V0BodyId_Legislative | V0BodyId_Judicial | V0BodyId_Defense | V0BodyId_Administration | V0BodyId_Treasury

export interface V0BodyId_Unit {
    __kind: 'Unit'
}

export interface V0BodyId_Named {
    __kind: 'Named'
    value: Uint8Array
}

export interface V0BodyId_Index {
    __kind: 'Index'
    value: number
}

export interface V0BodyId_Executive {
    __kind: 'Executive'
}

export interface V0BodyId_Technical {
    __kind: 'Technical'
}

export interface V0BodyId_Legislative {
    __kind: 'Legislative'
}

export interface V0BodyId_Judicial {
    __kind: 'Judicial'
}

export interface V0BodyId_Defense {
    __kind: 'Defense'
}

export interface V0BodyId_Administration {
    __kind: 'Administration'
}

export interface V0BodyId_Treasury {
    __kind: 'Treasury'
}

export type V0BodyPart = V0BodyPart_Voice | V0BodyPart_Members | V0BodyPart_Fraction | V0BodyPart_AtLeastProportion | V0BodyPart_MoreThanProportion

export interface V0BodyPart_Voice {
    __kind: 'Voice'
}

export interface V0BodyPart_Members {
    __kind: 'Members'
    count: number
}

export interface V0BodyPart_Fraction {
    __kind: 'Fraction'
    nom: number
    denom: number
}

export interface V0BodyPart_AtLeastProportion {
    __kind: 'AtLeastProportion'
    nom: number
    denom: number
}

export interface V0BodyPart_MoreThanProportion {
    __kind: 'MoreThanProportion'
    nom: number
    denom: number
}
