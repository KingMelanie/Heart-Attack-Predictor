import type { FC } from "hono/jsx";
import Layout from "./Layout";
import { SiteData } from "../../types";

interface ReportData {
  disclaimer: string;
  prediction: string;
  recommendations: string[];
}

const Report = (props: {
  siteData: SiteData;
  name: string;
  data: ReportData;
}) => {
  return (
    <Layout {...props.siteData}>
      <form action="/report" method="post">
        {/*<!-- Page Wrapper -->*/}
        <div id="wrapper">
          {/*<!-- Content Wrapper -->*/}
          <div id="content-wrapper" class="d-flex flex-column">
            {/*<!-- Main Content -->*/}
            <div id="content">
              {/*<!-- Begin Page Content -->*/}
              <div class="container-fluid">
                {/*<!-- Page Heading -->*/}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Analysis Report</h1>
                  <a
                    href="/form"
                    class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i class="fas fa-download fa-sm text-white-50"></i> Generate
                    Report
                  </a>
                </div>

                {/*<!-- Content Row -->*/}

                {/*<!-- Content Row -->*/}
                <div class="row">
                  <div class="col-lg-6 mb-4">
                    {/*<!-- Illustrations -->*/}
                    <div class="card shadow mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Prediction
                        </h6>
                      </div>
                      <div class="card-body">
                        <p>{props.data.prediction}</p>
                      </div>
                    </div>

                    {/*<!-- Approach -->*/}
                    <div class="card shadow mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Recommendation
                        </h6>
                      </div>
                      <div class="card-body">
                        <ul>
                          {props.data.recommendations.map((recommendation) => (
                            <li>{recommendation}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/*<!-- Approach -->*/}
                    <div class="card shadow mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Disclaimer
                        </h6>
                      </div>
                      <div class="card-body">
                        <p>{props.data.disclaimer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*<!-- /.container-fluid --> */}
            </div>
            {/*<!-- End of Main Content -->*/}
          </div>
          {/*<   !-- End of Content Wrapper -->*/}
        </div>
        {/*<!-- End of Page Wrapper -->*/}

        {/*<!-- Scroll to Top Button-->*/}
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>
      </form>
    </Layout>
  );
};

export default Report;
