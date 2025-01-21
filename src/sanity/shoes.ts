import { Rule } from "@sanity/types";

export default {
  name: "shoes",
  title: "Shoes",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: Rule) => Rule.required().max(500),
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
  ],
};
