import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../components/UI/button";
import styles from "../styles/index.module.css";
import { useConnectors, useAccount } from "@starknet-react/core";
import Wallets from "../components/UI/wallets";

const Home: NextPage = () => {
  const router = useRouter();
  const [hasWallet, setHasWallet] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const { status } = useAccount();
  const { available, connect } = useConnectors();

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

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="centerContainer">
          <h1 className={styles.homeTitle}>Imperium Wars</h1>
          <div className="flex">
            <div className="m-2 z-0">
              <Button
                onClick={
                  isConnected
                    ? () => router.push("/explore")
                    : () => setHasWallet(true)
                }
              >
                Mint key
              </Button>
            </div>
            <div className="m-2 z-0">
              <Button onClick={() => router.push("/empire")}>See Cards</Button>
            </div>
          </div>
        </div>
      </div>
      <Wallets closeWallet={() => setHasWallet(false)} hasWallet={hasWallet} />
    </div>
  );
};

export default Home;
