// "use client";
import React, { useState } from 'react'
import './globals.css'
import Link from 'next/link'
import { Button } from '@ssaitho/react_ts_storybook/Button'
import { TextLink } from "@ssaitho/react_ts_storybook/TextLink";
import { StarIcon } from "@ssaitho/react_ts_storybook/Icon";
import { DatePicker } from "@ssaitho/react_ts_storybook/DatePicker";
import { MultiSelect } from "@ssaitho/react_ts_storybook";

export default function Home() {
  // const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <>
      <h1>home</h1>

      <Button size="medium" variant="bg-red-500">
        react_ts_storybook
      </Button>

      <Link href="/page1">
        <button className="border px-3 py-2 text-xs">page1へ</button>
      </Link>

      {/* <DatePicker
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeIntervals={1}
      /> */}

      {/* <MultiSelect /> */}

      <TextLink
        href="/"
        prefix={<StarIcon height={16} width={16} />}
        target="_blank"
      >
        TextLink
      </TextLink>
    </>
  )
}
