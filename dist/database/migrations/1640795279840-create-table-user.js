"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _typeorm = require('typeorm');

 class CreateTableUser1640583584865  {

     async up(queryRunner) {
        await queryRunner.createTable(new (0, _typeorm.Table)({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'uuid',
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true,
                },
                {
                    name: 'updatedAt',
                    type: 'timestamp',
                    default: 'now()',
                    isNullable: true,
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                }
            ]
        }));
    }

     async down(queryRunner) {
        await queryRunner.dropTable('user');
    }
} exports.CreateTableUser1640583584865 = CreateTableUser1640583584865;