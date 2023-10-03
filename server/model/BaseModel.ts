import { Model } from 'objection';

export class BaseModel extends Model {

    id: number = 0;

    createdAt?: Date;
    updatedAt?: Date;

    $beforeUpdate() {
        this.updatedAt = this.updatedAt ? this.updatedAt : new Date();
    }

    $beforeInsert() {
        this.createdAt = this.createdAt ? this.createdAt : new Date();
    }
}
