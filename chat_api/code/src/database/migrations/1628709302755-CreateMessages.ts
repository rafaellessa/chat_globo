import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMessages1628709302755 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'messages',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'text',
            type: 'varchar(300)'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('messages')
  }
}
