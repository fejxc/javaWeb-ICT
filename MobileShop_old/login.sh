#!/bin/sh
logger "开始检测网络认证状态"
KEYWORD=$(curl -s http://baidu.com | grep "NextURL")
if [[ ${KEYWORD} != "" ]]; then
  logger "检测到尚未认证，尝试自动认证"
  CURRENT_IP=$(ifconfig | grep inet | grep -v inet6 | grep -v 127 | grep -v 192 | awk '{print $(NF-2)}' | cut -d ':' -f2)
curl "http://192.168.167.46:801/eportal/extern/ip/ip/1/loginbox.js?version=1.4_1600333580651" \
  -H "Connection: keep-alive" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36" \
  -H "Accept: */*" \
  -H "Referer: http://192.168.167.46/a70.htm" \
  -H "Accept-Language: zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6" \
  -H "Cookie: program=ip; vlan=0; md5_login2=1809102021%7C071710; ip=1${CURRENT_IP}" \
  # 含有变量时只能使用双引号
  SUCCESS=$(echo ${LOGIN_STATUS} | grep success)
  if [[ ${SUCCESS} != "" ]]; then
    logger "自动认证成功"
  else
    LOGIN_STATUS=$(echo ${LOGIN_STATUS} | cut -d ',' -f3 | cut -d '"' -f4)
    logger "自动认证失败: ${LOGIN_STATUS}"
  fi
else
  logger "检测到已经认证"

