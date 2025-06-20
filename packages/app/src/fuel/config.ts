export interface FuelChainConfig {
  id: string;
  name: string;
  network: string;
  nativeCurrency: {
    decimals: number;
    name: string;
    symbol: string;
  };
  rpcUrls: {
    public: {
      http: string[];
    };
  };
  blockExplorers: {
    default: {
      name: string;
      url: string;
    };
  };
  testnet: boolean;
  color: string;
  logo: string;
  faucetUrl?: string;
  layer: 'L1' | 'L2'; // Layer classification
}

// Fuel Testnet
export const fuelTestnet: FuelChainConfig = {
  id: '0',
  name: 'Fuel Testnet',
  network: 'fuel-testnet',
  nativeCurrency: {
    decimals: 9,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: {
      http: [process.env.NEXT_PUBLIC_FUEL_TESTNET_RPC_URL || 'https://testnet.fuel.network/v1/graphql'],
    },
  },
  blockExplorers: {
    default: { name: 'Fuel Explorer', url: 'https://app-testnet.fuel.network' },
  },
  testnet: true,
  color: "#00F58C", // Fuel's brand color
  logo: "/logos/fuel.png",
  faucetUrl: "https://faucet-testnet.fuel.network/",
  layer: 'L2' as const,
};

// Export all Fuel chains
export const fuelChains = [fuelTestnet];

// Helper function to check if a chain is a Fuel chain
export function isFuelChain(chain: unknown): chain is FuelChainConfig {
  return typeof chain === 'object' && chain !== null && 'id' in chain && 
         (chain.id === '0' || chain.id === '9889'); // testnet and mainnet
}
