import { Column, PrimaryColumn } from 'typeorm';

export class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column('text', {
    unique: true,
  })
  title: string;
}
