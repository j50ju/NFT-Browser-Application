const origin = "https://deep-index.moralis.io";
const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImIyYzlhZDA2LTFmMmUtNDg0My1hOTFjLWU4MzVlZTQxNzhjZCIsIm9yZ0lkIjoiMzkxMzgxIiwidXNlcklkIjoiNDAyMTU2IiwidHlwZUlkIjoiYjVmMzZjMTMtNjEwNi00ZGM2LTg1NDAtODc2YzkyZDQwODY4IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTUxMzg2MDEsImV4cCI6NDg3MDg5ODYwMX0.6UWx8L64SGPoOlVEfUeIYcGpYcXysqpX0CeA2icLjo0";


export const getContractNFTs = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};


export const getContractTrades = async (tokenAddress) => {
  const url = new URL(`${origin}/api/v2/nft/${tokenAddress}/trades`);
  url.searchParams.append("chain", "eth");
  url.searchParams.append("marketplace", "opensea");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};


export const getNFTTransfers = async (tokenAddress, tokenId) => {
  const url = new URL(
    `${origin}/api/v2/nft/${tokenAddress}/${tokenId}/transfers`
  );
  url.searchParams.append("chain", "eth");
  url.searchParams.append("format", "decimal");
  url.searchParams.append("limit", "20");


  const response = await fetch(url, {
    headers: {
      accept: "application/json",
      "X-API-KEY": apiKey,
    },
  });
  return response.json();
};
