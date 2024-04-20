import { html } from "hono/html";
import { SiteData } from "../../types";

const Layout = (props: SiteData) => {
  const navigation = props.user
    ? html` <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/form">Med Form</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout">Logout</a>
        </li>
      </ul>`
    : html`
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/form">Med Form</a>
          </li>
        </ul>
      `;

  const renderChatBubble = () => {
    return <Chat />;
  };

  return html`
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>${props.title}</title>
      <head prefix="og: http://ogp.me/ns#">
        <meta property="og:type" content="article" />
        <!--style for data form-->
        <!-- CSS only -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!-- JS, Popper.js, and jQuery -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

        <!--style for landing page-->
        <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/jumbotron/">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossorigin="anonymous">

        <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet">

        <style>
          .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          @media (min-width: 768px) {
            .bd-placeholder-img-lg {
              font-size: 3.5rem;
            }
          }
        </style>
        <link href="/assets/assistant.css" rel="stylesheet">

      </head>
    </head>
    <body>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="/">
            <img
              src="/assets/logo.png"
              width="70"
              class="d-inline-block align-top"
              alt=""
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            ${navigation}
          </div>
        </div>
      </nav>
      <main class="container">${props.children}</main>
      ${renderChatBubble()}
      <hr>
      <footer class="container">
      <p>&copy; Ade & Mel 2024</p>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      </script>
      <!-- script for landing page-->
      <script 
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
      </script>

      <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      
      <script src="/assets/assistant.js"></script> 

    </body>
  </html>
`;
};

const Chat = () => {
  return (
    <div x-data="assistant">
      <button class="open-button" x-on:click="openForm">
        Chat
      </button>
      <div class="chat-popup" id="myForm">
        <template x-if="initialFetch == false">Loading</template>
        <template x-if="initialFetch == true">
          <div class="form-container">
            <div>
              <h1 class="float-left">Sami</h1>

              <div
                class="float-right flex"
                style="
              display: flex;
              justify-content: space-between;
              gap: 10px;
              "
              >
                <div
                  style="
              cursor: pointer;
              "
                  x-on:click="fetchMessages"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    style="
                    width: 24px;
                    height: 24px;
                  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                </div>
                <div
                  style="
              cursor: pointer;
              "
                  x-on:click="closeForm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="black"
                    style="
                    width: 24px;
                    height: 24px;
                  "
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <template x-if="messages.length == 0">
              <div>
                <label for="msg">
                  <b>Message</b>
                </label>
                <textarea
                  x-model="message"
                  placeholder="Type message.."
                  name="msg"
                  required
                ></textarea>

                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  x-on:click="sendMessage"
                >
                  Send
                </button>
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  x-on:click="closeForm"
                >
                  Close
                </button>
              </div>
            </template>
            <template x-if="messages.length >= 1">
              <div class="messages-container">
                <template x-for="i in messages">
                  <div
                    x-bind:style="{
                    'background-color': i.role == 'assistant' ? '#ffcbd1' : '#f69697',
                    'padding': '10px',
                    'margin': '10px',
                    'border-radius': '10px',
                    'width': '70%',
                    'float': i.role == 'assistant' ? 'left' : 'right'
                  }"
                  >
                    {/* <div x-text="i.role"></div> */}
                    <div style="margin-bottom: 10px;">
                      <template x-for="content in i.content">
                        <div x-text="content"></div>
                      </template>
                    </div>
                    <div x-text="i.createdAt"></div>
                  </div>
                </template>
              </div>
            </template>

            <template x-if="messages.length >= 1">
              <div>
                <div class="input-group mb-2 mr-sm-2">
                  <input
                    class="form-control"
                    x-model="message"
                    placeholder="Send Message"
                  />

                  <div class="input-group-append">
                    <div
                      class="input-group-text"
                      x-on:click="sendMessage"
                      style="
                    cursor: pointer;
                    "
                    >
                      Send
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  );
};

export default Layout;
