import type { FC } from "hono/jsx";
import Layout from "./Layout";
import { SiteData } from "../../types";

const Password = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <h2>Forgot Password</h2>
    <form action="/forgot-password" method="post">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <button type="submit">Request Reset Link</button>
    </form>
  </Layout>
);

export default Password;
