const Router = require('koa-router');
const Koa = require('koa');

const app = new Koa();
const router = new Router();

router.get('/',ctx =>{
    ctx.body = "<h1>Index sayfasına hoş geldiniz</h1>";
})
router.get('/iletisim',ctx =>{
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz</h1>";
})
router.get('/hakkimda',ctx =>{
    ctx.body = "<h1>Hakkımda sayfasına hoş geldiniz</h1>";
})

app.use(router.routes())
app.use(router.allowedMethods());

const port = 3000;

app.listen(port,() =>{
    console.log(`Sunucu ${port} portunda başlatıldı`)
})