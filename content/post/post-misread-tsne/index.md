---
title: t-SNEを効果的に使用する方法
description: t-SNEを視覚的に解説
slug: "post-misread-tsne"
weight: 1
categories: "explainer"
address: https://post-misread-tsne.dataviz.jp/
image: "images/cover_post-misread-tsne.png"
---

{{< external-link-card
    url="https://post-misread-tsne.dataviz.jp/"
    title="t-SNEを効果的に使用する方法"
    image="images/cover_post-misread-tsne.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}



## 記事の構成

1. **イントロダクション**：次元削減の目的と、t-SNE を他のアルゴリズムと比較するときの注意点を紹介。
2. **Perplexity の役割**：近傍サイズを制御するパラメーターがクラスタ構造に与える影響を、インタラクティブに示しています。
3. **Learning Rate**：学習率の設定による収束の違いと、過度に小さい／大きい値を選ぶリスクをアニメーションで提示。
4. **初期配置とランダム性**：初期化シードを変更した結果を並列表示し、同じデータでも可視化が変動することを示唆。

## 活用のポイント

- 記事内のスライダーで perplexity や iteration を変更すると、t-SNE の結果がどのように変形するかリアルタイムで確認できます。
- 「Do's and Don'ts」のチェックリストでは、クラスタ間距離の解釈や密度の読み取りに関する注意点が整理されています。
- 参考文献には Laurens van der Maaten & Geoffrey Hinton の原論文（2008）が掲載されており、数式まで深掘りしたい場合の出発点になります。

