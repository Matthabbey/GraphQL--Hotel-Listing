export interface Listing{
    title: string,
    image: string,
    address: string,
    price: number,
    numsOfBeds: number,
    numsOfBaths: number,
    rating: number
}
export interface CreateListing{
    input: Listing
}

export interface ArgForUpdateListing{
    id: string,
    title: string,
    image: string,
    address: string,
    price: number,
    numsOfBeds: number,
    numsOfBaths: number,
    rating: number
}

export interface UpdateListing {
    input: ArgForUpdateListing
}

export interface ArgForDeleteListing{
    id: string,
}

export interface DeleteListing{
    input: ArgForDeleteListing
}