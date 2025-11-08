---
title: Diffusion Explainer
description: Stable Diffusionがどのようにあなたのテキストプロンプトを画像に変換するかを学ぶ
slug: "diffusion-explainer"
weight: 1
categories: "explainer-ai"
address: https://diffusion-explainer.dataviz.jp/
image: "images/cover_diffusion-explainer.png"
---

{{< external-link-card
    url="https://diffusion-explainer.dataviz.jp/"
    title="Diffusion Explainer"
    image="images/cover_diffusion-explainer.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}

## コンテンツの構成

1. **Forward Process**：入力画像へノイズを段階的に加えるプロセスをアニメーションで確認できます。β スケジュールの違いが視覚的に比較可能です。
2. **Reverse Process**：学習済みモデルがノイズ除去を行う逆過程をステップごとに表示し、各ステップの予測結果を比較できます。
3. **U-Net Architecture**：代表的な生成モデルで使われる U-Net の構造をパネル表示し、層ごとの特徴マップを確認できます。
4. **Classifier-Free Guidance**：ガイダンススケールを変えたときの生成結果の変化を並列で閲覧できます。

## 読み進め方のヒント

- 画面右上のメニューから章を選択すると段階的な説明に沿って再生が始まります。冒頭の「Introduction」で表記や記号を整理してから本編に入ると理解しやすくなります。
- 各セクションでは詳細なテキスト解説と参考文献が併記されているため、特定のアルゴリズムを深掘りしたい場合は引用リンクを辿ると原論文にアクセスできます。
- ハイパーパラメーターを調整できる UI が用意されているので、β スケジュールやステップ数を変えたときの挙動をその場で確認しながら学習できます。

