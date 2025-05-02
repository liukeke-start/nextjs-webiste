/*
 * @Author:  
 * @Date: 2024-07-04 10:44:20
 * @LastEditors:  
 * @LastEditTime: 2025-05-02 09:04:40
 * @FilePath: /nextjs-webiste/src/components/ConnectWallet.tsx
 */

import React, { useEffect, useState } from 'react'
import { ConnectButton, lightTheme } from "thirdweb/react"
import { createWallet } from "thirdweb/wallets";
import { client } from '../constants/constant'
import { useActiveWallet } from "thirdweb/react"
import { useSwitchActiveWalletChain } from "thirdweb/react"
import { bscTestnet, bsc } from 'thirdweb/chains'
import { CHAIN_ID } from '../constants/setting';
import { BSCTESTNET_CHAIN, BSC_CHAIN } from '../constants/constant';

// 获取对应链的配置，无需hooks
const getBscChain = () => {
  if (CHAIN_ID === BSCTESTNET_CHAIN) {
    return bscTestnet;
  } else if (CHAIN_ID === BSC_CHAIN) {
    return bsc;
  }
  return bscTestnet; // 默认返回测试网
}

const wallets = [
  createWallet("com.okex.wallet"),
  createWallet("pro.tokenpocket"),
  createWallet("im.token"),
  createWallet("io.metamask"),
]

const ConnectWallet = () => {
  // 状态和钩子
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState('');
  const wallet = useActiveWallet();
  const switchActiveChain = useSwitchActiveWalletChain();

  // 获取地址
  const address = wallet?.getAccount()?.address;

  // 切换链的函数
  const handleSwitchChain = async () => {
    if (!wallet || !switchActiveChain) return;

    try {
      setIsConnecting(true);
      setError('');

      if (CHAIN_ID === BSCTESTNET_CHAIN) {
        await switchActiveChain(bscTestnet);
      } else if (CHAIN_ID === BSC_CHAIN) {
        await switchActiveChain(bsc);
      }
    } catch (err) {
      console.error("Error switching chain:", err);
      setError('Failed to switch chain');

      try {
        await wallet.disconnect();
      } catch (disconnectErr) {
        console.error("Error disconnecting wallet:", disconnectErr);
      }
    } finally {
      setIsConnecting(false);
    }
  };

  // 当钱包连接后自动切换到正确的链
  useEffect(() => {
    if (address && !isConnecting) {
      handleSwitchChain();
    }
  }, [address, wallet]);

  // 断开连接处理
  const handleDisconnect = () => {
    try {
      wallet?.disconnect();
    } catch (err) {
      console.error("Error disconnecting:", err);
    }
  };

  // 连接处理
  const handleConnect = () => {
    // console.log('Wallet connected');
    setError('');
  };

  return (
    <div className='wallet-connect-btn'>
      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
      <ConnectButton
        theme={lightTheme({
          colors: {
            borderColor: '#ffffff',
            connectedButtonBg: '#00000000',
            primaryButtonText: '#444444',
          },
        })}
        connectModal={{ size: "wide" }}
        client={client}
        chain={getBscChain()}
        wallets={wallets}
        onDisconnect={handleDisconnect}
        onConnect={handleConnect}
        connectButton={{
          label: "Connect Wallet"
        }}
      />
    </div>
  );
};

export default ConnectWallet;