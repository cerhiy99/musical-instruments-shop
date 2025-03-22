import Sidebar from "@/components/Aside/Sidebar";
import UserSidebar from "@/components/Aside/UserSidebar";
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
      <UserSidebar lang={params.lang} />
      <main>{children}</main>
    </>
  );
}
