#!/bin/bash
#update yum command
yum -y update

#Install node
curl --location https://rpm.nodesource.com/setup_6.x | sudo bash -
yum -y install nodejs

#Verify node version
node -v

# install bower
npm install bower -g

#update host file
chmod 777 /etc/hosts
iptoreplace=$(curl http://169.254.169.254/latest/meta-data/local-ipv4)
sed -i -e "s/127.0.0.1/$iptoreplace/g" /etc/hosts

#Install git
yum -y install git

#Go to user home directory
cd /home/ec2-user/