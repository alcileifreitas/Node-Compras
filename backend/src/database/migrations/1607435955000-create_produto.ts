import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createProduto1607435955000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'produtos',
            columns: [
                {
                name: 'id',
                type: 'integer',
                unsigned: true,
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
                },
                {
                    name: 'nomeProduto',
                    type: 'varchar',
                },
                {
                    name: 'unidadeMedida',
                    type: 'varchar',
                },
                {
                    name: 'fotoProduto',
                    type: 'text',
                },
            ],

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('produtos')
    }

}