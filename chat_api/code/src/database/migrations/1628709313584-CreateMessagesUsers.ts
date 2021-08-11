import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMessagesUsers1628709313584 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'message_users',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'id_message',
            type: 'int'
          },
          {
            name: 'id_user',
            type: 'int'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message_users')
  }
}
