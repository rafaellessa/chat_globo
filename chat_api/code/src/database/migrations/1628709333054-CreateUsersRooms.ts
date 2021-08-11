import { MigrationInterface, QueryRunner, Table } from 'typeorm'

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
            name: 'id_user',
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
  }
}
