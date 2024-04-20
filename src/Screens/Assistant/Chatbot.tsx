import OpenAI from "openai";
import Layout from "../Layout";

export default function Chatbot({
  messages,
  conversation,
}: {
  messages: OpenAI.Beta.Threads.Messages.Message[];
  conversation: string;
}) {
  return (
    <Layout title="Chat with Sami">
      <div class="container">
        <h1>Chat Bot</h1>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
              {messages.map((message) => {
                return (
                  <li class="list-group-item">
                    <strong>{message.role}</strong>:{" "}
                    {message.content.map((content) => {
                      return content.text.value;
                    })}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <form action="/assistant/ask" method="post">
          <input type="hidden" name="conversation" value={conversation} />
          <div class="mb-3">
            <label for="message" class="form-label">
              Message
            </label>
            <input
              type="text"
              class="form-control"
              id="message"
              name="message"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </Layout>
  );
}
