[see](https://github.com/bufbuild/protobuf-es)


# how?

1. `yarn install` as `npm install @bufbuild/protobuf @bufbuild/protoc-gen-es @bufbuild/buf`
2. `yarn genBuf src/proto` see `package.json -> script`
3. `yarn test`  see `make.test.ts`

# 別リポジトリへのPR

- PRマージ後 PR用ブランチの自動削除をしておく
https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches

# see
- ローカルで検証した時
- https://qiita.com/silvia_hacks/items/fbda864c3bd8017bee1b#github-actions%E3%81%A7%E4%BB%96%E3%81%AE%E3%83%91%E3%83%96%E3%83%AA%E3%83%83%E3%82%AF%E3%83%AA%E3%83%9D%E3%82%B8%E3%83%88%E3%83%AA%E6%93%8D%E4%BD%9C%E5%A4%B1%E6%95%97%E3%81%BE%E3%81%A7

- Organizationにもっていくとき
- https://zenn.dev/mh4gf/articles/copy-file-to-another-repository
