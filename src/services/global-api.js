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

export default {
  getEmploymentHistory
}