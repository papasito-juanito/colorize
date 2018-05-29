sudo iptables -t nat -I PREROUTING -p tcp --dport 80 -j REDIRECT --to-ports 8080
https://gist.github.com/kentbrew/776580