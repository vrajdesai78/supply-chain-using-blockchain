import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
  name: "SupplyChain",
  preferredNetwork: "jakartanet",
});

export const connectWallet = async () => {
  await wallet.requestPermissions({ network: { type: "jakartanet" } });
};

export const getAccount = async () => {
  const activeAccount = await wallet.client.getActiveAccount();
  if (activeAccount) {
    return activeAccount.address;
  } else {
    return "";
  }
};
