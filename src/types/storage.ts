import assert from 'assert'
import {Block, BlockContext, Chain, ChainContext, Option, Result, StorageBase} from './support'
import * as v1020 from './v1020'
import * as v1050 from './v1050'
import * as v9160 from './v9160'
import * as v9320 from './v9320'
import * as v9350 from './v9350'
import * as v9370 from './v9370'

export class BalancesAccountStorage extends StorageBase {
    protected getPrefix() {
        return 'Balances'
    }

    protected getName() {
        return 'Account'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get isV1050(): boolean {
        return this.getTypeHash() === '0b3b4bf0dd7388459eba461bc7c3226bf58608c941710a714e02f33ec0f91e78'
    }

    /**
     *  The balance of an account.
     * 
     *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
     *  is ever zero, then the entry *MUST* be removed.
     * 
     *  NOTE: This is only used in the case that this module is used to store balances.
     */
    get asV1050(): BalancesAccountStorageV1050 {
        assert(this.isV1050)
        return this as any
    }
}

/**
 *  The balance of an account.
 * 
 *  NOTE: THIS MAY NEVER BE IN EXISTENCE AND YET HAVE A `total().is_zero()`. If the total
 *  is ever zero, then the entry *MUST* be removed.
 * 
 *  NOTE: This is only used in the case that this module is used to store balances.
 */
export interface BalancesAccountStorageV1050 {
    get(key: Uint8Array): Promise<v1050.AccountData>
    getAll(): Promise<v1050.AccountData[]>
    getMany(keys: Uint8Array[]): Promise<v1050.AccountData[]>
}

export class PreimagePreimageForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'PreimageFor'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === '2c57d2b4da44b4d6783b1eb7d03f42f23490455080a2c71c813169067dfe1a54'
    }

    /**
     *  The preimages stored by this pallet.
     */
    get asV9160(): PreimagePreimageForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    get isV9320(): boolean {
        return this.getTypeHash() === '55fa1a08a9fac4bcf15d53fce590e3fb5af7fbc408ac4b8e1ed28f5f8a242534'
    }

    get asV9320(): PreimagePreimageForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The preimages stored by this pallet.
 */
export interface PreimagePreimageForStorageV9160 {
    get(key: Uint8Array): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: Uint8Array[]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: Uint8Array][]>
}

export interface PreimagePreimageForStorageV9320 {
    get(key: [Uint8Array, number]): Promise<(Uint8Array | undefined)>
    getAll(): Promise<Uint8Array[]>
    getMany(keys: [Uint8Array, number][]): Promise<(Uint8Array | undefined)[]>
    getKeys(): Promise<[Uint8Array, number][]>
    getKeys(key: [Uint8Array, number]): Promise<[Uint8Array, number][]>
    getKeysPaged(pageSize: number): AsyncIterable<[Uint8Array, number][]>
    getKeysPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[Uint8Array, number][]>
    getPairs(): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairs(key: [Uint8Array, number]): Promise<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
    getPairsPaged(pageSize: number, key: [Uint8Array, number]): AsyncIterable<[k: [Uint8Array, number], v: Uint8Array][]>
}

export class PreimageStatusForStorage extends StorageBase {
    protected getPrefix() {
        return 'Preimage'
    }

    protected getName() {
        return 'StatusFor'
    }

    /**
     *  The request status of a given hash.
     */
    get isV9160(): boolean {
        return this.getTypeHash() === 'df89c798bcb34b24310c6affc3156d4e8562cfc149636b7239c64508bca6c7ba'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9160(): PreimageStatusForStorageV9160 {
        assert(this.isV9160)
        return this as any
    }

    /**
     *  The request status of a given hash.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '16647d6a818ed8802ff108ffe98014d8de07d069008bb466b26b7367e684d574'
    }

    /**
     *  The request status of a given hash.
     */
    get asV9320(): PreimageStatusForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9160 {
    get(key: Uint8Array): Promise<(v9160.RequestStatus | undefined)>
    getAll(): Promise<v9160.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9160.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9160.RequestStatus][]>
}

/**
 *  The request status of a given hash.
 */
export interface PreimageStatusForStorageV9320 {
    get(key: Uint8Array): Promise<(v9320.RequestStatus | undefined)>
    getAll(): Promise<v9320.RequestStatus[]>
    getMany(keys: Uint8Array[]): Promise<(v9320.RequestStatus | undefined)[]>
    getKeys(): Promise<Uint8Array[]>
    getKeys(key: Uint8Array): Promise<Uint8Array[]>
    getKeysPaged(pageSize: number): AsyncIterable<Uint8Array[]>
    getKeysPaged(pageSize: number, key: Uint8Array): AsyncIterable<Uint8Array[]>
    getPairs(): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairs(key: Uint8Array): Promise<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
    getPairsPaged(pageSize: number, key: Uint8Array): AsyncIterable<[k: Uint8Array, v: v9320.RequestStatus][]>
}

export class ReferendaReferendumInfoForStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'ReferendumInfoFor'
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === '33899ab47ab8fe6857d9da2d98b7b7168468bb2627a189bdae062d9c5ad90e3a'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9320(): ReferendaReferendumInfoForStorageV9320 {
        assert(this.isV9320)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9350(): boolean {
        return this.getTypeHash() === '4adf07f2f69a8f559991f6f0e0723c30859a0ed73aeac6c1fb83b91e3f29a69c'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9350(): ReferendaReferendumInfoForStorageV9350 {
        assert(this.isV9350)
        return this as any
    }

    /**
     *  Information concerning any given referendum.
     */
    get isV9370(): boolean {
        return this.getTypeHash() === '2e118aad7ee2503a94d98e08177512fcbcb174783c0ea17e18b13efb0a6a5dff'
    }

    /**
     *  Information concerning any given referendum.
     */
    get asV9370(): ReferendaReferendumInfoForStorageV9370 {
        assert(this.isV9370)
        return this as any
    }
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9320 {
    get(key: number): Promise<(v9320.Type_620 | undefined)>
    getAll(): Promise<v9320.Type_620[]>
    getMany(keys: number[]): Promise<(v9320.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9320.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9320.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9350 {
    get(key: number): Promise<(v9350.Type_620 | undefined)>
    getAll(): Promise<v9350.Type_620[]>
    getMany(keys: number[]): Promise<(v9350.Type_620 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9350.Type_620][]>
    getPairs(key: number): Promise<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9350.Type_620][]>
}

/**
 *  Information concerning any given referendum.
 */
export interface ReferendaReferendumInfoForStorageV9370 {
    get(key: number): Promise<(v9370.Type_621 | undefined)>
    getAll(): Promise<v9370.Type_621[]>
    getMany(keys: number[]): Promise<(v9370.Type_621 | undefined)[]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: v9370.Type_621][]>
    getPairs(key: number): Promise<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: v9370.Type_621][]>
}

export class ReferendaTrackQueueStorage extends StorageBase {
    protected getPrefix() {
        return 'Referenda'
    }

    protected getName() {
        return 'TrackQueue'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get isV9320(): boolean {
        return this.getTypeHash() === 'd59fac77bd4348bf0179a7e6c5ac239a8b8781c07a1524886ec03b3194de72e3'
    }

    /**
     *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
     *  conviction-weighted approvals.
     * 
     *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
     */
    get asV9320(): ReferendaTrackQueueStorageV9320 {
        assert(this.isV9320)
        return this as any
    }
}

/**
 *  The sorted list of referenda ready to be decided but not yet being decided, ordered by
 *  conviction-weighted approvals.
 * 
 *  This should be empty if `DecidingCount` is less than `TrackInfo::max_deciding`.
 */
export interface ReferendaTrackQueueStorageV9320 {
    get(key: number): Promise<[number, bigint][]>
    getAll(): Promise<[number, bigint][][]>
    getMany(keys: number[]): Promise<[number, bigint][][]>
    getKeys(): Promise<number[]>
    getKeys(key: number): Promise<number[]>
    getKeysPaged(pageSize: number): AsyncIterable<number[]>
    getKeysPaged(pageSize: number, key: number): AsyncIterable<number[]>
    getPairs(): Promise<[k: number, v: [number, bigint][]][]>
    getPairs(key: number): Promise<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
    getPairsPaged(pageSize: number, key: number): AsyncIterable<[k: number, v: [number, bigint][]][]>
}

export class TreasuryApprovalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Approvals'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === 'a9f6979e68cec9d5834e7d077129aa05e8b477f326cb009049d2178afbea14f0'
    }

    /**
     *  Proposal indices that have been approved but not yet awarded.
     */
    get asV1020(): TreasuryApprovalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposal indices that have been approved but not yet awarded.
 */
export interface TreasuryApprovalsStorageV1020 {
    get(): Promise<number[]>
}

export class TreasuryProposalsStorage extends StorageBase {
    protected getPrefix() {
        return 'Treasury'
    }

    protected getName() {
        return 'Proposals'
    }

    /**
     *  Proposals that have been made.
     */
    get isV1020(): boolean {
        return this.getTypeHash() === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
    }

    /**
     *  Proposals that have been made.
     */
    get asV1020(): TreasuryProposalsStorageV1020 {
        assert(this.isV1020)
        return this as any
    }
}

/**
 *  Proposals that have been made.
 */
export interface TreasuryProposalsStorageV1020 {
    get(key: number): Promise<(v1020.TreasuryProposal | undefined)>
    getAll(): Promise<v1020.TreasuryProposal[]>
    getMany(keys: number[]): Promise<(v1020.TreasuryProposal | undefined)[]>
}
