import "./Dealers.scss";

const dealersInfoData = [
  {
    city: "Киев",
    numbers: ["(095) 041 71 48", "(063) 622 66 27", "(098) 716 26 70"],
  },
  {
    city: "Винница",
    numbers: ["(098) 213 66 03", "(063) 053 90 63"],
  },
  {
    city: "Днепр",
    numbers: [
      "(063) 103 65 40",
      "(095) 029 18 60",
      "(097) 297 15 23",
      "(067) 999 04 03",
    ],
  },
  {
    city: "Запорожье",
    numbers: ["(063) 027 34 43"],
  },
  {
    city: "Ивано-Франковск",
    numbers: ["(098) 716 26 70", "(063) 928 85 83"],
  },
  {
    city: "Одесса",
    numbers: ["(099) 636 97 46", "(099) 530 26 63"],
  },
  {
    city: "Ровно",
    numbers: ["(096) 519 00 11"],
  },
  {
    city: "Тернополь",
    numbers: ["(093) 239 28 61"],
  },
  {
    city: "Харьков",
    numbers: ["(093) 866 44 82", "(096) 949 60 93"],
  },
  {
    city: "Хмельницкий",
    numbers: ["(096) 740 72 86"],
  },
  {
    city: "Черкассы",
    numbers: ["(093) 614 15 12"],
  },
  {
    city: "Черновцы",
    numbers: ["(095) 862 38 30"],
  },
];
const page = async () => {
  return (
    <div className="dealersPage__grid">
      {dealersInfoData.map((dealer, i) => (
        <>
          <div key={i} className="dealersPage__grid--city">
            <p>{dealer.city}</p>
          </div>
          <div className="dealersPage__grid--numbers">
            {dealer.numbers.map((num) => (
              <p key={num}>{num}</p>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};
export default page;
