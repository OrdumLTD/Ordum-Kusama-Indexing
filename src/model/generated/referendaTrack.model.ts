import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"

@Entity_()
export class ReferendaTrack {
    constructor(props?: Partial<ReferendaTrack>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    track!: bigint | undefined | null

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
    amount!: bigint | undefined | null

    @Column_("int4", {nullable: true})
    decisionPeriod!: number | undefined | null

    @Column_("int4", {nullable: true})
    confirmationPeriod!: number | undefined | null
}
