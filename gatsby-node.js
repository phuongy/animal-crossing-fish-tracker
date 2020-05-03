exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const fishQueryResults = await graphql(
    `
      query fishDataQuery {
        allFishJson {
          edges {
            node {
              slug
              availability
              image
              location
            }
          }
        }
        allFile(filter: { relativeDirectory: { eq: "fish" } }) {
          edges {
            node {
              name
              publicURL
            }
          }
        }
      }
    `,
    { limit: 1000 }
  )

  if (fishQueryResults.errors) {
    throw fishQueryResults.errors
  }

  const imageData = fishQueryResults.data.allFile.edges.map(x => x.node)
  const fishData = fishQueryResults.data.allFishJson.edges.map(fish => {
    const image = imageData.find(x => x.name === fish.node.slug)

    return {
      ...fish.node,
      image: image != null ? image.publicURL : "",
    }
  })

  const fishListingTemplate = `${__dirname}/src/templates/fish-listing.tsx`

  createPage({
    path: `/fish`,
    component: fishListingTemplate,
    context: {
      data: fishData,
    },
  })
}
