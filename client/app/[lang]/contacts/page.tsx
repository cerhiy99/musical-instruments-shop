import "./Contacts.scss";
import ContactsInfo from "@/components/Contacts/ContactsInfo";
import FeedBackForm from "@/components/Contacts/FeedBackForm";
import Map from "@/components/Contacts/Map";
import { Locale } from "@/i18n.config";

export default function ContactPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="container__info">
          <ContactsInfo />
          <Map />
        </div>
        <FeedBackForm lang={lang} />
      </div>
    </div>
  );
}
