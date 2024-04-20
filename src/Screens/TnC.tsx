import { html } from "hono/html";
import Layout from "./Layout";
import { SiteData } from "../../types";

const TnC = (props: { siteData: SiteData; name: string }) => (
  <Layout {...props.siteData}>
    <br />
    <br />
    <h2>Disclaimer</h2>
    <h3>Heart Attack Predictor Project Disclaimer</h3>
    <p style="text-align: justify;">
      This Heart Attack Predictor Project ("Project") is provided for
      informational purposes only and is not intended as a substitute for
      professional medical advice, diagnosis, or treatment. The accuracy of the
      Project's predictions is not guaranteed and should not be relied upon as a
      basis for making any medical, health-related, or other decisions. The
      developers, contributors, and affiliates of the Project disclaim any
      liability or responsibility for any adverse consequences resulting
      directly or indirectly from the use of the Project, including, but not
      limited to, reliance on its predictions, data, or analysis. Users are
      strongly advised to seek professional medical advice from a qualified
      healthcare provider regarding any medical condition or treatment
      decisions. By using the Project, you acknowledge and agree to this
      disclaimer and assume all risks associated with its use.
    </p>
    <br />
    <br />
    <br />
    <h2>User Agreement</h2>
    <h3>Heart Attack Predictor Project User Agreement</h3>
    <p style="text-align: justify;">
      Acceptance of Terms: By accessing and using the Heart Attack Predictor
      Project ("Project"), you agree to be bound by the terms of this agreement.
      If you do not agree to these terms, do not use the Project. Use of
      Service: The Project is intended for informational purposes only and is
      not a substitute for professional medical advice. You agree to use the
      Project at your own risk and consult with a healthcare professional before
      making any health-related decisions. Privacy: Your use of the Project is
      subject to our Privacy Policy, which governs the collection and use of
      your information. Intellectual Property: The Project and its original
      content, features, and functionality are and will remain the exclusive
      property of the Project developers and its licensors. Limitation of
      Liability: The Project developers, contributors, and affiliates will not
      be liable for any damages or injuries arising from the use of this
      Project. Amendments: We reserve the right to modify these terms at any
      time. Your continued use of the Project after any such changes constitutes
      your acceptance of the new terms.
    </p>
    <br />
    <br />
    <br />
    <h2>Terms and Conditions</h2>
    <h3>Heart Attack Predictor Project Terms and Conditions</h3>
    <p style="text-align: justify;">
      Introduction: Welcome to the Heart Attack Predictor Project. These Terms
      and Conditions govern your use of our Project and its predictive services.
      Services Provided: The Project offers predictive analysis based on
      inputted health data to assess heart attack risk. These services are for
      informational purposes only. User Responsibilities: Users are responsible
      for the accuracy of the data they input into the Project. The Project
      should not be used as the sole basis for any medical decisions. No Medical
      Advice: The Project does not offer medical advice. Users should consult
      with healthcare professionals for such advice. Disclaimer of Warranties:
      The Project is provided "as is," without warranty of any kind, express or
      implied. Limitation of Liability: In no event shall the Project, its
      developers, or affiliates be liable for any indirect, incidental, special,
      consequential, or punitive damages arising out of your use of the Project.
      Governing Law: These Terms shall be governed by the laws of
      [Jurisdiction], without regard to its conflict of law provisions. Changes
      to Terms: We reserve the right, at our sole discretion, to modify or
      replace these Terms at any time. Contact Us: For any questions about these
      Terms, please contact us at [Contact Information].
    </p>
  </Layout>
);

export default TnC;
