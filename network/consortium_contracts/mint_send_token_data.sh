echo if no address specified will mint token to default address
echo usage: command "data to store" "address"
truffle exec erc720_transaction_send.js --network qwallet  --address "$2" --set_data "$1" --id_id "$3"
