"use client";
import React, { useState } from "react";
import ContactUsForm from "./contact-form";
import { motion } from "framer-motion";
import ScheduleTimeCard from "./schedule-time-card";

const tabOptions = ["Message Us", "Schedule a Call"];

export function ContactUsTabbedView() {
  const [tab, setTab] = useState(tabOptions[0]);

  return (
    <div className="mt-14 mb-16 max-w-[50rem] mx-auto space-y-16">
      <div className="flex items-center justify-center">
        <div className="overflow-hidden bg-surface rounded-md">
          {tabOptions.map((tabTitle) => {
            return (
              <button
                key={tabTitle}
                onClick={() => setTab(tabTitle)}
                className="relative px-4 py-4 text-md font-medium text-white md:px-8"
              >
                {tab === tabTitle && (
                  <motion.div
                    layoutId="contact-us-tabbed-button "
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    style={{ borderRadius: 12 }}
                    className="absolute inset-0 pointer-events-none bg-primaryBtnGradient"
                  />
                )}
                <span className="relative z-10">{tabTitle}</span>
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {tab == tabOptions[0] && <ContactUsForm />}
        {tab == tabOptions[1] && <ScheduleTimeCard />}
      </div>
    </div>
  );
}
