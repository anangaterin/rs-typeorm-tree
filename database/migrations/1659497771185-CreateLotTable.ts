import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateLotTable1659497771185 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "lot",
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

        await queryRunner.createForeignKey('lot', new TableForeignKey({
            columnNames: ["floorId"],
            referencedColumnNames: ["id"],
            referencedTableName: "floor",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("lot")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("floorId") !== -1,
        )
        await queryRunner.dropForeignKey("lot", foreignKey)
        await queryRunner.dropTable("lot", true)
    }

}
