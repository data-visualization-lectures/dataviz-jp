---
title: Embedding Projector
description: 次元削減アルゴリズムの性能を視覚的に理解
slug: "embedding-projector"
weight: 1
categories: "explainer"
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


高次元ベクトルのクラスタを確認し、誤分類サンプルや異常値を視覚的に発見する用途でよく利用されます。

TensorBoard との統合により、学習過程で随時 Embedding を更新しながらトレーニングの挙動を把握できます。

t-SNE・UMAP はランダムシードや初期化に依存するため、公式ドキュメントに記載されているパラメーター（学習率・近傍数）を調整しながら安定したマッピングを探ると良いでしょう。

- 対応フォーマット：`tsv`／`json`／`csv` の特徴量とメタデータ、あるいは TensorFlow のチェックポイントからの直接読み込み

## 主な機能

1. **次元削減**：PCA・t-SNE・UMAP を搭載し、計算方法やステップ数をインタラクティブに変更できます。
2. **可視化スタイル**：点群をラベルやメタデータの値で色分けし、選択したサンプルの近傍をハイライトできます。
3. **検索・フィルタ**：テキスト検索やメタデータ列でのフィルタリング、任意ポイントの固定表示が可能です。
4. **エクスポート**：現在のビューを画像として保存したり、設定を JSON として出力して再利用できます。

## 利用手順（公式ドキュメント準拠）

1. TensorBoard で学習ログを出力する際に `projector_config.pbtxt` を用意し、埋め込みベクトルとメタ情報のパスを指定します。
2. ローカルで `tensorboard --logdir=<LOG_DIR>` を立ち上げ、`http://localhost:6006/#projector` にアクセスすると Embedding Projector が利用可能です。
3. 既存のモデル可視化を試す場合は、公式サイトの “Try the examples” から MNIST や Word2Vec のサンプルプロジェクトを読み込めます。

