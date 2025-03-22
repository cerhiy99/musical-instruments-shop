import { Locale } from "@/i18n.config";
import "./Dashboard.scss";
import Link from "next/link";

import Brands from "@/components/HomePage/Brands";

import { getDictionary } from "@/lib/dictionary";

export default async function DashBoard({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { aside } = await getDictionary(lang);
  return (
    <>
      <Brands lang={lang} />
    </>
  );
}
