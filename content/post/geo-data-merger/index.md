---
title: (Geo) DataMerger
description: 地理データとテーマデータを手軽に結合
slug: "geo-data-merger"
weight: 1
categories: "data-wrangling-map"
address: https://geo-data-merger.dataviz.jp/
image: "images/cover_geo-data-merger.png"
---

{{< external-link-card
    url="https://geo-data-merger.dataviz.jp/"
    title="(Geo) DataMerger"
    image="images/cover_geo-data-merger.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}

## 主な機能

1. **地図データとテーマ・データの読み込み**：GeoJSON・TopoJSON・CSV・JSON を取り込み、プレビューで列名を確認できます。
2. **キー結合**：地図データ（Feature の `properties`）とテーマ・データのキー列を指定してマージします。Join モードは左結合が基本です。
3. **不要列の除去**：マージ後に除外したい列を UI 上で選択し、出力ファイルから取り除くことができます。
4. **出力形式**：GeoJSON／TopoJSON／CSV に加え、TopoJSON で出力することもできます。

## 使い方の流れ

1. 画面左の`File 1` に地図データ（GeoJSON や TopoJSON）を、右の `File 2` にテーマ・データ（CSV）を読み込みます。
2. 各データセットのプレビューから結合に使う列を選択し、キーが一致するか確認します。
3. `Save` ボタンで書き出し形式を選択し、最終的なファイルを保存します。
