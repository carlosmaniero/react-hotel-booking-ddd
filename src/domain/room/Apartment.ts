export interface IApartment {
    readonly number: number
}

export const createApartment = (apartmentNumber: number): IApartment =>
 ({number: apartmentNumber})

export const apartmentRange = (firstApartment: number, finalApartment: number): IApartment[] =>
    new Array(finalApartment - firstApartment + 1)
        .fill(firstApartment)
        .map((_, index) => createApartment(firstApartment + index))