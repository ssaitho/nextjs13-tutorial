"use client";
import React, { useState } from "react";
import "./globals.css";
import Link from "next/link";
import { Button } from "@ssaitho/react_ts_storybook/Button";
import { TextLink } from "@ssaitho/react_ts_storybook/TextLink";
import { StarIcon, ClearIcon } from "@ssaitho/react_ts_storybook/Icon";
import { DatePicker } from "@ssaitho/react_ts_storybook/DatePicker";
import { MultiSelect } from "@ssaitho/react_ts_storybook";
import { Modal } from "@ssaitho/react_ts_storybook";
import { Card, CardHead, CardBody } from "@ssaitho/react_ts_storybook/Card";

export default function Home() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  const showModal = (): void => setOpen(true);
  const closeModal = (): void => setOpen(false);

  return (
    <>
      <h1>home</h1>

      <Button onClick={showModal}>ShowModal</Button>
      <Modal open={open} onClose={closeModal}>
        <Card className="w-[600px]">
          <CardHead className="flex justify-between items-center">
            CardHead
            <ClearIcon
              className="text-gray-600 cursor-pointer"
              onClick={closeModal}
            >
              Close
            </ClearIcon>
          </CardHead>
          <CardBody>
            <input
              type="text"
              placeholder="placeholder"
              className="border border-gray-200 p-2 text-xs rounded"
            />
            <Button variant="bg-blue-500" size="medium">
              Label
            </Button>
          </CardBody>
        </Card>
      </Modal>

      <Button size="medium" variant="bg-red-500">
        react_ts_storybook
      </Button>

      <Link href="/page1">
        <button className="border px-3 py-2 text-xs">page1へ</button>
      </Link>

      <DatePicker
        dateFormat="MMMM d, yyyy h:mm aa"
        showTimeSelect
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        timeIntervals={1}
      />

      <MultiSelect />

      <TextLink
        href="/"
        prefix={<StarIcon height={16} width={16} />}
        target="_blank"
      >
        TextLink
      </TextLink>
    </>
  );
}
