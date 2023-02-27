import {lookupArchive} from "@subsquid/archive-registry"
import * as ss58 from "@subsquid/ss58"
import {BatchContext, BatchProcessorItem, SubstrateBatchProcessor} from "@subsquid/substrate-processor"
import {Store, TypeormDatabase} from "@subsquid/typeorm-store"
import {In} from "typeorm"
import {AccountProfile, ProposalProfile, ProposalStatus, ReferendaTrack} from "./model"
import 
{
    BalancesTransferEvent,

    TreasuryAwardedEvent,
    TreasuryProposedEvent,TreasuryRejectedEvent,
    TreasurySpendApprovedEvent,TreasurySpendingEvent,

    ReferendaApprovedEvent,ReferendaCancelledEvent,
    ReferendaConfirmedEvent,ReferendaDecisionDepositPlacedEvent,
    ReferendaDecisionStartedEvent,ReferendaRejectedEvent,
    ReferendaSubmissionDepositRefundedEvent,
    ReferendaSubmittedEvent,

    PreimageClearedEvent,PreimageNotedEvent,
    PreimageRequestedEvent

} from "./types/events"

import {
    BalancesTransferKeepAliveCall,

    TreasuryApproveProposalCall,TreasuryProposeSpendCall,
    TreasuryRejectProposalCall,

    ReferendaCancelCall,ReferendaKillCall,
    ReferendaPlaceDecisionDepositCall,ReferendaRefundDecisionDepositCall,
    ReferendaRefundSubmissionDepositCall,ReferendaSubmitCall,

    PreimageNotePreimageCall,PreimageRequestPreimageCall
} from "./types/calls"

import {
    BalancesAccountStorage,

    TreasuryApprovalsStorage,TreasuryProposalsStorage,

    ReferendaReferendumInfoForStorage,ReferendaTrackQueueStorage,
    
    PreimagePreimageForStorage,PreimageStatusForStorage
} from "./types/storage"


const processor = new SubstrateBatchProcessor()
    .setDataSource({
        // Lookup archive by the network name in the Subsquid registry
        //archive: lookupArchive("kusama", {release: "FireSquid"})

        // Use archive created by archive/docker-compose.yml
        archive: lookupArchive('kusama', {release: 'FireSquid'} ),
        chain: "wss://rpc.kusama.io"
    }).setBlockRange({ from: 16000000 })
    .addEvent('Balances.Transfer', { 
        data: {
            event: {
                args: true,
                extrinsic: {
                    hash: true,
                    fee: true
                }
            }
        }
    } as const)


type Item = BatchProcessorItem<typeof processor>
type Ctx = BatchContext<Store, Item>


processor.run(new TypeormDatabase(), async ctx => {
    

    //await ctx.store.save(Array.from(accounts.values()))
    //await ctx.store.insert(transfers)
})

// To do 
// 1. Functions and interfaces for all Events
// 2. Fetching storage items in pallet balances, referenda, preimage and Treasury
// All accounts should be sorted

// Useful links: https://docs.subsquid.io/basics/squid-processor/
// Useful link: https://docs.subsquid.io/basics/processor-context/







