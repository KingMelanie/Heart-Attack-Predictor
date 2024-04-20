import type { FC } from "hono/jsx";
import Layout from "../Layout";
import { SiteData } from "../../../types";

const Dashboard = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <div action="/home" method="post">
      {/*<!-- Main jumbotron for a primary marketing message or call to action -->*/}
      <div
        class="jumbotron"
        style={{
          backgroundColor: "#b02a37",
        }}
      >
        <div class="container">
          <h1 class="display-3 text-white">Heart Attack Predictor</h1>
          <p class="text-white">
            {props.siteData.user
              ? `Welcome ` + props.siteData.user.name
              : `Welcome to the Heart Attack Prediction Project`}
          </p>
          {/*<p>
            <a class="btn btn-light btn-lg text-danger" href="/report" role="button">
              Learn more &raquo;
            </a>
          </p>*/}
        </div>
      </div>
      <hr></hr>
      <div class="PO container">
        {/*<!-- Example row of columns -->*/}
        <div class="row">
          <div class="col-md-4">
            <h2>Project Overview</h2>
            <p>
              {" "}
              Utilises machine learning algorithms to predict the likelihood of
              a heart attack{" "}
            </p>
            <p>
              <a class="btn btn-danger" href="https://colab.research.google.com/drive/1WTqVPHAjoj3vOkuAvdUpxndZX_7If6nK?usp=sharing" role="button">
                View details &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Data Visualization</h2>
            <p>
              Visualises the prediction results in an intuitive and informative
              manner.{" "}
            </p>
            <p>
              <a class="btn btn-danger" href="https://colab.research.google.com/drive/184IkIEtlGCndqxmmTrhmpCU5V8zGkhQ9?usp=sharing" role="button">
                Visuals &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>User Agreement</h2>
            <p>
              {" "}
              Agree to the terms and conditions before using the heart attack
              predictor project{" "}
            </p>
            <p>
              <a class="btn btn-danger" href="/tnc" role="button">
                See More &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
      {/*<!-- /container -->*/}
      <hr />
      <div class="User Req container">
        {/*<!-- Example row of columns -->*/}
        <div class="row">
          <div class="col-md-4">
            <h2>Step 1: Complete Health Questionaire</h2>
            <p>
              The infomation gathered is not invasive and will not be sold.{" "}
            </p>
            <p>
              <a class="btn btn-danger" href="/form" role="button">
                Go to Data Page &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Step 2: Agree to Terms and Conditions</h2>
            <p>
              Agree to the terms and conditions before usin the heart attack
              predictor project.
            </p>
            <p>
              <a class="btn btn-danger" href="/tnc" role="button">
                Read T&C &raquo;
              </a>
            </p>
          </div>
          <div class="col-md-4">
            <h2>Step 3: Review Results</h2>
            <p>
              This displays the probability of a heart attack. This is not to be
              used a medical diagnoses.
            </p>
            <p>
              <a class="btn btn-danger" href="/login" role="button">
                View your result &raquo;
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
      {/*<!-- /container -->*/}
    </div>
  </Layout>
);

export default Dashboard;
