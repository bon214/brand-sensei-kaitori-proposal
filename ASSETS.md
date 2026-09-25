# 画像素材

内蔵 imagegen で生成したコンペ用の仮写真です。実在の査定士、顧客、商品、買取実績を示すものではありません。全画像 1536×1024。PNG原本からWeb用JPEGに変換しています。

- `assets/hero.jpg`: 査定風景
- `assets/items.jpg`: バッグ・スカーフ・時計
- `assets/condition.jpg`: 使用感のあるバッグ

## 生成プロンプト

### hero.jpg
Use case: photorealistic-natural. Asset type: temporary AI photo for a Japanese home-visit secondhand luxury-goods appraisal website competition demo. Create one 1536x1024 landscape photograph. Scene: bright cream Japanese living room with light oak table. Subject: fictional Japanese male appraiser around 45, navy jacket, white gloves, carefully examining a brown unbranded leather handbag on the table. A Japanese woman client around 60 is partly visible, quietly engaged. Style: warm natural editorial photography, believable skin texture and anatomy, authentic candid moment, friendly professional expression, soft daylight, warm cream and oak colors. Composition: medium-wide, appraiser and bag clearly readable, background calmly unfocused. No logos, no text, no watermark. Not a collage.

### items.jpg
Use case: product-mockup. Asset type: temporary AI photo for a Japanese secondhand luxury-goods appraisal website competition demo. Create one 1536x1024 landscape photograph. Subject: vintage unbranded brown leather handbag, tastefully draped scarf, classic wristwatch grouped together as an elegant still life on a warm light cream surface. Style: realistic editorial product photography with leather grain, woven silk detail and honest slight age in the materials. Soft natural daylight and warm quiet atmosphere. Balanced uncluttered composition with all three objects legible. No logos, no text, no watermark. Not a collage.

### condition.jpg
Use case: photorealistic-natural. Asset type: temporary AI detail photograph for a Japanese secondhand goods appraisal website competition demo. Create one 1536x1024 landscape photograph. Subject: close-up of a worn unbranded brown leather handbag, showing its scuffed corner, frayed handle and tarnished brass hardware in one coherent believable composition. Elegant factual detail photography, real leather grain and patina, soft natural light, warm light cream background, gently shallow depth of field while damage details remain visible. Respectful care for a long-used item. No logos, no text, no watermark. Not a collage.

## 第2案の追加画像

- `assets/products-grid.jpg`: 左上からバッグ・時計・ネックレス・財布の4分割シート。
- `assets/conditions-grid.jpg`: 左上から角スレ・シミ・内装劣化・金具の変色の4分割シート。

各1536×1024。内蔵imagegenで各1回生成し、CSSで各四半分を表示。すべて架空の仮写真です。

### products-grid.jpg の生成プロンプト
Use case: product-mockup. Create an original AI temporary photographic contact sheet, exactly 1536x1024 pixels, with EXACTLY 2 columns and 2 rows of equal 768x512 rectangular photo quadrants. No gutters, no gaps, no borders, no dividers, no text, no logos, no watermarks. Each quadrant is a separate independent realistic product studio photograph, with its own continuous bright warm cream backdrop, generous margin, fully visible subject centered within its quadrant, no subject extending into any other quadrant. Top-left: a vintage brown leather handbag with simple unbranded design, full bag and handles visible. Top-right: a classic unbranded metal wristwatch, full watch and bracelet visible. Bottom-left: a delicate gold necklace with small pendant arranged elegantly, complete necklace visible. Bottom-right: a burgundy leather wallet, entire wallet visible. Consistent soft bright daylight, restrained editorial still-life photography, warm cream and natural material tones, believable leather and metal detail. No props. The four photographs will be individually cropped at the exact quadrant boundaries for a Japanese home-visit secondhand goods appraisal demo website. All products fictional, no real brands.

### conditions-grid.jpg の生成プロンプト
Use case: photorealistic-natural. Create an original AI temporary photographic contact sheet, exactly 1536x1024 pixels, with EXACTLY 2 columns and 2 rows of equal 768x512 rectangular photo quadrants. No gutters, no gaps, no borders, no dividers, no text, no logos, no watermarks. Each quadrant is an independent realistic detail photograph, centered with comfortable margin and its own bright warm cream backdrop; no element crosses a quadrant boundary. Top-left: macro photograph of the worn scuffed corner of a brown leather bag, clear abraded leather edge. Top-right: close photograph of a beige fabric bag with an obvious brownish irregular stain clearly visible on the fabric. Bottom-left: close photograph looking inside an opened brown bag with clearly peeling and tacky degraded inner lining, visible curling flakes and damaged lining texture. Bottom-right: macro photograph of the brass clasp of a brown leather bag with clearly visible tarnish and green patina. Consistent soft bright daylight, restrained factual editorial photography, realistic worn materials, warm cream and brown palette. Show each damage detail clearly and elegantly without labels. These four photographs will be individually cropped at the exact quadrant boundaries for a Japanese home-visit secondhand goods appraisal demo website. Fictional unbranded bags only.

## 2026年9月25日 Figma最新版の反映

Figmaファイル `OEHmAk4qgpKI8OzLa3iUSa` のPC `9:442`・スマホ `9:1043` から取得。素材の加工・再生成は行っていません。

| ファイル | 使用箇所 | Figmaノード |
| --- | --- | --- |
| assets/hero.jpg | トップ、査定の3つの視点 | 23:651 / 87:739 / 40:563 / 40:715 |
| assets/products-grid.jpg | 査定品目・実績4種 | 39:461–39:476 / 40:461ほか |
| assets/conditions-grid.jpg | 傷・劣化の4例 | 9:545–9:548 / 9:1132–9:1135 |
| assets/figma/47ff8.png | ご利用の流れ01 | I9:597;49:2 / I9:1186;49:6 |
| assets/figma/dad8d.png | ご利用の流れ02 | I9:598;49:3 / I9:1187;49:7 |
| assets/figma/d103e.png | ご利用の流れ03 | I9:599;49:4 / I9:1188;49:8 |
| assets/figma/a9565.png | ご利用の流れ04 | I9:600;49:5 / I9:1189;49:9 |
| assets/figma/d3539.png | お客様の声01・PC | I92:456;91:3 |
| assets/figma/1468b.png | お客様の声02・PC | I92:470;91:11 |
| assets/figma/51893.png | お客様の声01・スマホ | 91:19 のインスタンス |
| assets/figma/a6427.png | お客様の声02・スマホ | 91:27 のインスタンス |
| assets/figma/6af7a.svg | フォーム選択欄 | 9:763 / スマホ同等ノード |

既存のhero.jpg・products-grid.jpg・conditions-grid.jpgは、Figmaが返した画像とSHA-256が完全一致したため再利用。人物イラストはFigma書き出しのPC184×184、スマホ128×128を、それぞれ92×92、64×64 CSS pxで表示しています。工程画像は1536×1024の元画像を指定枠にobject-fit: coverで配置しています。
