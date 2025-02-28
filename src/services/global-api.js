const { gql, default: request } = require("graphql-request")

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/v2/cm5cam22v014w07w6z38eok1h/master'

const getEmploymentHistory = async () => {
  const query = gql`
    query EmploymentHistory {
      employmentHistories {
        id
        position
        companyName
        link
        startDate
        endDate
        workDescription {
          id
          explanation
        }
      }
    }
    `

  const result = await request(MASTER_URL, query)

  return result
}

const getEducationalBackground = async () => {
  const query = gql`
    query EducationalBackground {
      educationalBackgrounds {
        id
        institutionName
        courseName
        institutionLogo {
          id
          url
          fileName
        }
        startDate
        endDate
        link
      }
    }
    `

  const result = await request(MASTER_URL, query)

  return result
}

const getCertification = async () => {
  const query = gql`
    query Certification {
      certifications {
        id
        name
        organization
        date
        badge {
          id
          fileName
          url
        }
      }
    }
    `

  const result = await request(MASTER_URL, query)

  return result
}

const getProjectCategory = async () => {
  const query = gql`
    query ProjectCategory {
      projectCategories {
        id
        name
        description
        icon {
          html
        }
        subSlug
      }
    }
    `

  const result = await request(MASTER_URL, query)

  return result
}

const getProject = async () => {
  const query = gql`
    query Project {
      projects {
        id
        title
        image {
          url
          id
        }
        projectCategory {
          id
          name
        }
        description
        link
        slug
        task {
          id
          explanation
          file {
            id
            url
            fileName
          }
        }
        skill {
          id
          name
        }
        dateCreated
      }
    }
    `

  const result = await request(MASTER_URL, query)

  return result
}

export default {
  getEmploymentHistory,
  getEducationalBackground,
  getCertification,
  getProjectCategory,
  getProject
}