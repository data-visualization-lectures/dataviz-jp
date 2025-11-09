---
title: Color Brewer
description: カラースキーム選びを地図上でのシミュレーション
slug: "colorbrewer"
weight: 2
categories: "data-visualization-color"
address: https://colorbrewer.dataviz.jp/
image: "images/cover_colorbrewer.png"
---

{{< external-link-card
    url="https://colorbrewer.dataviz.jp/"
    title="Color Brewer"
    image="images/cover_colorbrewer.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}


データの性質にあったカラースキーム選びのためのツール。地図上にダミーのデータがすでに掲載されており、カラーのシミュレーションが手早く行うことが出来ます。

選んだカラースキームは、JavaScriptやCSSで活用できる値で出力したり、ASEファイル（Adobe社のPhotoshopなどのアプリ間で共有可能なカラー・スウォッチ）で出力することが出来ます。

![](images/screen_01.png)

![](images/screen_02.png)


## 使い方のポイント

- マップの背景色やラベルとのコントラストを考慮しながら「配色のバリアフリー」「紙への印刷」「複写に耐える」などのフラグで用途に合わせた配色を抽出できます。
- 選択したスキームは HEX・RGB・CMYK 値としてコピーできたり、`Export` から CSS / JSON や Adobe ASE 形式での書き出しが可能です。
- 階級分類数（Classes）を 3〜12 の範囲で切り替えられるので、データの階級区分を決める際のガイドとしても役立ちます。

