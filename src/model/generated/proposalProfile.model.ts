import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ProposalProfile {
    constructor(props?: Partial<ProposalProfile>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amountRequested!: bigint | undefined | null

    @Column_("timestamp with time zone", {nullable: false})
    dateCreated!: Date

    @Column_("text", {nullable: true})
    description!: string | undefined | null

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    preimage!: bigint | undefined | null

    @Column_("text", {nullable: false})
    account!: string
}
