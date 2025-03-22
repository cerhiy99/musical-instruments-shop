import { Locale } from "@/i18n.config";
import "./Dashboard.scss";
import Link from "next/link";
import { getDictionary } from "@/lib/dictionary";
import User from "@/public/dashboard/user.svg";
import Contacts from "@/public/dashboard/contacts.svg";
import Receipt from "@/public/dashboard/receipt.svg";
import History from "@/public/dashboard/history.svg";
import Cart from "@/public/dashboard/cartThin.svg";

type DashboardNavItem = {
  title: string;
  link: string;
  icon: React.ElementType;
};
type DashboardNavType = Array<DashboardNavItem>;

const DashboardNavigation: DashboardNavType = [
  { title: "Поточні замовлення", link: "/dashboard/orders", icon: Receipt },
  { title: "Особисті дані", link: "/dashboard/user-info", icon: User },
  {
    title: "Історія замовлень",
    link: "/dashboard/orders-history",
    icon: History,
  },
  { title: "Кошик", link: "/cart", icon: Cart },
  { title: "Контакти", link: "/contacts", icon: Contacts },
];

export default async function DashBoard({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  // const { aside } = await getDictionary(lang);
  return (
    <div className="partnersPage__grid">
      {DashboardNavigation.map((navItem, i) => (
        <div key={i} className="partnersPage__grid--item">
          <Link href={`/${lang}${navItem.link}`} />
          <navItem.icon width={50} height={50} strokeWidth={1.5} />
          <p>{navItem.title}</p>
        </div>
      ))}
    </div>
  );
}
