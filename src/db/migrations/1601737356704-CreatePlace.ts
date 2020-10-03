import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePlace1601737356704 implements MigrationInterface {
  private table = new Table({
    name: 'places',
    columns: [
      {
        name: 'id',
        type: 'integer',
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment"
      },
      {
        name: 'name',
        type: 'varchar',
        isNullable: false,
        length: '255'
      },
      {
        name: 'address',
        type: 'varchar',
        isNullable: false,
        length: '255'
      },
      {
        name: 'created_at',
        type: 'timestampz',
        isNullable: false,
        default: 'now()'
      },
      {
        name: 'updated_at',
        type: 'timestampz',
        isNullable: false,
        default: 'now()'
      }
    ]
  })

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
