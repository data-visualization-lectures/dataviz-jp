---
title: GAN Lab
description: 
slug: "ganlab"
weight: 1
categories: "explainer"
address: https://ganlab.dataviz.jp/
image: "images/cover_ganlab.png"
---


## コンテンツ構成

1. **Playground**：2 次元データセット上で GAN の学習プロセスを可視化し、Generator / Discriminator のパラメーターをリアルタイム操作できます。
2. **Analysis パネル**：損失関数の推移、生成データの分布、決定境界などを並列表示し、トレーニングの進み具合を把握できます。
3. **Step-by-step チュートリアル**：公式サイト内のステップガイドでは、各ハイパーパラメーターがどのように学習結果へ影響するかを例示しています。

## 使い方のヒント

- プルダウンから `Circle` や `Moon` など代表的な合成データセットを読み込み、上部の `Learning Rate` や `Noise Dim` を変更しながら挙動を比較すると理解が深まります。
- `Manual Step` を使うと 1 ステップずつ学習を進められるため、Generator と Discriminator の更新が交互に行われる様子を丁寧に追跡できます。
- 右上の `Export` 機能で設定を JSON として保存でき、授業やワークショップで同一条件のシナリオを再現する際に便利です。

