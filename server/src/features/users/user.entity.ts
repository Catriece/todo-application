// table schema
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  firstName: string;

  @Column()
  middleName: string; // Not required

  @Column()
  lastName: string;

  @Column()
  memberStatus: string; // Admin? Regular Member?

  @Column()
  birthday: string; // Not required

  @Column()
  defaultCircle: string;

  @Column()
  allCircles: string;

  @Column({ default: true })
  isActive: boolean;
}
