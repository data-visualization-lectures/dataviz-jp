---
title: Altairの使い方
description: 
slug: "altair"
weight: 1
categories: "explainer"
address: https://altair.dataviz.jp/
image: "images/cover_altair.png"
---

{{< external-link-card
    url="https://altair.dataviz.jp/"
    title="Altairの使い方"
    image="images/cover_altair.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}


## 基本的な利用手順（公式チュートリアル準拠）

1. `pandas` の DataFrame を用意し、`import altair as alt` でライブラリを読み込みます。
2. `alt.Chart(df).mark_*().encode()` というパターンでチャートタイプとエンコーディングを宣言します。
3. `.properties()` でタイトル・サイズ、`.interactive()` でパン／ズームなどのインタラクションを追加できます。
4. ノートブック環境では SVG／Canvas レンダラーが自動的に埋め込まれ、`.save()` で JSON・HTML・PNG などに出力可能です。


## 活用のポイント

- Vega-Lite の仕様を理解すると Altair の挙動が捉えやすく、`chart.to_dict()` で生成 JSON を確認すると構造の学習に役立ちます。
- Altair は宣言的記述が中心で for ループを多用せずに済むため、スライドやレポート向けにコードと図を同期させたいときに向いています。
- 複数チャートの連携は `alt.hconcat()` や `alt.vconcat()`、`resolve_scale()` 等を使えばダッシュボード的に組み合わせられます。
