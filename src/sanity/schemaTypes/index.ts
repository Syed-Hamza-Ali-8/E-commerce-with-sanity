import { type SchemaTypeDefinition } from "sanity";
import blogs from "../blogs";
import product from "../product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, product],
};
