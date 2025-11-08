---
title: Neural Network Playground
description: ニューラル・ネットワークを視覚的に解説
slug: "neural-network-playground"
weight: 1
categories: "explainer"
address: https://neural-network-playground.dataviz.jp/
image: "images/cover_neural-network-playground.png"
---

{{< external-link-card
    url="https://neural-network-playground.dataviz.jp/"
    title="Neural Network Playground"
    image="images/cover_neural-network-playground.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}



## 主な機能

1. **ネットワーク構造の編集**：層数・ユニット数を GUI で変更し、非線形変換が境界に与える影響を即座に可視化。
2. **学習データの選択**：`Circle`・`Spiral`・`Gaussian` など複数の例題データセットを用意。
3. **ハイパーパラメーター調整**：学習率、正則化、ノイズ、活性化関数などを操作し、損失曲線の推移を確認。
4. **リンク共有**：設定を URL にエンコードして共有でき、授業や記事で同じ条件を再現可能。

## 学習の進め方

1. まず線形モデル（層・ユニットを最小構成）で基準性能を把握し、非線形ユニットや隠れ層を追加して改善度を比較します。
2. `Regularization` を L1/L2 で切り替え、`Regularization rate` を上げ下げすると過学習・汎化性能の違いが直感的に理解できます。
3. `Play` を一時停止して `Step` ボタンで更新を追うと、各ユニットの重み変化がアニメーションで観察できます。
