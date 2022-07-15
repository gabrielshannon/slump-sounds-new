// https://youtu.be/9KGuI0UmpMw?t=537

import { useQuery } from "@apollo/client";

import gql from "graphql-tag";
import Display from "./Display";
import "./Items.css";

const GET_ALL_MEDIA = gql`
  {
    slumpMedias(first: 300) {
      edges {
        node {
          slumpMeta {
            title
            image {
              mediaItemUrl
            }
            audio {
              mediaItemUrl
            }
            items {
              itemtitle
              itemaudio {
                mediaItemUrl
              }
              itemurl
            }
            projectDescription
            mediastreamurl
          }
        }
      }
    }
  }
`;

function Items() {
  const { loading, error, data } = useQuery(GET_ALL_MEDIA);

  if (loading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <h1>Loading..</h1>;
  }

  const {
    slumpMedias: { edges },
  } = data;

  const slmpMedia = edges.map((item) => item.node.slumpMeta);

  // console.log(slmpMedia);

  return <Display objects={slmpMedia}></Display>;
}

export default Items;
