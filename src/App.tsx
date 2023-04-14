import React from 'react';
import './App.css';
import {useQuery} from "@apollo/client";
import {GET_JOBS} from "./apollo/jobs";
import {JobType} from "./types";
import {Container} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import {JOBS_LOAD_LIMIT} from "./constants";
import {BackDrop} from "./components/backdrop/BackDrop";
import {JobCard} from "./components/jobCard/jobCard";


function App() {

  const {loading, error, data, fetchMore} = useQuery(GET_JOBS, {
    variables: {skip: 0, limit: JOBS_LOAD_LIMIT}
  });

  if (loading) return <BackDrop loading={loading}/>;

  const jobs = data.getJobList.jobs as JobType[]

  const handleJobListScroll = async () => {
    const length = jobs.length
    const hasNextPage=data.getJobList.meta.hasNextPage
    hasNextPage && await fetchMore({
      variables: {skip: length, limit: JOBS_LOAD_LIMIT}
    })

  }
  return (
    <Container>
      <InfiniteScroll
        dataLength={data.getJobList.jobs.length}
        next={handleJobListScroll}
        hasMore={data.getJobList.jobs.length<data.getJobList.meta.totalItems}
        loader={<h4>Loading...</h4>}
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
    </Container>

  );
}

export default App;
