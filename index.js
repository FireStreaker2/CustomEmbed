const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<script>window.location.href = "https://github.com/FireStreaker2/CustomEmbed";</script>`);
});

app.get("/embed", (req, res) => {
    // check readme for more info on parameters
    const title = req.query.title;
    const color = req.query.color;
    const description = req.query.description;
    const image = req.query.image;
    const imageBig = req.query.imageBig;
    res.send(`
    <!DOCTYPE HTML>
    <html>
        <head>
            <title>${title}</title>
            
            <meta property="og:title" content="${title ? title : "No Title Provided"}" />
            <meta property="og:description" content="${description ? description : "No Description Provided"}" />
            <meta name="theme-color" content="#${color ? color : "000000"}">
            <meta property="og:image" content="${image ? image : ""}" />
            ${imageBig ? '<meta name="twitter:card" content="summary_large_image">' : "<!-- this image is small -->"}

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