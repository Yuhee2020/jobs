import React, { memo } from 'react'

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Button, Card, Typography } from '@mui/material'
import dayjs from 'dayjs'

import { JobType } from '../../types'

import s from './JobCard.module.scss'

type PropsType = {
  job: JobType
}

export const JobCard = memo(({ job }: PropsType) => {
  const { id, title, company, salary, location, jobCategories, postedAt, openUntil } = job

  return (
    <Card key={id} className={s.jobCard}>
      <div className={s.title}>
        <div>
          <Typography variant="h6">{title}</Typography>
          <div className={s.company}>{company.name}</div>
          {salary ? (
            <p className={s.salary}>
              {salary?.max} - {salary?.min}
              {salary?.currency}
            </p>
          ) : (
            <p className={`${s.salary} ${s.salaryBlur}`}>00000 - 9999USD </p>
          )}
        </div>
        {!salary && (
          <Button className={s.clubButton} variant="contained">
            Для членов клуба
          </Button>
        )}
      </div>

      <div>
        <div className={s.location}>
          <LocationOnIcon />
          {location.countryObject.rusTrans}
        </div>
        {jobCategories.map(cat => (
          <span className={s.categories} key={cat.id}>
            {cat.name}{' '}
          </span>
        ))}
      </div>
      <div className={s.dates}>
        <div className={s.date}>
          <CalendarMonthIcon />
          Опубликованно {dayjs(postedAt).from(dayjs())}
        </div>
        <div className={s.date}>
          <AccessAlarmIcon />
          Закрывается {dayjs().to(openUntil)}
        </div>
      </div>
    </Card>
  )
})
