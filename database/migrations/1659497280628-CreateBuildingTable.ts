import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateBuildingTable1659497280628 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "building",
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
                    name: "siteId",
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

        await queryRunner.createForeignKey('building', new TableForeignKey({
            columnNames: ["siteId"],
            referencedColumnNames: ["id"],
            referencedTableName: "site",
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("building")
        const foreignKey = table.foreignKeys.find(
            (fk) => fk.columnNames.indexOf("siteId") !== -1,
        )
        await queryRunner.dropForeignKey("building", foreignKey)
        await queryRunner.dropTable("building", true)
    }

}
