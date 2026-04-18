# nwn

`CONTEXT.md` doğrultusunda hazırlanmış Astro tabanlı Türkçe içerik platformu iskeleti.

## Başlangıç

```bash
npm install
npm run build
```

## Ortam Değişkenleri

- `PUBLIC_WAITLIST_ENDPOINT`: Bekleme listesi formunun `POST` edeceği uç nokta

## Varsayımlar

- Geçici site adı: `Bedenin Sesi`
- Geçici yayın adresi: `https://ahmety21.github.io/nwn`
- E-posta servis entegrasyonu henüz seçilmediği için form bileşeni uç nokta verilmediğinde açıklayıcı yedek durum gösterir
- Font dosyaları ve nihai görsel dil, marka kararı netleştiğinde `public/fonts` ve `src/styles/global.css` üzerinden güncellenebilir

