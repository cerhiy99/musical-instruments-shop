const jwt = require('jsonwebtoken');
const ErrorApi = require('../error/ErrorApi');
const { Users } = require('../models/models');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]; // Отримуємо токен з заголовку Authorization

    if (token) {
      // 1️⃣ Перевірка токена
      jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
          // Якщо токен протермінований або недійсний
          return next(ErrorApi.noAuth('Токен протермінований або недійсний.'));
        }

        // 2️⃣ Перевірка, чи не був змінений пароль після створення токена
        const user = await Users.findByPk(decoded.id); // Отримуємо користувача за ID з токена
        if (
          user.passwordUpdatedAt &&
          decoded.iat * 1000 < user.passwordUpdatedAt.getTime()
        ) {
          // Якщо токен був створений до оновлення пароля
          return next(
            ErrorApi.noAuth('Пароль був змінений після створення токена.'),
          );
        }

        // 3️⃣ Оновлюємо останню активність
        await Users.update(
          { latestActivity: new Date() },
          { where: { id: decoded.id } },
        );

        // Якщо все гаразд, додаємо decoded інформацію в req
        req.user = decoded;
        next(); // Йдемо далі
      });
    } else {
      return next(ErrorApi.noAuth('Ви не авторизовані.'));
    }
  } catch (err) {
    return next(ErrorApi.noAuth('Помилка авторизації.'));
  }
};
