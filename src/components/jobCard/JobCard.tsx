import React, {memo} from 'react';
import {Button, Card, Typography} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import {JobType} from "../../types";
import s from "./JobCard.module.scss"
import dayjs from "dayjs";


type PropsType = {
  job: JobType
}

export const JobCard = memo(({job}: PropsType) => {
  return (
    <Card key={job.id} className={s.jobCard}>

      <div className={s.title}>
        <div>
          <Typography variant="h6">{job.title}</Typography>
          <div className={s.company}>{job.company.name}</div>
          {job.salary
            ? <p
              className={s.salary}>{job.salary?.max} - {job.salary?.min}{job.salary?.currency}</p>
            : <p className={`${s.salary} ${s.salaryBlur}`}>00000 - 9999USD </p>}
        </div>
        {!job.salary &&
          <Button className={s.clubButton} variant="contained">Для членов клуба</Button>}
      </div>

      <div>
        <div className={s.location}>
          <LocationOnIcon/>{job.location.countryObject.rusTrans}
        </div>
        {job.jobCategories.map(cat => <span className={s.categories}
                                            key={cat.id}>{cat.name} </span>)}
      </div>
      <div className={s.dates}>
        <div className={s.date}>
          <CalendarMonthIcon/>Опубликованно {dayjs(job.postedAt).from(dayjs())}</div>
        <div className={s.date}><AccessAlarmIcon/>Закрывается {dayjs().to(job.openUntil)}
        </div>
      </div>
    </Card>
  );
});

