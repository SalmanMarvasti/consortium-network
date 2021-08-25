# consortium-network

default env paths before running docker compose up or using the /network/*.sh scripts:
* $QUORUM_VERSION: Defaults to -2.7.0
* ${QUORUM_CONSENSUS: Default to IBFT -istanbul which means consortium members dont have to trust each other as long as the majority of validators are trustable

To start run the { /network/start.sh} script which will bring up a 3 node ETH network and 3 Tessera nodes with some default IBFT genesis block.
Quorum supports larger contract storage space by default than ethereum as gas price is not a factor in private .
IBFT is chosen due to requirement that members dont trust each other
4 Validators are set which can be managed by consortium or neutral party

outside the setup the smart contract code and scripts reside in /network/consortium_contracts directory
