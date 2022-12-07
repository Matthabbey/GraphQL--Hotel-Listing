"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const listingModel_1 = require("../../model/listingModel");
const ListingResolver = {
    Query: {
        allListing: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const listing = yield listingModel_1.Listing.find();
                return listing;
            }
            catch (error) {
                console.log(error);
            }
        })
    },
    Mutation: {
        createListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const newListing = {
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                };
                const listings = yield listingModel_1.Listing.create(newListing);
                if (listings) {
                    return newListing;
                }
            }
            catch (error) {
                console.log(error);
            }
        }),
        updateListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const id = args.input.id;
                const updateListing = {
                    id: args.input.id,
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    numsOfBeds: args.input.numsOfBeds,
                    numsOfBaths: args.input.numsOfBaths,
                    rating: args.input.rating
                };
                const newUpdate = yield listingModel_1.Listing.findByIdAndUpdate(id, updateListing, { new: true });
                if (newUpdate) {
                    return newUpdate;
                }
            }
            catch (error) {
            }
        }),
        deleteListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
            }
            catch (error) {
            }
        })
    }
};
exports.default = ListingResolver;
