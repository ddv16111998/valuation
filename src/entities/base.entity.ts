// gkc_hash_code : 01HCXMP1V37PYTYHGBX21CJ029
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { EntityConstant } from '../constants/entity.constant';

export class BaseEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int', unsigned: true })
  id: number;

  @Column({ name: 'creator_id', type: 'int', nullable: true, unsigned: true })
  creatorId: number;

  @Column({ name: 'updater_id', type: 'int', nullable: true, unsigned: true })
  updaterId: number;

  @CreateDateColumn({
    name: 'created_at',
    type: 'datetime',
    precision: EntityConstant.TimePrecision,
    default: () => 'NOW()',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'datetime',
    precision: EntityConstant.TimePrecision,
    onUpdate: 'NOW()',
    default: () => 'NOW()',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'datetime',
    precision: EntityConstant.TimePrecision,
  })
  deletedAt: Date;
}
