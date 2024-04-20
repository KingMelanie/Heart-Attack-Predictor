import type { FC } from "hono/jsx";
import Layout from "./Layout";
import { SiteData } from "../../types";

const MedForm = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <form action="/form" method="post">
      <div class="container">
        <h2>Med Form</h2>
        {/*<!-- Tabs Navigation -->*/}
        <ul class="nav nav-tabs" id="formTabs" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="page1-tab"
              data-toggle="tab"
              href="#page1"
              role="tab"
              aria-controls="page1"
              aria-selected="true"
              color="red"
            >
              Personal Info
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="page2-tab"
              data-toggle="tab"
              href="#page2"
              role="tab"
              aria-controls="page2"
              aria-selected="false"
              color="red"
            >
              Heart Function and Exercise Response
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="page3-tab"
              data-toggle="tab"
              href="#page3"
              role="tab"
              aria-controls="page3"
              aria-selected="false"
              color="red"
            >
              Coronary Artery Health
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="page4-tab"
              data-toggle="tab"
              href="#page4"
              role="tab"
              aria-controls="page4"
              aria-selected="false"
              color="red"
            >
              Metabolic Health Markers
            </a>
          </li>
        </ul>

        {/*<!-- Tab panes -->*/}
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="page1"
            role="tabpanel"
            aria-labelledby="page1-tab"
          >
            {/*<!-- Page 1 content -->*/}
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                class="form-control"
                id="age"
                name="age"
                placeholder="Enter your age"
              ></input>
            </div>
            <div class="form-group">
              <label for="sex">Sex</label>
              <select class="form-control" id="sex" name="sex">
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
            </div>
            <div class="form-group">
              <label for="trestbps">
                Resting Blood Pressure (trestbps from 80 to 200)
              </label>
              <input
                type="number"
                class="form-control"
                id="trestbps"
                name="trestbps"
                placeholder="Enter resting blood pressure"
              ></input>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="page2"
            role="tabpanel"
            aria-labelledby="page2-tab"
          >
            {/*<!-- Page 2 content -->*/}
            <div class="form-group">
              <label for="chol">Cholestrol (100 to 200)</label>
              <input
                type="number"
                class="form-control"
                id="chol"
                name="chol"
              ></input>
            </div>
            <div class="form-group">
              <label for="fbs">
                Fasting Blood Sugar greater than 120 mg/dl
              </label>

              <select class="form-control" id="fbs" name="fbs">
                <option value="0">True</option>
                <option value="1">False</option>
              </select>
            </div>
            <div class="form-group">
              <label for="restecg">Resting Electrocardiographic</label>
              <select class="form-control" id="restecg" name="restecg">
                <option value="0">Normal</option>
                <option value="1">ST-T wave normality</option>
                <option value="2">Left ventricular hypertrophy</option>
              </select>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="page3"
            role="tabpanel"
            aria-labelledby="page3-tab"
          >
            {/*<!-- Page 3 content -->*/}
            <div class="form-group">
              <label for="thalch">Thalch (60 to 220)</label>
              <input
                type="number"
                class="form-control"
                id="thalch"
                name="thalch"
              ></input>
            </div>

            <div class="form-group">
              <label for="exang">Exercise Angina</label>
              <select class="form-control" id="exang" name="exang">
                <option value="0">Yes</option>
                <option value="1">No</option>
              </select>
            </div>

            <div class="form-group">
              <label for="oldpeak">Old Peak</label>
              <select class="form-control" id="oldpeak" name="oldpeak">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
          </div>

          <div
            class="tab-pane fade"
            id="page4"
            role="tabpanel"
            aria-labelledby="page4-tab"
          >
            {/*<!-- Page 4 content -->*/}
            <div class="form-group">
              <label for="slope">Slope</label>
              <select class="form-control" id="slope" name="slope">
                <option value="1">Upsloping</option>
                <option value="2">Flat</option>
                <option value="3">Downsloping</option>
              </select>
            </div>

            <div class="form-group">
              <label for="ca">
                ca (Number of major vessels colored by flourosopy)
              </label>
              <select class="form-control" id="ca" name="ca">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>

            <div class="form-group">
              <label for="thal">Thalium Stress Test result</label>
              <select class="form-control" id="thal" name="thal">
                <option value="5">Normal</option>
                <option value="6">reversable defect</option>
                <option value="7">Fixed Defect</option>
              </select>
            </div>

            <div class="form-group">
              <label for="cp">Chest Pain Type:</label>
              <select class="form-control" id="cp" name="cp">
                <option value="0">Typical angina</option>
                <option value="1">Atypical angina</option>
                <option value="2">Non-anginal pain</option>
                <option value="3">Asymptomatic</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </Layout>
);

export default MedForm;
