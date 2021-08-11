import { MigrationInterface, QueryRunner, Table } from 'typeorm'

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
            name: 'id_message',
            type: 'int'
          },
          {
            name: 'id_room',
            type: 'int'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('message_rooms')
  }
}
