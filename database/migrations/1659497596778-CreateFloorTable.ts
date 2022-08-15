import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateFloorTable1659497596778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "floor",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                },
                {
                    name: "number",
                    type: "integer",
                },
                {
                    name: "buildingId",
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

        await queryRunner.createForeignKey('floor', new TableForeignKey({
            columnNames: ["buildingId"],
            referencedColumnNames: ["id"],
            referencedTableName: "building",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("building")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("buildingId") !== -1,
        )
        await queryRunner.dropForeignKey("building", foreignKey)
        await queryRunner.dropTable("floor", true)
    }
    

}
