import type { GetServerSideProps, Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Locale, i18n } from "@/i18n.config";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getDictionary } from "@/lib/dictionary";
import Sidebar from "../../components/Aside/Sidebar";
import "@/styles/App.scss";
import FloatingButtons from "@/components/FloatingButtons/FloatingButtons";
import { TranslationProvider } from "@/contexts/TranslationProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={ubuntu.className}>
        <TranslationProvider>
          <Header lang={params.lang} />
          <div className="wrapper">
            <Sidebar />
            <main>{children}</main>
          </div>
          <Footer lang={params.lang} />
          <FloatingButtons />
        </TranslationProvider>
      </body>
    </html>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const locale = params?.locale || "uk"; // Получаем язык из параметра или по умолчанию "en"
  try {
    const dictionary = await getDictionary(locale as Locale); // Загружаем словарь для нужного языка
    return {
      props: {
        dictionary, // Передаем в компонент
      },
    };
  } catch (error) {
    console.error("Error loading dictionary:", error);
    return {
      notFound: true, // Возвращаем 404 если не удалось загрузить словарь
    };
  }
};
