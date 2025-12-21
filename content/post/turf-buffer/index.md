---
title: バッファ生成ツール
description: 指定した半径指定をブラウザで手軽に
slug: "turf-buffer"
weight: 1
categories: "data-wrangling-map"
address: https://turf-buffer.dataviz.jp/
image: "images/cover_turf-buffer.png"
---

{{< external-link-card
    url="https://turf-buffer.dataviz.jp/"
    title="バッファ生成ツール"
    image="images/cover_turf-buffer.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}


緯度経度つきのCSVファイルを元に、バッファ（指定した半径を正円）化することができるツールです。

データ地図上で「ある地点から徒歩10分以内」といった、指定した半径でのバッファ化を行う際、デスクトップアプリである QGIS を使う場合は以下の手順が必要になります。

- 1. データファイルを地理座標系から地域ごとに異なる投影座標系へ変換
- 2. バッファ化の操作を実行
- 3. 再び地理座標系に戻して出力

この複雑な工程を避け、ブラウザ上で数クリックで完結できるようにしたツールです。
