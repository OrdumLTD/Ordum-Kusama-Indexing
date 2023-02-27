import assert from 'assert'
import {Chain, ChainContext, CallContext, Call, Result, Option} from './support'
import * as v1020 from './v1020'
import * as v2028 from './v2028'
import * as v9111 from './v9111'
import * as v9320 from './v9320'
import * as v9370 from './v9370'

export class BalancesTransferKeepAliveCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Balances.transfer_keep_alive')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === '5a96e49eaf0745110a2342c53e5619233745028a575c67865c4ad4921e77634b'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get asV1020(): {dest: v1020.LookupSource, value: bigint} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get isV1050(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'cf5bb376709277883598390b3462e93b0f3c383df391c0649728c965e8da82fd'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     */
    get asV1050(): {dest: Uint8Array, value: bigint} {
        assert(this.isV1050)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get isV2028(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'c3f0f475940fc4bef49b298f76ba345680f20fc48d5899b4678314a07e2ce090'
    }

    /**
     *  Same as the [`transfer`] call, but with a check that the transfer will not kill the
     *  origin account.
     * 
     *  99% of the time you want [`transfer`] instead.
     * 
     *  [`transfer`]: struct.Module.html#method.transfer
     *  # <weight>
     *  - Cheaper than transfer because account cannot be killed.
     *  - Base Weight: 51.4 µs
     *  - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     *  #</weight>
     */
    get asV2028(): {dest: v2028.LookupSource, value: bigint} {
        assert(this.isV2028)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get isV9111(): boolean {
        return this._chain.getCallHash('Balances.transfer_keep_alive') === 'fc85bea9d0d171982f66e8a55667d58dc9a1612bcafe84309942bf47e23e3094'
    }

    /**
     * Same as the [`transfer`] call, but with a check that the transfer will not kill the
     * origin account.
     * 
     * 99% of the time you want [`transfer`] instead.
     * 
     * [`transfer`]: struct.Pallet.html#method.transfer
     * # <weight>
     * - Cheaper than transfer because account cannot be killed.
     * - Base Weight: 51.4 µs
     * - DB Weight: 1 Read and 1 Write to dest (sender is in overlay already)
     * #</weight>
     */
    get asV9111(): {dest: v9111.MultiAddress, value: bigint} {
        assert(this.isV9111)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageNotePreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.note_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get isV9160(): boolean {
        return this._chain.getCallHash('Preimage.note_preimage') === 'fb6f9f7fd683160ab20dcde42ca8f757bc13845dc544f497e534fcf19c270a46'
    }

    /**
     * Register a preimage on-chain.
     * 
     * If the preimage was previously requested, no fees or deposits are taken for providing
     * the preimage. Otherwise, a deposit is taken proportional to the size of the preimage.
     */
    get asV9160(): {bytes: Uint8Array} {
        assert(this.isV9160)
        return this._chain.decodeCall(this.call)
    }
}

export class PreimageRequestPreimageCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Preimage.request_preimage')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get isV9160(): boolean {
        return this._chain.getCallHash('Preimage.request_preimage') === '19b8576fc9fe9553b0b5ad154324ccae0d0d43fdccbdffddf2bb6066a9b37b5c'
    }

    /**
     * Request a preimage be uploaded to the chain without paying any fees or deposits.
     * 
     * If the preimage requests has already been provided on-chain, we unreserve any deposit
     * a user may have paid, and take the control of the preimage out of their hands.
     */
    get asV9160(): {hash: Uint8Array} {
        assert(this.isV9160)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaCancelCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.cancel')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an ongoing referendum.
     * 
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Cancelled`.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('Referenda.cancel') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Cancel an ongoing referendum.
     * 
     * - `origin`: must be the `CancelOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Cancelled`.
     */
    get asV9320(): {index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaKillCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.kill')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Cancel an ongoing referendum and slash the deposits.
     * 
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Killed` and `DepositSlashed`.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('Referenda.kill') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Cancel an ongoing referendum and slash the deposits.
     * 
     * - `origin`: must be the `KillOrigin`.
     * - `index`: The index of the referendum to be cancelled.
     * 
     * Emits `Killed` and `DepositSlashed`.
     */
    get asV9320(): {index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaPlaceDecisionDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.place_decision_deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Post the Decision Deposit for a referendum.
     * 
     * - `origin`: must be `Signed` and the account must have funds available for the
     *   referendum's track's Decision Deposit.
     * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
     *   posted.
     * 
     * Emits `DecisionDepositPlaced`.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('Referenda.place_decision_deposit') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Post the Decision Deposit for a referendum.
     * 
     * - `origin`: must be `Signed` and the account must have funds available for the
     *   referendum's track's Decision Deposit.
     * - `index`: The index of the submitted referendum whose Decision Deposit is yet to be
     *   posted.
     * 
     * Emits `DecisionDepositPlaced`.
     */
    get asV9320(): {index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaRefundDecisionDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.refund_decision_deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     * 
     * Emits `DecisionDepositRefunded`.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('Referenda.refund_decision_deposit') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Refund the Decision Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Decision Deposit has not yet been
     *   refunded.
     * 
     * Emits `DecisionDepositRefunded`.
     */
    get asV9320(): {index: number} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaRefundSubmissionDepositCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.refund_submission_deposit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     * 
     * Emits `SubmissionDepositRefunded`.
     */
    get isV9350(): boolean {
        return this._chain.getCallHash('Referenda.refund_submission_deposit') === '25a99cc820e15400356f62165725d9d84847d859e62ca1e5fd6eb340dc5c217e'
    }

    /**
     * Refund the Submission Deposit for a closed referendum back to the depositor.
     * 
     * - `origin`: must be `Signed` or `Root`.
     * - `index`: The index of a closed referendum whose Submission Deposit has not yet been
     *   refunded.
     * 
     * Emits `SubmissionDepositRefunded`.
     */
    get asV9350(): {index: number} {
        assert(this.isV9350)
        return this._chain.decodeCall(this.call)
    }
}

export class ReferendaSubmitCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Referenda.submit')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    get isV9320(): boolean {
        return this._chain.getCallHash('Referenda.submit') === '6973d34a693667744def0a5715cbdd4f9e5f021d58a5384675436ddb19fbb30d'
    }

    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    get asV9320(): {proposalOrigin: v9320.OriginCaller, proposal: v9320.Bounded, enactmentMoment: v9320.DispatchTime} {
        assert(this.isV9320)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    get isV9370(): boolean {
        return this._chain.getCallHash('Referenda.submit') === '864072fcea84d418733365bbf1c6b2afb718972174993b29cfec79274651ab29'
    }

    /**
     * Propose a referendum on a privileged action.
     * 
     * - `origin`: must be `SubmitOrigin` and the account must have `SubmissionDeposit` funds
     *   available.
     * - `proposal_origin`: The origin from which the proposal should be executed.
     * - `proposal`: The proposal.
     * - `enactment_moment`: The moment that the proposal should be enacted.
     * 
     * Emits `Submitted`.
     */
    get asV9370(): {proposalOrigin: v9370.OriginCaller, proposal: v9370.Bounded, enactmentMoment: v9370.DispatchTime} {
        assert(this.isV9370)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryApproveProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.approve_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Treasury.approve_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Approve a proposal. At a later time, the proposal will be allocated to the beneficiary
     *  and the original deposit will be returned.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change.
     *  # </weight>
     */
    get asV1020(): {proposalId: number} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryProposeSpendCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.propose_spend')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === '716689a9bf600e2a2fed633501a80e9ae7082f3d19352663230c0a56fa8652c3'
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get asV1020(): {value: bigint, beneficiary: v1020.LookupSource} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get isV1050(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === '98e9af32f46010396e58ac70ce7c017f7e95d81b05c03d5e5aeb94ce27732909'
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB change, one extra DB entry.
     *  # </weight>
     */
    get asV1050(): {value: bigint, beneficiary: Uint8Array} {
        assert(this.isV1050)
        return this._chain.decodeCall(this.call)
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    get isV2028(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === 'c9f0fb5ad91e84a77c5f948f4140d239e238788ae3191c594dc1e6592472d5a7'
    }

    /**
     *  Put forward a suggestion for spending. A deposit proportional to the value
     *  is reserved and slashed if the proposal is rejected. It is returned once the
     *  proposal is awarded.
     * 
     *  # <weight>
     *  - Complexity: O(1)
     *  - DbReads: `ProposalCount`, `origin account`
     *  - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     *  # </weight>
     */
    get asV2028(): {value: bigint, beneficiary: v2028.LookupSource} {
        assert(this.isV2028)
        return this._chain.decodeCall(this.call)
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get isV9111(): boolean {
        return this._chain.getCallHash('Treasury.propose_spend') === 'ffef9f31e8ae5085e7c0a55a685daef52218f0bf7083015ac904dafceedf09ee'
    }

    /**
     * Put forward a suggestion for spending. A deposit proportional to the value
     * is reserved and slashed if the proposal is rejected. It is returned once the
     * proposal is awarded.
     * 
     * # <weight>
     * - Complexity: O(1)
     * - DbReads: `ProposalCount`, `origin account`
     * - DbWrites: `ProposalCount`, `Proposals`, `origin account`
     * # </weight>
     */
    get asV9111(): {value: bigint, beneficiary: v9111.MultiAddress} {
        assert(this.isV9111)
        return this._chain.decodeCall(this.call)
    }
}

export class TreasuryRejectProposalCall {
    private readonly _chain: Chain
    private readonly call: Call

    constructor(ctx: CallContext)
    constructor(ctx: ChainContext, call: Call)
    constructor(ctx: CallContext, call?: Call) {
        call = call || ctx.call
        assert(call.name === 'Treasury.reject_proposal')
        this._chain = ctx._chain
        this.call = call
    }

    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB clear.
     *  # </weight>
     */
    get isV1020(): boolean {
        return this._chain.getCallHash('Treasury.reject_proposal') === 'd31c3c178e65331a6ccd6f8dca07268f945f39b38e51421afd1c9e1f5bc0f6c8'
    }

    /**
     *  Reject a proposed spend. The original deposit will be slashed.
     * 
     *  # <weight>
     *  - O(1).
     *  - Limited storage reads.
     *  - One DB clear.
     *  # </weight>
     */
    get asV1020(): {proposalId: number} {
        assert(this.isV1020)
        return this._chain.decodeCall(this.call)
    }
}
