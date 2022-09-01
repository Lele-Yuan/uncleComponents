pnpm run build
cd dist

# 提交到本地仓库
git init
git add -A
git commit -m 'republish pages'

# 提交到 git@github.com:Lele-Yuan/uncleComponents.git 项目的 doc 分支
# doc 分支作为 gitHub pages 的部署分支
echo 'push to doc and publish pages'
git push -f git@github.com:Lele-Yuan/uncleComponents.git master:doc
echo 'has pushed to doc'

cd -