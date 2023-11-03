//取得元素 通过 class 方式
import { ethers } from './ethers-5.2.esm.min.js';
const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');
const sendEthButton = document.querySelector('.sendEthButton');
const gendEthButton = document.querySelector('.gendEthButton');
const sendAmounts = document.getElementById("sendAmounts");
//记录账户
let accounts = [];
//获取账户
ethereumButton.addEventListener('click', () => {
    getAccount();
});
ethereum.on('accountsChanged', function (accounts) {
    showAccount.innerHTML = accounts[0];
})
async function getAccount() {
    // accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts);
    showAccount.innerHTML = accounts[0];//修改 showAccount 元神的 html 为 账户内容
}

sendEthButton.addEventListener('click', () => {
    console.log(accounts);
    let sendvalue = ethers.utils.parseEther(sendAmounts.value)
    console.log(sendvalue._hex);
    ethereum.request({
        method: 'eth_sendTransaction',
        params: [
            {
                from: accounts[0],
                to: '0xA0561defaa11Fa19A0A992d8DBEA0818c2Cc172f',
                value: sendvalue._hex,
                data: '0x',
            },
        ],
    }).then(
        (txHash) => console.log(txHash)
    ).catch(
        (error) => console.error
    );
});

gendEthButton.addEventListener('click', () => {
    setAccount();
});

const provider = new ethers.providers.Web3Provider(window.ethereum)
async function setAccount() {
    await provider.send("eth_requestAccounts", []);
    // let balance = await provider.getNetwork()
    let balance = ethers.utils.parseEther("0.003")
    let sendvalue = ethers.utils.parseEther(sendAmounts.value)
    console.log(sendvalue);
}

// MetaMask requires requesting permission to connect users accounts