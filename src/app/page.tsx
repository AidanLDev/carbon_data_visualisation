"use client";
import { useEffect, useState } from "react";
import Header from "@components/Header";
import { HeroImage } from "@components/HeroImage";
import FormContainer from "@components/form/FormContainer";
import { ICarbonData } from "@/interfaces/carbon-data";
import { getCarbonDateRange } from "@utils/getData";
import LineChart from "@components/chart/LineChart";
import { validDateRange } from "@utils/validation";
import { debounce } from "@utils/utilityFunctions";

export default function Home() {
  const [carbonData, setCarbonData] = useState<ICarbonData[] | null>(null);
  const [from, setFrom] = useState("2024-02-20");
  const [to, setTo] = useState("2024-02-27");
  const [timeZone, setTimeZone] = useState("Europe/London");

  const dateRangeValidation = validDateRange(from, to);

  const debouncedFetchCarbonData = debounce(async () => {
    if (dateRangeValidation === "") {
      const { data } = await getCarbonDateRange({
        from,
        to,
      });
      setCarbonData(data);
    }
  }, 750);

  useEffect(() => {
    debouncedFetchCarbonData();
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
        validDateRange={dateRangeValidation}
      />
      {carbonData && <LineChart data={carbonData} timeZone={timeZone} />}
    </main>
  );
}
