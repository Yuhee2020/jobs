import React from 'react'

import { useQuery } from '@apollo/client'
import { LinearProgress } from '@mui/material'
import InfiniteScroll from 'react-infinite-scroll-component'

import { GET_JOBS } from '../../apollo/jobs'
import { AppSpinner } from '../../components/appSpiner/AppSpinner'
import { EndMessage } from '../../components/endMessage/EndMessage'
import { ErrorAlert } from '../../components/errorAlert/ErrorAlert'
import { JobCard } from '../../components/jobCard/JobCard'
import { JOBS_LOAD_LIMIT } from '../../constants'
import { JobType } from '../../types'

import s from './Jobs.module.scss'

export const Jobs = () => {
  const { loading, error, data, fetchMore } = useQuery(GET_JOBS, {
    variables: { skip: 0, limit: JOBS_LOAD_LIMIT },
  })

  if (loading) return <AppSpinner />
  if (error) return <ErrorAlert />

  const jobs = data.getJobList.jobs as JobType[]

  const handleJobListScroll = async () => {
    const { hasNextPage } = data.getJobList.meta

    hasNextPage &&
      (await fetchMore({
        variables: { skip: jobs.length, limit: JOBS_LOAD_LIMIT },
      }))
  }

  return (
    <InfiniteScroll
      className={s.jobs}
      dataLength={jobs.length}
      next={handleJobListScroll}
      hasMore={jobs.length < data.getJobList.meta.totalItems}
      loader={<LinearProgress color="error" />}
      endMessage={<EndMessage />}
    >
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </InfiniteScroll>
  )
}

export default Jobs
