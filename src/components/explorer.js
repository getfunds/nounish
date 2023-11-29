import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import './styles.css';
import { ScaleLoader } from 'react-spinners';


const Explorer = () => {
  const [web3, setWeb3] = useState(null);
  const [contracts, setContracts] = useState([]);
  const [ipfsData, setIpfsData] = useState([]);
  const [ipfsContents, setIpfsContents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const infuraUrl = 'https://eth-mainnet.g.alchemy.com/v2/o79ANrkWuaUCLNyvFGPbDHBe-mYFswAk'; 
        const web3Instance = new Web3(new Web3.providers.HttpProvider(infuraUrl));
        setWeb3(web3Instance);
      } catch (error) {
        console.error('Error connecting to Ethereum via Infura', error);
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    
    const contractAddresses = ['0x9c8ff314c9bc7f6e59a9d9225fb22946427edc03', '0x4b10701Bfd7BFEdc47d50562b76b436fbB5BdB3B', '0x2E5A7ea22C420B431811eCb9572e39106dDBd1D8', '0xF5331380e1d19757388A6E6198BF3BDc93D8b07a', '0x73a8CE3f662a1e66563D05606BC5a8aB71a4D924', '0x643AfeE78bD8C693Be049AA40e337fD15CdFB61b',  '0x15a2d6c2b4b9903c27f50cb8b32160ab17f186e2', '0xD6c4cB5A3e040abC8bE977dC10B658Ec9072a1F4'];
    const abi = [{"inputs":[{"internalType":"address","name":"_noundersDAO","type":"address"},{"internalType":"address","name":"_minter","type":"address"},{"internalType":"contract INounsDescriptor","name":"_descriptor","type":"address"},{"internalType":"contract INounsSeeder","name":"_seeder","type":"address"},{"internalType":"contract IProxyRegistry","name":"_proxyRegistry","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[],"name":"DescriptorLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract INounsDescriptor","name":"descriptor","type":"address"}],"name":"DescriptorUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"MinterLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"minter","type":"address"}],"name":"MinterUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NounBurned","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"uint48","name":"background","type":"uint48"},{"internalType":"uint48","name":"body","type":"uint48"},{"internalType":"uint48","name":"accessory","type":"uint48"},{"internalType":"uint48","name":"head","type":"uint48"},{"internalType":"uint48","name":"glasses","type":"uint48"}],"indexed":false,"internalType":"struct INounsSeeder.Seed","name":"seed","type":"tuple"}],"name":"NounCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"noundersDAO","type":"address"}],"name":"NoundersDAOUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"SeederLocked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract INounsSeeder","name":"seeder","type":"address"}],"name":"SeederUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"nounId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint96","name":"votes","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"dataURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"descriptor","outputs":[{"internalType":"contract INounsDescriptor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isDescriptorLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isMinterLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSeederLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lockDescriptor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockSeeder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"noundersDAO","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyRegistry","outputs":[{"internalType":"contract IProxyRegistry","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seeder","outputs":[{"internalType":"contract INounsSeeder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"seeds","outputs":[{"internalType":"uint48","name":"background","type":"uint48"},{"internalType":"uint48","name":"body","type":"uint48"},{"internalType":"uint48","name":"accessory","type":"uint48"},{"internalType":"uint48","name":"head","type":"uint48"},{"internalType":"uint48","name":"glasses","type":"uint48"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newContractURIHash","type":"string"}],"name":"setContractURIHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INounsDescriptor","name":"_descriptor","type":"address"}],"name":"setDescriptor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_noundersDAO","type":"address"}],"name":"setNoundersDAO","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INounsSeeder","name":"_seeder","type":"address"}],"name":"setSeeder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"votesToDelegate","outputs":[{"internalType":"uint96","name":"","type":"uint96"}],"stateMutability":"view","type":"function"}];

    
    const loadContracts = async () => {
      try {
        if (!web3) {
          console.error('Web3 not initialized');
          return;
        }

        const contractInstances = contractAddresses.map(address => new web3.eth.Contract(abi, address));
        setContracts(contractInstances);
        setLoaded(true);
      } catch (error) {
        console.error('Error loading smart contracts', error);
      }
    };

    if (!loaded && web3) {
      loadContracts();
    }
  }, [web3, loaded]);

  const fetchIpfsContent = async (ipfsLink, contractAddress) => {
    try {
      const ipfsUrl = `https://ipfs.io/ipfs/${ipfsLink.replace('ipfs://', '')}`;
      const response = await fetch(ipfsUrl);
      const data = await response.json();
      return { ...data, contractAddress };
    } catch (error) {
      console.error('Error fetching content from IPFS', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchIpfsData = async () => {
      try {
        const ipfsContents = await Promise.all(ipfsData.map(({ ipfsLink, contractAddress }) => fetchIpfsContent(ipfsLink, contractAddress)));
        setIpfsContents(ipfsContents);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching IPFS data', error);
      }
    };

    fetchIpfsData();
  }, [ipfsData]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (contracts.length > 0 && loaded) {
          const results = await Promise.all(
            contracts.map(async (contract) => {
              const contractAddress = contract.options.address;
              const contractData = await contract.methods.contractURI().call();
              return { ipfsLink: contractData, contractAddress };
            })
          );
          setIpfsData(results);
        }
      } catch (error) {
        console.error('Error fetching data from the smart contracts', error);
      }
    };

    fetchData();
  }, [contracts, loaded]);

  


  return (
    <div>
       <div className="flexCenterStyle" > Nounish DAOs Derivatives </div>
       <div className="flexCenterStyle">On-chain Explorer</div>
         
         <div className="containerStyle" >
         {loading ? (
          <div className="centeredContainer">
          <div>
            <ScaleLoader /> Loading...
          </div>
        </div>
        ) : ( 
    <table className="tableStyle">
        <thead className="headerCellStyle">
            <tr>
                <th scope="col" className="headerCellStyle">
                 DAO Name
                </th>
                <th scope="col" className="headerCellStyle">
                  DAO Description
                </th>
                <th scope="col" className="headerCellStyle">
                Official Link
                </th>
            </tr>
        </thead>
        
        <tbody>
        
        {ipfsContents.map((ipfsContent, index) => (
        
            <tr key={index} className="columnsStyle">
                <th scope="row" className="columnStyle">
                
                <div className="container">
                  
        <div className="imgContainer">

        {ipfsContent.image && (
            <img src={`https://ipfs.io/ipfs/${ipfsContent.image.slice(-46)}`} alt={ipfsContent.name}
            layout="fixed"
            objectFit="contain"
            width={50}
            height={50}
            style={{ borderRadius: '50%' }}
          />
          )} 

        </div>
          <div className="textContainer">{ipfsContent.name}</div>
          <p className="address">{ipfsContent.contractAddress}</p>
        </div>
           </th>
                <td className="textContainer" >
                {ipfsContent.description}
                </td>
                
<td className="textContainer">
  <a href={ipfsContent.external_link} target="_blank" rel="noopener noreferrer">
    {ipfsContent.external_link}
  </a>
</td>



            </tr>
             ))}
        </tbody>

    </table>
    )}
    </div>
        </div>
        );
}
export default Explorer;

