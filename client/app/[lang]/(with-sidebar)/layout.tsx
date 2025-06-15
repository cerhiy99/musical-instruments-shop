import Sidebar from "@/components/Aside/Sidebar";
import { Locale } from "@/i18n.config";

const getCategory=async()=>{
  try{
    const res=await fetch(process.env.NEXT_PUBLIC_API_SERVER+'category/get');
    if(!res.ok){
      console.log(`помика отримання категорії: ${res}`);
    }
    const data=await res.json();
    return data.res;
  }catch(err){
    console.log(`помика отримання категорії: ${err}`);
    return []
  }
}

export default async function WithSidebarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const categories=await getCategory();

  return (
    <>
      <Sidebar categorie={categories} lang={params.lang} />
      <main>{children}</main>
    </>
  );
}
