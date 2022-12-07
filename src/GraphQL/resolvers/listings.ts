import { Listing, ListingType } from '../../model/listingModel'
import { CreateListing, UpdateListing, DeleteListing} from './types'

const ListingResolver = {
    Query: {
        allListing:async () =>{
            try {
                const listing = await Listing.find()
                return listing
            } catch (error) {
                console.log(error)
            }
        }
    },

    Mutation:{

        createListing: async(_: unknown, args: CreateListing)=>{ //_ means root, args means argument. Context is used for authentication and authorisation
            try {
                const newListing = {
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                }
                const listings = await Listing.create(newListing)
                if(listings){
                    return newListing
                }
                }
            catch(error) {
                console.log(error)
            }
        },
        updateListing: async (_: unknown, args: UpdateListing)=>{
            try {
                const id = args.input.id
                const updateListing = {
                    id: args.input.id,
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                }
                const newUpdate = await Listing.findByIdAndUpdate(id, updateListing, {new: true})
                if(newUpdate){
                    return newUpdate
                }
            } catch (error) {
                
            }
        },
        deleteListing: async (_:unknown, args: DeleteListing)=>{
            try {
                
            } catch (error) {
                
            }
        }
    }
}

export default ListingResolver