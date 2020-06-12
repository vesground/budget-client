import gql from 'graphql-tag';

export default gql`
query getProfile($id: String!) {
  getProfile(id: $id) {
    email
    first_name
    last_name
    photo_url
  }
}

`
