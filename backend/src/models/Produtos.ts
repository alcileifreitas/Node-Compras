import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('produtos')
export default class Produtos {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nomeProduto: string;

    @Column()
    unidadeMedida: string;

    @Column()
    fotoProduto: string;
}