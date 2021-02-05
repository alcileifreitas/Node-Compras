import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createFornecedor1607435815535 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table ({
            name: 'fornecedores',
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
                    name: 'nomeFornecedor',
                    type: 'varchar',
                },
                {
                    name: 'telefoneFornecedor',
                    type: 'integer',
                },
                {
                    name: 'emailFornecedor',
                    type: 'varchar',
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('fornecedores');
    }

}
