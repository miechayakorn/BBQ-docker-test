"use strict";
const User = use("App/Models/User");

class UserController {
  async store({ request, response }) {
    try {
      // getting data passed within the request
      const data = request.only(["username", "email", "password"]);

      console.log(data);

      /*// looking for user in database
      const userExists = await User.findBy("email", data.email);

      // if user exists don't save
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: "User already registered" } });
      }

      // if user doesn't exist, proceeds with saving him in DB
      const user = await User.create(data);

      return user;*/
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }
  async create({ request, response }) {
    try {
      const data = request.only([
        "gender",
        "date_of_birth",
        "first_name",
        "last_name"
      ]);
      console.log("User")

      console.log(userFromFontend);
      const user = await User.create("");
      return user;
    } catch (err) {
      return response.status(err.status).send(err);
    }
  }
}

module.exports = UserController;
