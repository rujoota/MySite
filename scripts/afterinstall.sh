#change directory
cd /home/ec2-user/MySite
chown -R ec2-user:ec2-user .
chmod -R 755 .

# change user - required for npm install to work correctly
# su ec2-user<<'EOF'
echo "user changed here..."
cd /home/ec2-user/MySite
echo "dir changed"
#install application
npm install
npm install aws-sdk
echo "npm install complete"
#start application
node server.js
# EOF