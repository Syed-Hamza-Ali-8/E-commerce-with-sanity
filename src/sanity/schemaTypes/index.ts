import { type SchemaTypeDefinition } from "sanity";
import blogs from "../blogs";
import bats from "../bats";
import balls from "../balls";
import protection from "../protection";
import shoes from "../shoes";
import accessories from "../accessories";
import product from "../product";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogs, product, bats, balls, protection, shoes, accessories],
};
