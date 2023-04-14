import React from 'react';
import './App.css';
import {useQuery} from "@apollo/client";
import {GET_JOBS} from "./apollo/jobs";
import {JobType} from "./types";
import {Button, Card, Container, Typography} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import InfiniteScroll from "react-infinite-scroll-component";


function App() {

  const {loading, error, data, fetchMore} = useQuery(GET_JOBS, {
    variables: {skip: 0, limit: 100}
  });

  if (loading) return <div>loading</div>;
  const jobs = data.getJobList.jobs as JobType[]
  const handleJobListScroll = async () => {
    const length = jobs.length
    await fetchMore({
      variables: {skip: length + 100, limit: 100}
    })
  }
  return (

    <Container>

      <InfiniteScroll
        dataLength={jobs.length}
        next={handleJobListScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{textAlign: 'center'}}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {jobs.map(job =>

          <Card key={job.id}>
            <Button> Help me</Button>
            <Typography variant="h6">{job.title}</Typography>
            <p><LocationOnIcon/>{job.location.countryObject.rusTrans}</p>
            <p>{job.company.name}</p>
            <p>{job.employmentType && job.employmentType.name}</p>
            <p><CalendarMonthIcon/>{job.postedAt} </p>
            <p><AccessAlarmIcon/>{job.openUntil} </p>
            <p>{job.salary?.currency} {job.salary?.max} - {job.salary?.min}  </p>

            <p>{job.isUN.toString()} </p>

            <div>{job.jobCategories.map(cat => <div key={cat.id}>{cat.name}</div>)}</div>
          </Card>)}
      </InfiniteScroll>
    </Container>

  );
}

export default App;
