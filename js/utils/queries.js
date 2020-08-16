import gql from "graphql-tag";

export const GET_PROJECTS = gql`
  query {
    projects {
      code
      name
      end_date
      start_date
    }
  }
`;

export const GET_AREAS = gql`
  query {
    area {
      id
      name
    }
  }
`;

export const ONE_PROJECT_QUERY = gql`
  query($id: String!) {
    projects(where: { code: { _eq: $id } }) {
      code
      name
      description
      end_date
      start_date
      project_areas {
        area {
          id
          name
        }
      }
      user_projects {
        member {
          id
          full_name
        }
      }
    }
  }
`;

// Members

export const GET_MEMBERS = gql`
  query {
    members {
      id
      full_name
    }
  }
`;

export const ONE_MEMBER_QUERY = gql`
  query($id: Int!) {
    members(where: { id: { _eq: $id } }) {
      id
      full_name
      user_projects {
        project {
          code
          name
        }
        start_date
        end_date
      }
    }
  }
`;

export const ONE_AREA_QUERY = gql`
  query($id: Int!) {
    area(where: { id: { _eq: $id } }) {
      id
      name
      project_areas {
        project {
          code
          name
        }
      }
    }
  }
`;
