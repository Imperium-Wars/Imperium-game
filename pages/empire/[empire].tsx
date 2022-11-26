/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EmpireCards from "../../components/empires/empireCards";

export type EmpireType = "ottoman" | "french" | "chinese" | "american";

const Empire: NextPage = () => {
  const router = useRouter();
  const [empire, setEmpire] = useState<EmpireType | undefined>(undefined);

  useEffect(() => {
    console.log(router.asPath);
    switch (router.asPath) {
      case "/empire/ottoman":
        setEmpire("ottoman");
        break;
      case "/empire/french":
        setEmpire("french");
        break;
      case "/empire/chinese":
        setEmpire("chinese");
        break;
      case "/empire/american":
        setEmpire("american");
        break;
    }
  }, [router]);
  return <>{empire ? <EmpireCards empire={empire} /> : null}</>;
};

export default Empire;
