export interface ISystem {
    deserialize(fileName: string): Promise<void>;
}