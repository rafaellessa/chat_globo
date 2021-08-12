import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateMessagesRooms1628709321247 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'message_rooms',
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
            name: 'room_id',
            type: 'varchar',
            generationStrategy: 'uuid'
          }
        ]
      })
    )

    await queryRunner.createForeignKey("message_rooms", new TableForeignKey({
      columnNames: ["message_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "messages",
      onDelete: "CASCADE"
    }))

    await queryRunner.createForeignKey("message_rooms", new TableForeignKey({
      columnNames: ["room_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "rooms",
      onDelete: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message_rooms')
  }
}
