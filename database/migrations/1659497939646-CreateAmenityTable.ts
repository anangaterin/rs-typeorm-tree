import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAmenityTable1659497939646 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "amenity",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "floorId",
                    type: "uuid",
                    isNullable: true
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                },
            ],
        }), true)

        await queryRunner.createForeignKey('amenity', new TableForeignKey({
            columnNames: ["floorId"],
            referencedColumnNames: ["id"],
            referencedTableName: "floor",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("amenity")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("floorId") !== -1,
        )
        await queryRunner.dropForeignKey("amenity", foreignKey)
        await queryRunner.dropTable("amenity", true)
    }

}
