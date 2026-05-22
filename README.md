# nwn

`CONTEXT.md` doğrultusunda hazırlanmış Astro tabanlı Türkçe içerik platformu iskeleti.

## Başlangıç

```bash
npm install
npm run build
```

## Ortam Değişkenleri

- `PUBLIC_WAITLIST_ENDPOINT`: Formspree, Buttondown veya benzeri bir servisin doğrudan `POST` uç noktası
- `PUBLIC_WAITLIST_EMAIL`: Endpoint yoksa ücretsiz FormSubmit için alıcı e-posta adresi

## Varsayımlar

- Geçici site adı: `vivência`
- Geçici yayın adresi: `https://ahmety21.github.io/nwn`
- Bekleme listesi formu özel endpoint veya FormSubmit fallback ile çalışır
- Font dosyaları ve nihai görsel dil, marka kararı netleştiğinde `public/fonts` ve `src/styles/global.css` üzerinden güncellenebilir
