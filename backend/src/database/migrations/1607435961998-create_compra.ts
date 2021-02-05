import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createCompra1607435961998 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'compras',
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
                    name: 'dataEmissao',
                    type: 'varchar',
                },
                {
                    name: 'quantidade',
                    type: ' integer'
                },
                {
                    name: 'valorUnitario',
                    type: ' integer'
                }
            ],

    }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('compras')
    }

}