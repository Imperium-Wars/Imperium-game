/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import styles from "../styles/keymint.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useAccount,
  useConnectors,
  useStarknetExecute,
} from "@starknet-react/core";
import Wallets from "../components/UI/wallets";
import Button from "../components/UI/button";
import { hexToFelt } from "../utils/felt";
import { keyContract } from "../utils/contracts";

const Cards: NextPage = () => {
  const router = useRouter();
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { status, address } = useAccount();
  const { available, connect, disconnect } = useConnectors();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [signature, setSignature] = useState<string[]>([]);
  const randomTokenId: number = Math.floor(Math.random() * 1000000000000);

  const callData = {
    contractAddress: keyContract,
    entrypoint: "whitelist_mint",
    calldata: [randomTokenId, 0, signature?.[0], signature?.[1]],
  };
  const { execute, data } = useStarknetExecute({
    calls: callData,
  });

  useEffect(() => {
    if (!isConnected) {
      available.length === 1 ? connect(available[0]) : setHasWallet(true);
    } else {
      router.push("/keymint");
    }
  }, [isConnected]);

  useEffect(() => {
    status === "connected" ? setIsConnected(true) : setIsConnected(false);
  }, [status]);

  useEffect(() => {
    if (address) {
      fetch(`/api/${hexToFelt(address)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            setErrorMessage(data.error);
          } else {
            setErrorMessage(undefined);
            setSignature(data);
          }
        });
    }
  }, [address]);

  function disconnectByClick(): void {
    disconnect();
    setHasWallet(true);
  }

  function mint(): void {
    execute();
  }

  return (
    <div className={styles.container}>
      <div className={styles.blackFilter}></div>
      {errorMessage ? (
        <div className={styles.main}>
          <h1 className={styles.homeTitle}>You are not whitelisted</h1>
          <Button onClick={disconnectByClick}>Try another account</Button>
        </div>
      ) : (
        <div className={styles.main}>
          <video loop autoPlay muted className={styles.video} width={350}>
            <source src="/keyImperiumWars.mp4" />
          </video>
          <div className="mt-5">
            <Button
              onClick={isConnected ? () => mint() : () => setHasWallet(true)}
            >
              Mint your key
            </Button>
          </div>
        </div>
      )}

      <Wallets closeWallet={() => setHasWallet(false)} hasWallet={hasWallet} />
    </div>
  );
};

export default Cards;
