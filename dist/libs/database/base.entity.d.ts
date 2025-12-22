export declare abstract class BaseEntityClass {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    createdBy: number | null;
    updatedBy: number | null;
    isRemoved: boolean;
}
