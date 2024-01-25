[see](https://github.com/bufbuild/protobuf-es)


# how?

1. `yarn install` as `npm install @bufbuild/protobuf @bufbuild/protoc-gen-es @bufbuild/buf`
2. `yarn genBuf src/proto` see `package.json -> script`
3. `yarn test`  see `make.test.ts`

# 別リポジトリへのPR

- PRマージ後 PR用ブランチの自動削除をしておく
https://docs.github.com/ja/repositories/configuring-branches-and-merges-in-your-repository/configuring-pull-request-merges/managing-the-automatic-deletion-of-branches