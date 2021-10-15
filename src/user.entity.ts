import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;
    
    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    mobile_no: Number;

    @Column()
    user_type: string;

    @Column({  type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    // @Column({unique:true})
    // profile: Number
}
