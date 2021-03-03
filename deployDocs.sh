npm run updateDocs
git commit -a -m "updates docs"
git push origin main
cd docs
GIT_USER=jussiry USE_SSH=true npm run deploy