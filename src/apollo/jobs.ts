import { gql } from '@apollo/client'

export const GET_JOBS = gql`
  query getJobList($skip: Int, $limit: Int) {
    getJobList(paginationOptions: { limit: $limit, skip: $skip }) {
      jobs {
        applicantsCount
        employmentType {
          id
          translation
          name
        }
        company {
          id
          name
        }
        hasReferral
        id
        industries
        isUN
        jobCategories {
          id
          name
        }
        location {
          city
          countryObject {
            country
            engTrans
            id
            rusTrans
          }
          state
        }
        openUntil
        postedAt
        salary {
          avg
          currency
          max
          min
        }
        seniority {
          id
          name
          translation
        }
        title
        viewCount
      }
      meta {
        currentPage
        hasNextPage
        hasPrevPage
        nextPage
        prevPage
        totalItems
        totalPages
      }
    }
  }
`
