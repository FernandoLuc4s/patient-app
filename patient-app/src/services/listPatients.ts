import { RestLink } from "apollo-link-rest";
import { gql, useQuery, ApolloClient, InMemoryCache } from "@apollo/client";


const restLink = new RestLink({
  uri: "https://fakestoreapi.com/",
});

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

export default client;

const GET_PATIENTS = gql`
  query {
    users @rest(type: "User", path: "users") {
      id
      name {
        firstname
        lastname
      }
      email
      phone
    }
  }
`;

export const listPatient = () => {
  return useQuery(GET_PATIENTS);
};