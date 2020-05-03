export type Flower = {
  name: string
  variants: FlowerVariants[]
}

export type FlowerVariants = {
  color: string
  image: string
  parents?: string[]
  goldenTool?: boolean
}

export const flowers: Flower[] = [
  {
    name: "Lillies",
    variants: [
      {
        color: "red",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange",
        image: "",
        parents: ["red", "yellow"],
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "pink",
        image: "",
        parents: ["red", "white"],
      },
      {
        color: "black",
        image: "",
        parents: ["red", "red"],
      },
    ],
  },
  {
    name: "Roses",
    variants: [
      {
        color: "red1",
        image: "",
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "pink",
        image: "",
        parents: ["red1", "white"],
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange",
        image: "",
        parents: ["red1", "yellow"],
      },
      {
        color: "black",
        image: "",
        parents: ["red1", "red1"],
      },
      {
        color: "dark-red",
        image: "",
        parents: ["white", "white"],
      },
      {
        color: "red2",
        image: "",
        parents: ["white", "orange"],
      },
      {
        color: "blue",
        image: "",
        parents: ["red2", "red2"],
      },
      {
        color: "gold",
        image: "",
        parents: ["black"],
        goldenTool: true,
      },
    ],
  },
  {
    name: "Cosmos",
    variants: [
      {
        color: "red",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange",
        image: "",
        parents: ["red", "yellow"],
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "pink",
        image: "",
        parents: ["red", "white"],
      },
      {
        color: "black",
        image: "",
        parents: ["orange", "orange"],
      },
    ],
  },
  {
    name: "Hyacinths",
    variants: [
      {
        color: "red",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange",
        image: "",
        parents: ["red", "yellow"],
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "pink",
        image: "",
        parents: ["red", "white"],
      },
      {
        color: "blue",
        image: "",
        parents: ["white", "white"],
      },
      {
        color: "purple",
        image: "",
        parents: ["orange", "orange"],
      },
    ],
  },
  {
    name: "Mums",
    variants: [
      {
        color: "yellow",
        image: "",
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "red",
        image: "",
      },
      {
        color: "pink",
        image: "",
        parents: ["white", "red"],
      },
      {
        color: "purple",
        image: "",
        parents: ["white", "white"],
      },
      {
        color: "green",
        image: "",
        parents: ["purple", "purple"],
      },
    ],
  },
  {
    name: "Tulips",
    variants: [
      {
        color: "red",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange",
        image: "",
        parents: ["red", "yellow"],
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "black",
        image: "",
        parents: ["red", "red"],
      },
      {
        color: "purple",
        image: "",
        parents: ["orange", "orange"],
      },
    ],
  },
  {
    name: "Windflower",
    variants: [
      {
        color: "red",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "pink",
        image: "",
      },
      {
        color: "blue",
        image: "",
        parents: ["white", "white"],
      },
      {
        color: "purple",
        image: "",
        parents: ["blue", "blue"],
      },
    ],
  },
  {
    name: "Pansies",
    variants: [
      {
        color: "red1",
        image: "",
      },
      {
        color: "yellow",
        image: "",
      },
      {
        color: "orange1",
        image: "",
        parents: ["red1", "yellow"],
      },
      {
        color: "white",
        image: "",
      },
      {
        color: "blue",
        image: "",
        parents: ["white", "white"],
      },
      {
        color: "red2",
        image: "",
        parents: ["red1", "blue"],
      },
      {
        color: "orange2",
        image: "",
        parents: ["orange1", "blue"],
      },
      {
        color: "purple",
        image: "",
        parents: ["red2", "red2"],
      },
      {
        color: "purple",
        image: "",
        parents: ["orange2", "orange2"],
      },
    ],
  },
]
