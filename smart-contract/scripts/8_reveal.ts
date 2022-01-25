import NftContractProvider from '../lib/NftContractProvider';

async function main() {
  if (undefined === process.env.COLLECTION_URI_PREFIX || process.env.COLLECTION_URI_PREFIX === 'ipfs://__CID___/') {
    throw '\x1b[31merror\x1b[0m ' + 'Please add the URI prefix to the ENV configuration before running this command.';
  }

  // Attach to deployed contract
  const contract = await NftContractProvider.getContract();

  // Update root hash (if changed)
  if ((await contract.uriPrefix()) !== process.env.COLLECTION_URI_PREFIX) {
    console.log(`Updating the URI prefix to: ${process.env.COLLECTION_URI_PREFIX}`);

    await (await contract.setUriPrefix(process.env.COLLECTION_URI_PREFIX)).wait();
  }
  
  // Revealing the collection (if needed)
  if (!await contract.revealed()) {
    console.log('Revealing the collection...');

    await (await contract.setRevealed(true)).wait();
  }

  console.log('Your collection is now revealed!');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
