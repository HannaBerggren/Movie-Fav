import { rest } from "msw";

const baseURL = "https://movie-fav-project-5.herokuapp.com/"

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 3,
        username: "Elsa",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 3,
        profile_image: 
         "https://res.cloudinary.com/hannacloud/image/upload/v1/media/../movie-profile",
      })
    );  
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];