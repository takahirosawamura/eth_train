const MyToken = artifacts.require('./MyToken.sol')

/*マイグレーションの仕組みは、デプロイの順番や状態を管理するため、マイグレーションファイル名は [数字]_[名称].js という形式にする必要がある。*/


/*トークン発行量が 50,000 MTKN になるように、MyToken のコンストラクタへ initialSupply の値を渡す。*/
module.exports = (deployer) => {
  let initialSupply = 50000e18
  deployer.deploy(MyToken, initialSupply)
}
