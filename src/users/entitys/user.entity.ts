import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { UsersDto } from '../dtos/users.dto';
import { Address } from './address.entity';
import { Wallet } from './wallet.entity';
import { Cart } from './cart.entity';

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  profile: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  mail: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  constructor(user_data: UsersDto) {
    this.profile = user_data?.profile;

    this.name = user_data?.name;

    this.surname = user_data?.surname;

    this.mail = user_data?.mail;

    this.password = user_data?.password;

    this.admin = user_data?.admin;
  }

  @ManyToMany(() => Address, { cascade: true })
  @JoinTable()
  addresses: Address[];

  @ManyToMany(() => Wallet, { cascade: true })
  @JoinTable()
  wallets: Wallet[];

  @ManyToMany(() => Cart, { cascade: true })
  @JoinTable()
  cart: Cart[];
}