---
title: Embedding Projector
description: 次元削減アルゴリズムの性能を視覚的に理解
slug: "embedding-projector"
weight: 1
categories: "explainer-ai"
address: https://embedding-projector.dataviz.jp/
image: "images/cover_embedding-projector.png"
---

{{< external-link-card
    url="https://embedding-projector.dataviz.jp/"
    title="Embedding Projector"
    image="images/cover_embedding-projector.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}


教師なし学習による分類と次元削減を、いくつかのアルゴリズムでビジュアルに比較できます。色付けするとわかりやすいです。

オススメ操作は、以下の通りです。

1. 左上のデータ欄から「Mnist with images」を選ぶ。これは手書きの0〜9画像です。
2. 色の割り当てからLabelを選ぶ。0〜9画像が別々の色になります。
3. 左下のパネルから、最初はPCAになってますが、t-SNE、UMAPに切り替えると、3D空間内での分類が変化します。
4. どれがより正確に分類できるかな…？

