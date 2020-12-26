export interface ReservationList {
    id?: number
    name: string
    description: string
    rating: number
    favorite: boolean
}

export interface Contact {
    id?: number
    contactName: string
    contactType: string
    phone: string
    birthDate: Date
    text: string
}

export interface ContactType{
    id: number
    type: string
}
