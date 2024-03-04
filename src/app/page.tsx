"use client";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";
import Header from "@components/Header";
import { HeroImage } from "@components/HeroImage";
import FormContainer from "@components/form/FormContainer";
import { ICarbonData } from "@interfaces/carbon-data";
import { getCarbonDateRange } from "@utils/getData";
import LineChart from "@components/chart/LineChart";
import { validDateRange } from "@utils/validation";
import { debounce } from "@utils/utilityFunctions";
import Spinner from "@components/Spinner";

export default function Home() {
  const [carbonData, setCarbonData] = useState<ICarbonData[] | null>(null);
  const [from, setFrom] = useState(DateTime.now().minus({ days: 7 }));
  const [to, setTo] = useState(DateTime.now());
  const [timeZone, setTimeZone] = useState("Europe/London");

  const dateRangeValidation = validDateRange(from.toJSDate(), to.toJSDate());

  const debouncedFetchCarbonData = debounce(async () => {
    if (dateRangeValidation === "") {
      const { data } = await getCarbonDateRange({
        from: from.toISODate(),
        to: to.toISODate(),
      });
      setCarbonData(data);
    }
  }, 1000);

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
      {carbonData ? (
        <LineChart data={carbonData} timeZone={timeZone} />
      ) : (
        <Spinner />
      )}
    </main>
  );
}
