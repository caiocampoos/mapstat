import mongoose from "mongoose";

//** polygon for a place in the map minimum of 3 points*//
export type IPlace = {
  name: string;
  coordinates: [number, number][];
};

export const PlaceSchema = new mongoose.Schema<IPlace>(
  {
    name: {
      type: String,
      description: "place name",
      index: true,
    },
    coordinates: {
      type: [[Number, Number]],
      description: "coordenates for the place polygon",
    },
  },
  {
    _id: false,
  },
);
