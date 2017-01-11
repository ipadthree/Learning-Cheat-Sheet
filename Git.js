Rename a local and remote branch in git

1. Rename your local branch.
If you are on the branch you want to rename:
git branch -m new-name
If you are on a different branch:
git branch -m old-name new-name

2. Delete the old-name remote branch and push the new-name local branch.
git push origin :old-name new-name

3. Reset the upstream branch for the new-name local branch.
Switch to the branch and then:
git push origin -u new-name

git branch -d branch-name           删除local branch



git config --global user.email "your_email@example.com"       这样是globally设置github的邮箱，不加 最后的邮箱就是查看邮箱
git config user.email "your_email@example.com"                只在一个local repository里改变邮箱或查看邮箱。
