#!/bin/bash
function show_para(){
	echo "输入的格式如下 ./fastbuild.sh 上传的内容"
}
if [[ $1 = "" ]]
then
    show_para
else
	git add .
	git commit -m $1
	git pull --rebase
	echo "判断是否冲突,没有冲突输入'ok'＋Enter,有直接Enter"
	read name
	if [[ $name = 'ok' ]]
	then
	    git push
    else
        echo "请先解决冲突"
    fi
fi
echo "======  END  ========="