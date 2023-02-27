import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"

@Entity_()
export class ProposalStatus {
    constructor(props?: Partial<ProposalStatus>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("bool", {nullable: true})
    cancelled!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    approved!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    killed!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    confirmed!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    inConfirmation!: boolean | undefined | null

    @Column_("bool", {nullable: true})
    approving!: boolean | undefined | null
}
