import "./Contacts.scss";
import ContactsInfo from "@/components/Contacts/ContactsInfo";
import FeedBackForm from "@/components/Contacts/FeedBackForm";
import Map from "@/components/Contacts/Map";

export default function ContactPage() {
  return (
    <div className="contactPage">
      <div className="container">
        <div className="container__info">
          <ContactsInfo />
          <Map />
        </div>
        <FeedBackForm />
      </div>
    </div>
  );
}
