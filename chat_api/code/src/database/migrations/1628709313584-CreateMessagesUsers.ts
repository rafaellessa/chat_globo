import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

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
            name: 'message_id',
            type: 'varchar',
            generationStrategy: 'uuid'
          },
          {
            name: 'user_id',
            type: 'varchar',
            generationStrategy: 'uuid'
          }
        ]
      })
    )

    await queryRunner.createForeignKey("message_users", new TableForeignKey({
      columnNames: ["user_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "CASCADE"
    }))

    await queryRunner.createForeignKey("message_users", new TableForeignKey({
      columnNames: ["message_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "messages",
      onDelete: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message_users')
  }
}
