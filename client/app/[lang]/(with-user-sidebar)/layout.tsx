import UserSidebar from "@/components/Aside/UserSidebar";
import ButtonBack from "@/components/ButtonBack/ButtonBack";
import ButtonLogout from "@/components/ButtonLogout/ButtonLogout";
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
      <main>
        {children}

        <ButtonBack lang={params.lang} />
        {/* <ButtonLogout lang={params.lang} /> */}
      </main>
    </>
  );
}
