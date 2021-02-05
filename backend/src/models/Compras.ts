import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('compras')
export default class Compras {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    dataEmissao: string;

    @Column()
    quantidade: number;

    @Column()
    valorUnitario: number;
}