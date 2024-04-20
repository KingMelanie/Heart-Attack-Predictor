import Layout from "../Layout";

export default function NewConversation() {
  return (
    <Layout title="Sami">
      <div class="container">
        <h1>Chat with Sami</h1>
        <form action="/assistant/ask" method="post">
          <div class="mb-3">
            <label for="message" class="form-label">
              How can i help you?
            </label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              name="message"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-danger">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
