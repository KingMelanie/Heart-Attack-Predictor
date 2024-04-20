import type { FC } from "hono/jsx";
import Layout from "./Layout";
import { SiteData } from "../../types";

const Login = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <div class="row pt-2">
      <div class="col"></div>
      <div class="col-md-6">
        <div class="card" style=" margin-top: 100px; margin-bottom: 100px;">
          <div class="card-body">
            <h5 class="card-title">Login</h5>
            <form action="/login" method="post">
              {/* <div class="mb-4">
                <a href="/password">Forgot Password?</a>
              </div> */}
              <div class="mb-3">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password">Password:</label>
                <input
                  class="form-control"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-danger">
                Sign In
              </button>
            </form>

            <div class="mb-4">
              Don't have an account? <a href="/register">Register Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </Layout>
);

export default Login;
