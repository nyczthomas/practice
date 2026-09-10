# practice
test
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lions</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: #111;
      color: white;
    }

    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      /* Lion image */
      background:
        linear-gradient(
          rgba(0, 0, 0, 0.35),
          rgba(0, 0, 0, 0.65)
        ),
        url("https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=2000&q=85");

      background-size: cover;
      background-position: center;
      padding: 40px;
    }

    .content {
      max-width: 800px;
    }

    h1 {
      font-size: clamp(60px, 10vw, 140px);
      margin-bottom: 15px;
      letter-spacing: -4px;
    }

    p {
      font-size: clamp(18px, 2vw, 26px);
      line-height: 1.5;
      opacity: 0.9;
    }

    .button {
      display: inline-block;
      margin-top: 30px;
      padding: 14px 28px;
      background: white;
      color: black;
      text-decoration: none;
      border-radius: 100px;
      font-weight: bold;
      transition: 0.25s;
    }

    .button:hover {
      transform: translateY(-3px);
      background: #e7c16b;
    }
  </style>
</head>

<body>

  <section class="hero">
    <div class="content">
      <h1>LIONS</h1>

      <p>
        Powerful. Majestic. Fearless.
        Meet one of nature's most iconic predators.
      </p>

      <a
        href="https://en.wikipedia.org/wiki/Lion"
        target="_blank"
        class="button"
      >
        Discover Lions
      </a>
    </div>
  </section>

</body>
</html>