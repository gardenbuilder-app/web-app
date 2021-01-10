import { gql } from "@apollo/client"

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

export const SIGNOUT_MUTATION = gql`
  mutation SIGNOUT_MUTATION {
    deleteToken {
      deleted
    }
    deleteRefreshToken {
      deleted
    }
  }
`

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    createUser(email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      user {
        id
        email
      }
      token
      errors {
        message
      }
    }
  }
`

export const CREATE_GARDEN_MUTATION = gql`
  mutation CREATE_GARDEN_MUTATION($name: String!) {
    createGarden(name: $name) {
      id
      name
    }
  }
`
