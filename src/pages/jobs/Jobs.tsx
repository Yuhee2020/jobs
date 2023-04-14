import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import {JobCard} from "../../components/jobCard/JobCard";
import {useQuery} from "@apollo/client";
import {GET_JOBS} from "../../apollo/jobs";
import {JOBS_LOAD_LIMIT} from "../../constants";
import {BackDrop} from "../../components/backdrop/BackDrop";
import {JobType} from "../../types";
import s from "./Jobs.module.scss"
import {
  Alert,
  AlertTitle,
  CircularProgress,
  LinearProgress,
  Skeleton
} from "@mui/material";

export const Jobs = () => {

  const {loading, error, data, fetchMore} = useQuery(GET_JOBS, {
    variables: {skip: 0, limit: JOBS_LOAD_LIMIT}
  });

  if(error) return  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>
    if (loading) return <CircularProgress color="inherit" />;

  const jobs = data.getJobList.jobs as JobType[]

  const handleJobListScroll = async () => {
    const hasNextPage = data.getJobList.meta.hasNextPage
    hasNextPage && await fetchMore({
      variables: {skip: jobs.length, limit: JOBS_LOAD_LIMIT}
    })

  }

  return (
    <InfiniteScroll
      className={s.jobs}
      dataLength={jobs.length}
      next={handleJobListScroll}
      hasMore={jobs.length < data.getJobList.meta.totalItems}
      loader={<LinearProgress  color="error"/>}
      endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      {jobs.map(job =>
        <JobCard key={job.id} job={job}/>
      )}
    </InfiniteScroll>
  );
};

export default Jobs;