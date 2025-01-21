import { Rule } from "@sanity/types";

export default {
  name: "cricketBall",
  title: "Cricket Ball",
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
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "White", value: "white" },
        ],
      },
    },
  ],
};
