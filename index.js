const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/embed", (req, res) => {
    // possible parameters: title, title hyperlink, color, description, image, image size (bool), footer text
    const title = req.query.title;
    const titleHyperlink = req.query.titleHyperlink;
    const color = req.query.color;
    const description = req.query.description;
    const image = req.query.image;
    const imageBig = req.query.imageBig;
    const footer = req.query.footer;
    res.send(`
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>${title}</title>
            
            <meta property="og:title" content="${title}" />
            <meta property="og:url" content="${titleHyperlink}" />
            <meta property="og:description" content="${description}" />
            <meta name="theme-color" content="#${color}">
            <meta property="og:image" content="${image}" />
            ${imageBig && '<meta name="twitter:card" content="summary_large_image">'}

        </head>

        <body>
            <p>This is a <a href="https://github.com/FireStreaker2/CustomEmbed">custom embed</a>.</p>
        </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});