import React, {memo} from 'react';
import {Button, Card, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {JobType} from "../../types";

type PropsType={
  job:JobType
}

export const JobCard = memo(({job}:PropsType) => {
  return (
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
    </Card>
  );
});

