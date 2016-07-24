xcopy "dist" "..\publish\code" /e /i /h
cd..
cd publish
cd code
git push -u origin master