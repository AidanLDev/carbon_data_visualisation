"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { HeroImage } from "@/components/HeroImage";
import FormContainer from "@/components/form/FormContainer";
import { ICarbonData } from "@/interfaces/carbon-data";
import { getCarbonDateRange } from "@/utils/getData";
import LineChart from "@/components/chart/LineChart";

export default function Home() {
  const [carbonData, setCarbonData] = useState<ICarbonData[] | null>(null);
  const [from, setFrom] = useState("2024-02-20");
  const [to, setTo] = useState("2024-02-27");
  const [timeZone, setTimeZone] = useState("Europe/London");

  useEffect(() => {
    async function fetchData() {
      const { data } = await getCarbonDateRange({
        from,
        to,
      });
      setCarbonData(data);
    }

    fetchData();
  }, [to, from]);

  return (
    <main>
      <Header />
      <HeroImage />
      <FormContainer
        from={from}
        setFrom={setFrom}
        to={to}
        setTo={setTo}
        timeZone={timeZone}
        setTimeZone={setTimeZone}
      />
      {carbonData && <LineChart data={carbonData} timeZone={timeZone} />}
    </main>
  );
}
