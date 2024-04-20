import type { FC } from "hono/jsx";
import Layout from "./Layout";
import { SiteData } from "../../types";

const Signup = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    {" "}
    <div class="row pt-2">
      <div class="col"></div>
      <div class="col-md-6">
        <div class="card" style=" margin-top: 100px; margin-bottom: 100px;">
          <div class="card-body">
            <h5 class="card-title">Register</h5>
            <form action="/register" method="post">
              <div class="mb-3">
                <label for="username">Full name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  class="form-control"
                  name="password"
                  required
                />
              </div>
              <div>
                <button type="submit" class="btn btn-danger">
                  Sign Up
                </button>
              </div>
            </form>

            <div class="mb-4">
              Already have an account? <a href="/login">Login</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col"></div>
    </div>
  </Layout>
);

export default Signup;
