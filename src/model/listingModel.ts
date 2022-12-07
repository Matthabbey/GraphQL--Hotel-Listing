import mongoose, { Schema } from "mongoose";

export interface ListingType{
    _id: string,
    title: string,
    image: string,
    address: string,
    prcie: number,
    numsOfBeds: number,
    numsOfBaths: number,
    rating: number
}

const ListingSchema = new Schema({
    title: {type: String, required: true},
    image:  {type: String, required: true},
    address:  {type: String},
    prcie:  {type: Number},
    numsOfBeds: {type: Number},
    numsOfBaths: {type: Number},
    rating: {type: Number},
},
{timestamps: true}
)

export const Listing = mongoose.model<ListingType>("Listing", ListingSchema)