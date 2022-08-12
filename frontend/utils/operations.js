// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

export const addProduct = async (productID, productName, description) => {
    try {
        const contractInstance = await tezos.wallet.at("KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd");
        const op = await contractInstance.methods.add_product(
            description, productID, productName
        ).send();
        await op.confirmation();
    } catch (err) {
        throw err;
    }
};

export const updateProduct = async (latitude, longitude, productID, statusDescription, time) => {
    console.log(latitude, longitude, productID, statusDescription, time);
    console.log(typeof time);
    try {
        const contractInstance = await tezos.wallet.at("KT1T96VuVwC36kYXNRKcijbxwFCpLFLKUhVd");
        const op = await contractInstance.methods.update_status(latitude, longitude, productID, statusDescription, time).send();
        await op.confirmation();
    } catch (err) {
        throw err;
    }
};
