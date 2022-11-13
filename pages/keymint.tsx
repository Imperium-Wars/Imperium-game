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
  const { status, account } = useAccount();
  const { available, connect, disconnect } = useConnectors();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [signature, setSignature] = useState<string[]>([]);
  const randomTokenId: number = Math.floor(Math.random() * 1000000000000);

  const callData = {
    contractAddress: keyContract,
    entrypoint: "whitelistMint",
    calldata: [randomTokenId, signature?.[0], signature?.[1]],
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
    if (account) {
      fetch(`http://localhost:3000/api/${hexToFelt(account.address)}`)
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
  }, [account]);

  function disconnectByClick(): void {
    disconnect();
    setHasWallet(true);
  }

  function mint(): void {
    execute();
  }

  return (
    <div className={styles.container}>
      {errorMessage ? (
        <div className={styles.main}>
          <h1 className={styles.homeTitle}>You&apos;re not whitelisted</h1>
          <Button onClick={disconnectByClick}>Try another account</Button>
        </div>
      ) : (
        <div className={styles.main}>
          <video loop autoPlay muted className={styles.video} width={400}>
            <source src="/keyImperiumWars.mp4" />
          </video>
          <div className="mt-5">
            <Button
              onClick={isConnected ? () => mint() : () => setHasWallet(true)}
            >
              Mint Your key
            </Button>
          </div>
        </div>
      )}

      <Wallets closeWallet={() => setHasWallet(false)} hasWallet={hasWallet} />
    </div>
  );
};

export default Cards;