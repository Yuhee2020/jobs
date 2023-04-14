export type JobType = {
  applicantsCount: number
  employmentType: {
    id: string
    translation: string
    name: string
    __typename: string
  }
  company: {
    id: string
    name: string
    __typename: string
  }
  hasReferral: boolean
  id: string
  industries: string[]
  isUN: boolean
  jobCategories: {
    id: string
    name: string
    __typename: string
  }[]
  location: {
    city: string
    countryObject: {
      country: string
      engTrans: string
      id: string
      rusTrans: string
      __typename: string
    }
    state?: any
    __typename: string
  }
  openUntil: string
  postedAt: string
  salary?: {
    avg: number
    currency: string
    max: number
    min: number
  }
  seniority: {
    id: string
    name: string
    translation?: any
    __typename: string
  }
  title: string
  viewCount: number
  __typename: string
}

export type JobsListType = {
  jobs: JobType[]
  meta: {
    currentPage: number
    hasNextPage: boolean
    hasPrevPage: boolean
    nextPage: number
    prevPage: number
    totalItems: number
    totalPages: number
    __typename: string
  }
  __typename: string
}
