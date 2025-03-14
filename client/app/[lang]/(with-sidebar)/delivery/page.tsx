import BulletPoint from "@/components/ui/BulletPoint";
import "./Delivery.scss";

const page = async () => {
  return (
    <div className="deliveryInfoPage">
      <p className="deliveryInfoPage__title title__infoPage">
        Все заказы подразумевают принятие наших условий продаж, доставки и
        оплаты, которые заявлены ниже.
      </p>
      <div>
        <p className="deliveryInfoPage__margin">
          В нашем Интернет магазине приобретать товары могут, как частные лица,
          так и юридические лица любого региона Украины. Доставка также
          осуществляется в любую точку страны. После поступления заказа с Вами
          свяжется наш менеджер для уточнения деталей по Вашему заказу.
        </p>
      </div>

      <h2 className="deliveryInfoPage__title">Как заказать</h2>

      <div className="deliveryInfoPage__bullet">
        <BulletPoint />
        <p>Вы можете оформить заказ на сайте:</p>
      </div>
      <p className="deliveryInfoPage__margin">
        Выберите необходимые Вам товары, добавьте их в корзину, после чего, в
        разделе «КОРЗИНА» выберите раздел «ОФОРМИТЬ ЗАКАЗ». Перед Вами появится
        форма, которую необходимо заполнить и подтвердить оформление заказа.
        Обращаем Ваше внимание на необходимость точно указывать всю контактную
        информацию, так как наши менеджеры обязательно должны связаться с Вами
        для подтверждения заказа. Мы просим постоянных клиентов сообщать нам о
        любом изменении их контактной информации.
      </p>
      <h2 className="deliveryInfoPage__title">Доставка</h2>

      <p>
        Доставка по Украине осуществляется с помощью курьерской службы «НОВА
        ПОШТА». 
      </p>
      <p className="deliveryInfoPage__margin">
        Отправка заказа осуществляется в течение 24 часов с момента оформления
        заказа при наличии товаров на складе.  
      </p>
      <p className="deliveryInfoPage__margin">
        После отправки заказа получателю отправляется SMS с номером транспортной
        декларации, необходимым для получения/идентификации посылки на складе
        почтовой службы/компании перевозчика.
      </p>
      <p className="deliveryInfoPage__margin">
        Оплата услуг транспортной компании производится покупателем при
        получении заказа.
      </p>
      <h2 className="deliveryInfoPage__title">Оплата</h2>

      <div className="deliveryInfoPage__bullet">
        <BulletPoint />
        <p>
          Вы можете оплатить заказ онлайн любой картой Visa или MasterCard
          любого банка без комиссии. При оформлении заказа на сайте выберите
          опцию &quot;Оплата на карту банка&quot;. В течение нескольких минут на
          Ваш номер телефона поступит бесплатное SMS-сообщение с данными
          реквизитами платежа;
        </p>
      </div>
      <div className="deliveryInfoPage__bullet">
        <BulletPoint />
        <p>
          Или же, наложенным платежом (наличный расчет) при получении товаров в
          отделении &quot;Новой Почты&quot;, при этом Вы должны дополнительно
          оплатить услуги &quot;Новой Почты&quot; за перевод денег. 
        </p>
      </div>
    </div>
  );
};
export default page;
