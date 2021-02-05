import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fornecedores')
export default class Fornecedores {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nomeFornecedor: string;

    @Column()
    telefoneFornecedor: number;

    @Column()
    emailFornecedor: string;
}