export interface ICommand {
    apply(...args: any): void;
}