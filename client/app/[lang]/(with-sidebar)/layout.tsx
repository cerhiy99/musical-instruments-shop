import Sidebar from "@/components/Aside/Sidebar";
import { Locale } from "@/i18n.config";

export default function WithSidebarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <>
      <Sidebar lang={params.lang} />
      <main>{children}</main>
    </>
  );
}
