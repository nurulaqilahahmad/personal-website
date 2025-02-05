const { gql, default: request } = require("graphql-request")

const MASTER_URL='https://ap-south-1.cdn.hygraph.com/v2/'+process.env.PUBLIC_MASTER_URL_KEY+'/master'

const getEmploymentHistory = async() => {
    const query = gql `
    query EmploymentHistory {
        employmentHistories {
          id
          position
          companyName
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

export default {
    getEmploymentHistory
}