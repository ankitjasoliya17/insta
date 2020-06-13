require('isomorphic-fetch');
const dotenv = require('dotenv');

const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const axios = require('axios')


const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;



app.prepare().then(() => {
    const server = new Koa();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];
    server.use(
        createShopifyAuth({
            apiKey: SHOPIFY_API_KEY,
            secret: SHOPIFY_API_SECRET_KEY,
            scopes: ['read_products'],
            afterAuth(ctx) {

                const { shop, accessToken } = ctx.session;

                var postdata  =
                    {
                        shop : shop,
                        accessToken : accessToken
                    }


                axios.post('http://localhost:5000/save_shop/',postdata)
                    .then(function (response1) {
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                ctx.redirect('https://' + shop +'/admin/apps');

            },
        }),
    );

    server.use(verifyRequest());
    server.use(async (ctx) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
        ctx.res.statusCode = 200;
        return
    });



    server.listen(port, () => {
        console.log(`> Ready on http://localhodfdffst:${port}`);
    });

    // createServer(httpsOptions, (req, res) => {
    //     const parsedUrl = parse(req.url, true);
    //     handle(req, res, parsedUrl);
    //
    // }).listen(port, err => {
    //     if (err) throw err;
    //     console.log('> Ready on https://localhost:${port}');
    // });


});




//
// const { createServer } = require('https');
// const { parse } = require('url');
// const next = require('next');
// const fs = require('fs');
//
// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();
//
// const httpsOptions = {
//     key: fs.readFileSync('/localhost.key'),
//     cert: fs.readFileSync('/localhost.crt')
// };
//
// app.prepare().then(() => {
//     createServer(httpsOptions, (req, res) => {
//         const parsedUrl = parse(req.url, true);
//         handle(req, res, parsedUrl);
//
//     }).listen(3000, err => {
//         if (err) throw err;
//         console.log('> Ready on https://localhost:3000');
//     });
// });