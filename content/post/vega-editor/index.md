---
title: Vega Editor
description: JSONでデータとチャートを記述できる
slug: "vega-editor"
weight: 3
categories: "data-visualization"
address: https://vega-editor.dataviz.jp/
image: "images/cover_vega-editor.png"
---

{{< external-link-card
    url="https://vega-editor.dataviz.jp/"
    title="Vega Editor"
    image="images/cover_vega-editor.png"
    site="dataviz.jp"
    description=""
>}}
{{< /external-link-card >}}


## 主な機能

1. **ライブエディタ**：左側で JSON を編集すると、右側のプレビューが即時更新されます。Lint エラーはステータスバーで確認可能。
2. **データプレビュー**：`Data` タブで現在読み込んでいるデータセットをテーブル表示し、変換結果も確認できます。
3. **表示設定**：シグナル値の手動調整、テーマ切り替え、View を PNG/SVG/JSON としてエクスポートする機能を備えます。
4. **Example ギャラリー**：Vega & Vega-Lite の公式サンプル（About 150+）をテンプレートとして読み込み、編集後に保存できます。

## 利用の流れ

1. `Open` メニューから Vega-Lite / Vega のサンプルを読み込み、仕様の構成を把握します。
2. 左側のエディタで `mark`, `encoding`, `transform` を編集し、`Run`（ショートカット：Shift+Enter）で再描画します。
3. 完成した仕様は `Export` で JSON をダウンロードし、Web アプリケーションや Observable Notebook に組み込めます。

