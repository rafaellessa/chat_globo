import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateUsersRooms1628709333054 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_rooms',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'user_id',
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

    await queryRunner.createForeignKey("user_rooms", new TableForeignKey({
      columnNames: ["user_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "CASCADE"
    }))

    await queryRunner.createForeignKey("user_rooms", new TableForeignKey({
      columnNames: ["room_id"],
      referencedColumnNames: ["id"],
      referencedTableName: "rooms",
      onDelete: "CASCADE"
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.dropTable('user_rooms')
  }
}
