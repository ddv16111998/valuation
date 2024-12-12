import { Column, Entity } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
  })
  email: string;
}
