export type BasicResponse = {
    message: string 
}

export type ErrorResponse = {
    error: string,
    message: string
}

export type GoodbyeResponse = {
    message: string,
    date: string | number
}