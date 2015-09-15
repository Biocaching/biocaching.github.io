#!/bin/sh
git pull && rsync -va * bjorn@88.80.190.206:biocaching/. --exclude til_linode.sh
ssh li sudo  rsync -va /home/bjorn/biocaching/* /var/www/.
ssh li sudo service apache2 restart
