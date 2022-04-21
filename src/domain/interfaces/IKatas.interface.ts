export enum KataLevel {
    BASIC = 'Basic',
    MEDIUM = 'Medium',
    HIGH = 'High'
}
export interface IKatas {
    name: string,
    description: string,
    level: KataLevel,
    intents: number,
    stars: number,
    creator: string, //contendra el ID del usuario
    solution: string,
    participants: string[]
}